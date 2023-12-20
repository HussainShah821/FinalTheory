import React, { useState } from 'react';

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log('Submitted:', { email, contact, feedback });
  };

  const placeholderStyle = {
    fontWeight: 'bold',
    padding:'20px',
    fontSize: '16px',
    backgroundColor: '#dddddd', // Grey background color
  };

  return (
    <div className="container mt-5">
      <h4>Feedback Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col">
            <input
              type="email"
              className="form-control rounded"
              placeholder="Enter Email"
              style={placeholderStyle} 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control rounded"
              id="contact"
              placeholder="Contact"
              style={placeholderStyle} 
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control rounded"
            id="feedback"
            rows="4"
            value={feedback}
            placeholder="Enter Feedback"
            style={placeholderStyle} // Apply custom styles
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary float-end">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
