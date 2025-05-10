import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Service_hj17po7", 
        "template_irzny2j", 
        formRef.current,
        "1NIeGZpNAXblnKnB1"
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (_result) => {
          alert("Message sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            title: "",
            message: "",
          });
        },
        // eslint-disable-next-line no-unused-vars
        (_error) => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>Tidef i-tech team did love to hear from you! <br></br>Fill out the form below.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label>Full Name <span className="required">*</span></label>
            <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required aria-required="true" />
          </div>

          <div className="input-group">
            <label>Email Address <span className="required">*</span></label>
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required aria-required="true" />
          </div>

          <div className="input-group">
            <label>Phone Number <span className="required">*</span></label>
            <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required aria-required="true" />
          </div>

          <div className="input-group">
            <label>Title <span className="required">*</span></label>
            <input type="text" name="title" placeholder="Enter the subject" value={formData.title} onChange={handleChange} required aria-required="true" />
          </div>

          <div className="input-group">
            <label>Message <span className="required">*</span></label>
            <textarea name="message" placeholder="Type your message here" value={formData.message} onChange={handleChange} required aria-required="true"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
      
    </div>
   
   
    </>
  );
};

export default ContactPage;