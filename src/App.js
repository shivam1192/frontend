import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import auth from './services/authService';
import { ToastContainer } from 'react-toastify';
import NavBar from "./components/navbar";
import Login from "./components/login";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateBlog from './components/createBlog'
import Homepage from "./components/homepage";
import Register from './components/register';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/logout';
import MyBlogs from "./components/myBlogs";

class App extends Component {
  state = {
    user:""
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

  render() {
    return (
      <div className="App div">
       <ToastContainer/>
        <NavBar  user={this.state.user} ></NavBar>

        <main className="container">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/createblog" component={CreateBlog}/>
            <Route path="/myblogs" component={MyBlogs}></Route>
            {/* <Route path="/logout" component={Logout} /> */}
            <Route
              path="/home"
              render={() => <Homepage flowers={this.state.flowers} addToCart={this.addToCart} />}
            />
            <Redirect from="/" exact to="/home" />

           
            {/* <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
