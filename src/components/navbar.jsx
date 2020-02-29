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
const NavBar = ({ user, cartItems }) => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/home">Ferns & Petal</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-lg-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
          <Nav className="justify-content-end">
            {}
            {user && (
              <>
                <Nav.Link>
                  <Link>Welcome {user.name}</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/cart">Cart {cartItems}</Link>
                </Nav.Link>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  size="2x"
                  style={{ color: "white", marginRight: "10" }}
                ></FontAwesomeIcon>
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

        <Navbar bg="success" variant="dark">
          <Nav className="mr-auto">
            <NavDropdown title="Valentine" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rose Day</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {" "}
                Propose Day
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Chocolate Day
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Teddy Day</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Promise Day
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6"> Hug Day</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7"> Kiss Day</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Birthday" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Birthday Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {" "}
                Birthday Cake{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Birthday Flowers
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Anniversary" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Anniversary gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Anniversary Cake{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Anniversary Flowers
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Flowers" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Rose</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lilly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tulips</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Mix Flowers
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <NavDropdown title="Cakes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Chocolate</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Black Frest
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Red Velvet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Mango</NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
            {/* <Nav.Link href="#home">Birthday</Nav.Link>
          <Nav.Link href="#features">Valentin</Nav.Link>
          <Nav.Link href="#pricing">Anniversary</Nav.Link> */}
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
