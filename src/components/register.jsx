import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = ({target}) => {
    console.log(target);
    let data = { ...this.state };

    data[target.name] = target.value;

    this.setState(data);
  };

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    // axios.post(`http://localhost:3000/api/register`, user)
    //   .then(res=>{
    //     console.log(res);
    //     console.log(res.data);
    //   }).catch(err=>console.log(err));

    try {
      const res = await axios.post(`http://localhost:3000/api/register`, user);
      console.log(res);
      window.location='/home';
    } catch (err) {
      console.log(err);
    }


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
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={this.handleChange}
            placeholder="Enter First Name"
            name="name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={this.handleChange}
            placeholder="Enter email"
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onSubmit variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Register;
