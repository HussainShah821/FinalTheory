import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image from './Assets/Images/Play 02.png';
import web from './Assets/Images/Web.png';

function HeroSection() {
    return (
        <Container fluid style={{ backgroundColor: "#344767", padding: "2%" }}>
            <Row>
                <Col className="text-center">
                    <h1 className="text-white">
                        Web3Makr: Redefining <br />
                        How You Create
                    </h1>
                    <p className="text-white" style={{ padding: "2%" }}>
                        Unlock the blockchain potential to create <br />
                        Web3 Applications
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <Image src={image} alt="Play" fluid />
                    </div>
                    <div className="d-flex align-items-center justify-content-center" style={{paddingTop: "6rem", paddingBottom:"4rem"}}>
                        <Image src={web} alt="Web" fluid />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HeroSection;
