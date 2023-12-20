import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./Assets/Images/logo.png";
import {unstable_renderSubtreeIntoContainer} from "react-dom";

function Footer() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img src={Logo} alt="Logo" className="mr-2" />
                    Web3Makr
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link >White paper</Nav.Link>
                        <Nav.Link >Services</Nav.Link>
                        <Nav.Link >Tool</Nav.Link>
                        <Nav.Link >Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Footer;
