import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import axios from "axios";
import auth from '../services/authService';


class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target }) => {
    console.log(target);
    let data = { ...this.state };

    data[target.name] = target.value;

    this.setState(data);
  };

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
   
    auth.login(user.email,user.password);
   
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{
          width: "50%",
          margin: "0px auto",
          padding: "30px",
          backgroundColor: "#f1f0ed"
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button variant="primary" type="submit" href="">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
