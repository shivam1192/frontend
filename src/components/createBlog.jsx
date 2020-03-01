import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import auth from '../services/authService';
import blog from '../services/blogService';
class CreateBlog extends Component {
  state = {
    user:"",
    title: "",
    content: ""
  };

  componentDidMount() {
    const user= auth.getCurrentUser();

    if(user)
    {
      console.log("currentuser:",user);
      console.log(user);
     this.setState({ user });
    }
    return;
  }
  handleChange = ({ target }) => {
    let data = { ...this.state };

    data[target.name] = target.value;

    this.setState(data);
  };
  handleSubmit = async event => {
    event.preventDefault();
    const data={
      user: this.state.user,
      blog:{
        title: this.state.title,
        content: this.state.content
      }
    }
    blog.createBlog(data);
    console.log(data)
    // auth.login(user.email,user.password);
  };
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{
          width: "50%",
          margin: "0px auto",
          padding: "30px",
          backgroundColor: "#f1f0ed" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                name="title"
                type="title"
                placeholder="Enter title"
              />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type="content"
                name="content"
                placeholder="content"
              />
            </Form.Group>

            <Button variant="primary" type="submit" href="">
              Submit
          </Button>
        </Form>
         );
    }
}

export default CreateBlog;