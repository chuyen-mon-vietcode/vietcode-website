import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";

let url = "http://localhost:3000/spreadsheets/1D4Xf2oozL27htNN15Gdx_Qa2SltdrtfgZJ6orQk4WGs/Sheet1";

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
    this.check = this.check.bind(this);
    this.send = this.send.bind(this);
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
            firstname: data.firstname,
            lastname: data.lastname,
            birthday: data.birthday,
            school: data.school,
            email: data.email,
            phonenumber: data.phonenumber
        }
      })
    }
  ).then(console.log("success"))
   .catch(err => {console.log(err)})
  }
  check(){
    let data = this.state
    console.log(JSON.stringify({
      personalInfo:
      {
          firstname: data.firstname,
          lastname: data.lastname,
          birthday: data.birthday,
          school: data.school,
          email: data.email,
          phonenumber: data.phonenumber
      }
    }));
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
            />
          </FormGroup>

          <FormGroup>
            <Label for="name">Ngày sinh (định dạng ngày/tháng/năm) </Label>
            <Input
              type="text"
              name="birthday"
              id="birthday"
              placeholder="Nhập ngày sinh của bạn"
              onChange = {(e) => this.change_info(e,"birthday")}
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
            />
          </FormGroup>

          <FormGroup>
            <Label for="phone">Số điện thoại</Label>
            <Input
              type="number"
              name="phone number"
              id="phone number"
              placeholder="Nhập số điện thoại của bạn"
              onChange = {(e) => this.change_info(e,"phonenumber")}
            />
          </FormGroup>
          <Button color="primary" onClick = {this.send}>
            Gửi đơn
          </Button>
          <Button color = "primary" onClick = {this.check}>Check</Button>
        </form>
      </CardBody>
    </Card>
  );
};
}

export default Form;