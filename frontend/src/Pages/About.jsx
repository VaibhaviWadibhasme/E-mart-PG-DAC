// src/components/About.js

import React from 'react';
//import companyImage from '../assets/company-image.jpg';
import './About.css'; 


const About = () => {
  return (
    <div className="about-container">
      <h1>About Electromart</h1>
      <section className="about-section">

        <h2>Welcome to Electromart!</h2>
        <p>
          At Electromart, we are passionate about bringing you the best in electronics and tech innovations. Whether you’re a tech enthusiast, a professional in need of the latest gadgets, or simply looking for reliable and high-quality electronics, we’ve got you covered.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded with a vision to make cutting-edge technology accessible to everyone, Electromart has grown from a small local shop into a leading destination for electronics. Our journey began with a commitment to exceptional customer service and a dedication to offering only the finest products. Today, we pride ourselves on being a trusted source for everything from the latest smartphones and laptops to essential home appliances and accessories.
        </p>
      </section>
      <section className="about-section">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li><strong>Quality and Selection:</strong> We carefully curate our inventory to ensure that every product meets our high standards. Our selection features top brands and the latest innovations, so you can shop with confidence knowing you’re getting the best.</li>
          <li><strong>Customer-Centric Service:</strong> At Electromart, you are not just another customer. Our team is here to provide personalized recommendations and support to help you find exactly what you need. We believe in building lasting relationships and being there for you long after your purchase.</li>
          <li><strong>Expertise and Innovation:</strong> Our staff consists of knowledgeable experts who stay up-to-date with the latest trends and advancements in technology. Whether you need advice on choosing the right product or troubleshooting an issue, we’re here to help.</li>
        </ul>
      </section>
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to empower you with the tools and technology that enhance your life. We strive to make every shopping experience seamless and enjoyable, ensuring that you leave our store or website feeling confident and satisfied.
        </p>
      </section>
      <section className="about-section">
        <h2>Join Us on Our Journey</h2>
        <p>
          Thank you for choosing Electromart. We are excited to be part of your tech journey and look forward to serving you. Explore our website to discover our extensive range of products, and don’t hesitate to reach out with any questions or feedback.
        </p>
        <p><strong>Contact Us:</strong> [Insert Contact Information]</p>
        <p><strong>Follow Us:</strong> [Social Media Links]</p>
      </section>
    </div>
  );
}

export default About;