import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import {FaHouseUser} from "react-icons/fa";
import {AiOutlineFundProjectionScreen, AiOutlineMessage} from "react-icons/ai";
import { IoDesktopSharp } from "react-icons/io5";


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
                      <Container>
                        <FaHouseUser color='white' /> 
                        About
                      </Container>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <Nav.Link>
                    <Container>
                        <AiOutlineFundProjectionScreen color='white' /> 
                        Portfolio
                    </Container>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link>
                  <Container>
                        <AiOutlineMessage color='white' /> 
                        Contact
                    </Container>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/resume">
                  <Nav.Link>
                  <Container>
                        <IoDesktopSharp color='white' /> 
                        Resume
                    </Container>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;
