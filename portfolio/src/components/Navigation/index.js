import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto justify-content-end">
          <Navbar.Brand className="brand-link justify-content-start" href="/">
            MARIA SALONEN
          </Navbar.Brand>
          <NavLink className="nav-link" to="/">
            ABOUT
          </NavLink>
          <NavLink className="nav-link" to="/cv">
            CV
          </NavLink>
          <NavLink className="nav-link" to="/portfolio">
            PORTFOLIO
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
