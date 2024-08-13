import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_i42a6kn', // Replace with your EmailJS service ID
            'template_tf47ckg', // Replace with your EmailJS template ID
            form.current,
            'zHaarZbAw5wLb837x' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            setFormData({ user_name: '', user_email: '', message: '' });
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send your message. Please try again later.');
        });
    };

    return (
        <div className="contact-us-container">
            <div className="contact-header">
                <h2>Contact Us</h2>
                <p>We are here to assist you. Feel free to reach out to us with any inquiries or feedback.</p>
            </div>
            <div className="contact-section">
                <div className="contact-info">
                    <h3>Reach us at</h3>
                    <p>Address: 5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme, Andheri (W), Mumbai 400 049 India</p>
                    <p>Mobile: 9029435311 / 9324095272 / 9987062416</p>
                    <p>Email: electromart@gmail.com</p>
                </div>
                <div className="contact-form">
                    <h3>Get In Touch With Us!</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.908352363286!2d72.8303160741322!3d19.111676082100185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c3a5e26d7b%3A0x89a89f343cff9c29!2sSM%20VITA!5e0!3m2!1sen!2sin!4v1722927194890!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Contact;