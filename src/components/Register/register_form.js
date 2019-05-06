import React from "react"
import Datetime from "react-datetime"
import ReactDOM from "react-dom"

import { FormGroup, Label, Input, Button, Card, CardBody } from "reactstrap"

import {
    FormCategories,
    FormPlaceHolders,
    FormLabels,
    SheetUrl
} from "../../config/FormConfig"


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            birthday: "",
            school: "",
            email: "",
            phonenumber: "",
        }
        this.change_info = this.change_info.bind(this)
        this.send = this.send.bind(this)
        this.update_birthday = this.update_birthday.bind(this)
        this.clear = this.clear.bind(this)
    }

    return_single_field(category, placeholder, label) {
        if (category === "birthday") {
            return (
                <FormGroup>
                    <Label for={category}>{label}</Label>
                    <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: placeholder }}
                        onChange={this.update_birthday}
                        ref={category}
                    />
                </FormGroup>
            )
        }
        return (
            <FormGroup>
                <Label for={category}>{label}</Label>
                <Input
                    type= {(category === "phonenumber") ? "number" : "text"}
                    name={category}
                    id={category}
                    placeholder={placeholder}
                    onChange={e => this.change_info(e, {category})}
                    ref={category}
                />
            </FormGroup>
        )
    }

    generate_form() {
        let jsx_arr = []

        for (let i = 0; i < FormCategories.length; i++) {
            let category = FormCategories[i]
            let placeholder = FormPlaceHolders[i]
            let label = FormLabels[i];
            jsx_arr.push(this.return_single_field(category, placeholder, label));
        }
        
        return jsx_arr;
    }

    change_info(e, property) {
        if (property === "name") {
            let s = e.target.value
            let name_array = s.split(" ")
            let firstname = name_array[name_array.length - 1]
            let lastname = ""
            for (let i = 0; i < name_array.length - 1; i++) {
                lastname = lastname + name_array[i] + " "
            }
            this.setState({ firstname: firstname, lastname: lastname })
        } else {
            this.setState({ [property]: e.target.value })
        }
    }

    async send() {
        let data = this.state
        await fetch(SheetUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                personalInfo: {
                    firstName: data.firstname,
                    lastName: data.lastname,
                    birthday: data.birthday,
                    school: data.school,
                    email: data.email,
                    phoneNumber: data.phonenumber,
                },
            }),
        })
            .then(alert("Đơn của bạn đã được gửi thành công"))
            .catch(err => {
                console.log(err)
            })
        //Clear all the fields
        this.clear()
    }

    clear() {
        for (let i = 0; i < FormCategories.length; i++) {
            let field = FormCategories[i]
            ReactDOM.findDOMNode(this.refs[field]).value = ""
        }
        //The birthday field is too hard to delete
        ReactDOM.findDOMNode(this.refs.birthday).getElementsByTagName(
            "input"
        )[0].value = ""
    }

    update_birthday(moment) {
        let date = new Date(moment._d)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let date_string = day.toString() + "/" + month.toString() + "/" + year.toString()
        this.setState({ birthday: date_string })
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <form>
                        {this.generate_form()}
                        <Button color="primary" onClick={this.send}>
                            Gửi đơn
                        </Button>
                    </form>
                </CardBody>
            </Card>
        )
    }
}

export default Form
