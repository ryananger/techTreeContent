import React from 'react';

import ContactForm from './ContactForm.jsx';

const Contact = function() {
  return (
    <div className='contactCard'>
      <h2>Contact Us</h2>
      <div className=''>
        Have questions? We're here to help.<br /><br />
        <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;