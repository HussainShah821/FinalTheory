import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from '../components/Assets/Images/logo.png';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-light text-dark">
      <Container>
        <Navbar.Brand href="#home">
           
            <Link to="/" > <img src={Image} alt="logo" /> </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={"text-dark"} href="#home"><Link to="/about" >About</Link></Nav.Link>
            <Nav.Link className={"text-dark"} href="#link">Contact us</Nav.Link>
            <Nav.Link className={"text-dark"} href="#link">TimeTable</Nav.Link>
            <Nav.Link className={"text-dark"} href="#link">Live Location</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger">Sign In</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
