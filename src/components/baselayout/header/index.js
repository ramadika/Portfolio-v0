// Dependencies
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
// import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
// Internals
import "assets/css/bootstrap.css";
import "components/baselayout/header/index.css";

export default function index() {
    return (
        <div>
          {/* <Row className="justify-content-center mt-4">Rizky Ramadika</Row> */}
          <Navbar className="justify-content-center Navbar mt-5" variant="light">
            <Nav className="Nav">
              {/* <NavLink className="NavLink" to="/home">
                HOME
              </NavLink> */}
              <NavLink className="NavLink" to="/about">
                ABOUT
              </NavLink>
              <NavLink className="NavLink header-name" to="/home">
                Rizky Ramadika
              </NavLink>
              {/* <h1 className="header-name justify-content-center pt-2">Rizky Ramadika</h1> */}
              <NavLink className="NavLink" to="/work">
                WORK
              </NavLink>
              {/* <NavLink className="NavLink" to="/contact">
                CONTACT
              </NavLink> */}
            </Nav>
          </Navbar>
        </div>
      );
}
