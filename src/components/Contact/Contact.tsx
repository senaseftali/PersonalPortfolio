import React from 'react';
  import './Contact.css';

function Contact() {
  return (
    <div className="container">
         <section className="section-4" id="section-4">
        <h1 className="section-heading section-4-heading">Contact Me</h1>
        <form className="contact-form center">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Submit" className="contact-form-btn" />
        </form>
      </section>
    </div>
  );
}

export default Contact;
