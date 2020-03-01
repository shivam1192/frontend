import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Login from "./login";
import Register from "./register";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
const NavBar = ({ user }) => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/home">Blogging </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
           
          </Nav>
          <Nav className="justify-content-end">
            {}
            {user && (
              <>
                <Nav.Link>
                  <Link>Welcome {user.name}</Link>
                </Nav.Link>
               
                <Nav.Link>
                  <Link to="/myblogs">My Blogs</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/logout">Logout</Link>
                </Nav.Link>
              </>
            )}

            {!user && (
              <>
                <Nav.Link>
                  <Link to="/login">Login</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/register">SignUp</Link>
                </Nav.Link>

                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                  style={{ color: "white", marginRight: "8" }}
                ></FontAwesomeIcon>
              </>
            )}
          </Nav>
        </Navbar>

       
      </div>
    </>
  );
};

export default NavBar;
