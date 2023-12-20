import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Rectangle1Image from './Assets/Images/Rectangle 51.png';
import img1 from "./Assets/Images/Aave-logo.png";
import img2 from "./Assets/Images/Group 151.png";
import img3 from "./Assets/Images/Group 152.png";
import img4 from "./Assets/Images/Group 153.png";
import img5 from "./Assets/Images/Group 154.png";
import img6 from "./Assets/Images/Group 155.png";
import img7 from "./Assets/Images/Group 156.png";

function Section2() {
    const images = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <>
            <Container fluid style={{ backgroundColor: "#ececec", margin: '20px 0' }}>
                <Row className="d-flex justify-content-around flex-wrap">
                    {images.map((img, index) => (
                        <Col key={index} xs={12} md={1} className="mb-4">
                            <Image src={img} alt={`Image ${index + 1}`} fluid style={{ maxWidth: '100%', height: 'auto' }} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container fluid style={{ margin: '30px 50px', marginBottom: '30px' }}>
                <Row>
                    {/* First Section */}
                    <Col md={4} className="d-flex align-items-center justify-content-center">
                        <div>
                            <h2>Create your own Web3 Masterpiece</h2>
                            <p>
                                Most entrepreneurs want to create their own web3 sites,
                                unfortunately, they don't know much about creating one.
                                Web3Makr makes it easier for newbies to create a blockchain-based
                                collectibles solution without the hassle of leaving their favorite
                                creation tools and by simple drag and drop functionality.
                            </p>
                            <Button style={{ backgroundColor: 'purple' }}>Start building</Button>
                        </div>
                    </Col>

                    {/* Second Section */}
                    <Col md={8} className="d-flex align-items-center justify-content-center" style={{marginBottom: '30px',marginTop: '30px' }}>
                        <Image src={Rectangle1Image} alt="Rectangle1" fluid style={{ maxWidth: '55%', height: 'auto' }} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Section2;
