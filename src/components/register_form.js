import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="school">School</Label>
            <Input
              type="text"
              name="school"
              id="school"
              placeholder="school"
            />
          </FormGroup>
          <FormGroup>
            <Label for="class">Class</Label>
            <Input
              type="text"
              name="class"
              id="class"
              placeholder="Enter your class"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email address</Label>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone number</Label>
            <Input
              type="number"
              name="phone number"
              id="phone number"
              placeholder="Phone number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="from_where">Why do you know us (from friends, facebook, etc) </Label>
            <Input
              type="text"
              name="from_where"
              id="from_where"
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Forms;