import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown  } from "react-bootstrap";

import "./navigation.css";

const Navigation = () => {
  const [currentVal, setCurrentVal] = useState("");
  const onClick = (value) => {
    if (value === 1) {
      setCurrentVal("FINNISH");
    } else if (value === 2) {
      setCurrentVal("ENGLISH");
    }
  };

  return (
    <Navbar>
      <Container>
       {/*  <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">*/}
          <Nav className="me-auto justify-content-end">
            <NavLink className="nav-link" to="/">
              ABOUT
            </NavLink>
            <NavLink className="nav-link" to="/cv">
              CV
            </NavLink>
            <NavLink className="nav-link" to="/portfolio">
              PORTFOLIO
            </NavLink>
           {/* <NavDropdown
              title={currentVal === "" ? "Dropdown" : currentVal}
              id="basic-nav-dropdown"
              data-bs-toggle="dropdown"
            >
              <NavDropdown.Item onClick={() => onClick(1)} eventKey={1}>
                FINNISH
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onClick(2)} eventKey={2}>
                ENGLISH
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        {/* </Navbar.Collapse>*/}
      </Container>
    </Navbar>

  );
};

export default Navigation;
