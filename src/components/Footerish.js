import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";

function Footerish() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
            <Nav className="mx-auto">                    
                <Row>
                    <Col>
                        <Nav.Link className="my-auto" href="https://github.com/DanielGPhillips">GitHub</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="my-auto" href="https://linkedin.com/daniel-phillips-6b01381b0">LinkedIn</Nav.Link>
                    </Col>
                </Row>                   
            </Nav>
        </Navbar>       
    )
}

export default Footerish;