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
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
