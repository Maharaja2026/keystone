import React from 'react';
import ContactHero from '../components/contact/contactHero';
import ContactForm from '../components/contact/contactForm';
import ContactInfo from '../components/contact/contactInfo';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;