import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    }

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />

                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;
