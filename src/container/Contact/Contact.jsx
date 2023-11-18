import React, { useState, useRef } from 'react'
import './Contact.scss';
import emailjs from '@emailjs/browser';

import { AppWrap } from '../../wrapper';


const Contact = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_36qmb65', 'template_ooqgu3b', form.current, '22DerpaukgZqhJT_y')
      .then((result) => {
        //   setOpen(true);
        setLoading(false);
        setIsFormSubmitted(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <div className="app__contact-container">
        <div className="app__contact-wrapper">
          <div className="app__contact-title">
            Contact
          </div>
          <div className="app_contact-desc">
            Feel free to reach out to me for any questions or opportunities!
          </div>
          {!isFormSubmitted ? (
            <form className="app__contact-contactForm app__flex" ref={form} onSubmit={handleSubmit}>
              <div className="app__flex">
                <input className="p-text" type="text" placeholder="Your Name" name="from_name" />
              </div>
              <div className="app__flex">
                <input className="p-text" type="email" placeholder="Your Email" name="from_email" />
              </div>
              <div className="app__flex">
                <input className="p-text" type="text" placeholder="Subject" name="subject" />
              </div>
              <div>
                <textarea className="p-text" placeholder="Message" rows="4" name="message" />
              </div>
              <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
            </form>
          ) : (
            <div>
              <h3 className="head-text">
                Thank you for getting in touch!
              </h3>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default AppWrap(
  Contact,
  'contact',
  'app__whitebg'
  //'app__primarybg'
);