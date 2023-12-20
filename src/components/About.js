import React from 'react';
import Image from '../components/Assets/Images/About.png';
import FeedbackForm from './FeedbackForm';

function About() {
  return (
    <>
      <h1 style={{ marginLeft: '20%', marginTop: '2%' }}>
        About Pinpoint
      </h1>
      <img src={Image} alt="About.Img" className="mx-auto d-block img-fluid pt-5" style={{ width: '60%' }} />

      <h3 style={{ marginLeft: '20%', marginRight: '18%', marginTop: '2%' }}>
        Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much more features.
      </h3>

      <h3 style={{ marginLeft: '20%', marginRight: '18%', marginTop: '2%' }}>
        We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more secure with the live tracking system
      </h3>

      <FeedbackForm />
    </>

  );
}

export default About;
