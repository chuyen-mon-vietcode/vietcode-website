import React from "react";
import Datetime from 'react-datetime';
import ReactDOM from 'react-dom';
import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";

let url = "http://localhost:3000/spreadsheets/1D4Xf2oozL27htNN15Gdx_Qa2SltdrtfgZJ6orQk4WGs/Sheet1";
let ref_array = ['name','email','phonenumber','school','birthday'];

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      birthday: "",
      school: "",
      email: "",
      phonenumber: "",
    }
    this.change_info = this.change_info.bind(this);
    // this.check = this.check.bind(this);
    this.send = this.send.bind(this);
    this.update_birthday = this.update_birthday.bind(this);
    this.clear = this.clear.bind(this);
  }
  change_info(e,property){
    if(property === "name")
    {
      let s = e.target.value;
      let name_array = s.split(" ");
      let firstname = name_array[name_array.length - 1];
      let lastname = "";
      for(let i=0;i<name_array.length-1;i++)
      {
        lastname = lastname + name_array[i] + " ";
      }
      this.setState({firstname:firstname,lastname:lastname});
    }
    else
    {
    this.setState({[property]:e.target.value});
    }
  }
  async send(){
    let data = this.state;
    await fetch(url,{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalInfo:
        {
            firstName: data.firstname,
            lastName: data.lastname,
            birthday: data.birthday,
            school: data.school,
            email: data.email,
            phoneNumber: data.phonenumber
        }
      })
    }
  ).then(alert("ĐƠn của bạn đã được gửi thành công"))
   .catch(err => {console.log(err)})
  //Clear all the fields
  this.clear();
  }
  // check(){
  //   let data = this.state
  //   console.log(JSON.stringify({
  //     personalInfo:
  //     {
  //         firstName: data.firstname,
  //         lastName: data.lastname,
  //         birthday: data.birthday,
  //         school: data.school,
  //         email: data.email,
  //         phoneNumber: data.phonenumber
  //     }
  //   }));
  // }

  clear(){
    for(let i=0;i<ref_array.length;i++)
    {
      let field = ref_array[i];
      ReactDOM.findDOMNode(this.refs[field]).value = '';
    }
    //The birthday field is too hard to delete
    ReactDOM.findDOMNode(this.refs.birthday).getElementsByTagName('input')[0].value = '';
  }
  update_birthday(moment){
    let date = new Date(moment._d);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let date_string = day.toString() + "/" + month.toString() + "/" + year.toString();
    this.setState({birthday:date_string});
  }
  render(){
  return (
    <Card>
      <CardBody>
        <form>

        <FormGroup>
            <Label for="name">Họ và tên (Nhớ có dấu cách nhé :>)</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Nhập họ và tên của bạn"
              onChange = {(e) => this.change_info(e,"name")}
              ref = "name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="birthday">Ngày sinh (Định dạng tháng/ngày/năm)</Label>
            <Datetime
              timeFormat={false}
              inputProps={{placeholder:"Nhâp ngày sinh của bạn"}}
              onChange = {this.update_birthday}
              ref = "birthday"
            />
          </FormGroup>

          <FormGroup>
            <Label for="school">Trường</Label>
            <Input
              type="text"
              name="school"
              id="school"
              placeholder="Nhập tên trường của bạn"
              onChange = {(e) => this.change_info(e,"school")}
              ref = "school"
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="NHập địa chỉ email của bạn"
              onChange = {(e) => this.change_info(e,"email")}
              ref = "email"
            />
          </FormGroup>

          <FormGroup>
            <Label for="phonenumber">Số điện thoại</Label>
            <Input
              type="number"
              name="phone number"
              id="phone number"
              placeholder="Nhập số điện thoại của bạn"
              onChange = {(e) => this.change_info(e,"phonenumber")}
              ref = "phonenumber"
            />
          </FormGroup>
          <Button color="primary" onClick = {this.send}>
            Gửi đơn
          </Button>
          {/* <Button color = "primary" onClick = {this.clear}>Check</Button> */}
        </form>
      </CardBody>
    </Card>
  );
};
}

export default Form;