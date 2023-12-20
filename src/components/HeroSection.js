import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Button from 'react-bootstrap/Button';
import Image from '../components/Assets/Images/Group 10.png';

export const HeroSection = () => {
  return (
    <>
      <div className="container row pt-5 ml-3" style={{ marginLeft: '3%' }}>
        <div className="col-md-8">
          <h1 className='font-weight-bold'>The Fast Pinpoint</h1>
          <h1 className="text-danger font-weight-bold">Get Started -&gt;</h1>
          <h1 className="font-weight-bold">Tracking & Reservation.</h1>
        </div>
        <div className="col-md-4">
          <Link to="/about">
            <img
              src={Image}
              alt="Your Alt Text Here"
              className="img-fluid"
              style={{ maxWidth: '90%', height: 'auto', marginLeft: '40%' }}
            />
          </Link>
        </div>
      </div>

      <div style={{ marginRight: '7rem', marginLeft: '7rem', marginTop: '2rem', marginBottom: '2rem' }}>
        <h4>Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes, offices, and companies with live tracking, history recording, estimated arrival time, and usage report generation and much more features</h4>
      </div>
    </>
  );
};

      