import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


function Navibar() {
    return (  
        <Navbar bg="dark" expand="lg" variant="dark">
            <LinkContainer to ="/">
              <Navbar.Brand>Daniel Phillips</Navbar.Brand>  
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>
                      
                      About
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <Nav.Link>Portfolio</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <Nav.Link>Resume</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;
