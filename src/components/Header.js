import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../components/Assets/Images/image 3.png';
import image2 from '../components/Assets/Images/image 4.png';
import image3 from '../components/Assets/Images/left.png';
import image4 from '../components/Assets/Images/right.png';

export default function Header() {
  return (
    <Carousel prevIcon={<img src={image3} alt="Left Arrow" />} nextIcon={<img src={image4} alt="Right Arrow" />} indicators={false}>
      <Carousel.Item>
        <img src={image2} alt="First slide" className="mx-auto d-block" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image} alt="Second slide" className="mx-auto d-block" />
      </Carousel.Item>
    </Carousel>
  );
}
