import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";

import Navbar from 'react-bootstrap/Navbar';
import Logo from "./Assets/Images/logo.png"

function MyNavbar() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" >

              <Nav.Link >Web3Makr</Nav.Link>
                <Nav.Link >White paper</Nav.Link>
                <Nav.Link >Services</Nav.Link>
                <Nav.Link >Tool</Nav.Link>
                <Nav.Link >Contact us</Nav.Link>
              <Button variant="dark" style={{ borderColor: "#18ADE4", color: "#18ADE4", marginLeft: "110px" }}>
                Start for Free
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default MyNavbar;