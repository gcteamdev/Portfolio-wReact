import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      <a   href="mailto:contact@gcteam.dev" style={{textDecoration:"none"}}>
      
         <button className="contact-btn d-none d-md-block"> 
          <span>get in touch</span>
          <div class="top"></div>
          <div class="left"></div>
          <div class="bottom"></div>
          <div class="right"></div> 
        </button> 
        <button className="contact-btn d-md-none d-sm-block mobile-getintouch"> 
          <span>get in touch</span>
          <div class="top"></div>
          <div class="left"></div>
          <div class="bottom"></div>
          <div class="right"></div> 
        </button> 
      </a>
    </div>
  );
}

export default Contact;
