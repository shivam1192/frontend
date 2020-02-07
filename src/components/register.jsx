import React, { Component } from "react";
import {Form,Button } from "react-bootstrap";
const Register = () => {
  return (
    <Form style={{width: '50%', margin:'0px auto',padding: '30px', backgroundColor: '#f1f0ed'}}>
        <Form.Group controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter First Name" />
        <Form.Text className="text-muted" >
          .
        </Form.Text>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="Name" placeholder="Enter Last Name" />
        <Form.Text className="text-muted" >
         
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" href="/homepage">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
