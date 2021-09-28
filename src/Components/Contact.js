import React from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <>
        <h3 className="contact-header">I'd love to hear from you!</h3>
        <div className="contact">            
            <div>
                <h2>Contact me directly 👇</h2>
                <ul className="contact-info">
                    <li>Chandra Shekhar Mondal</li>
                    <li>chandrapub@gmail.com</li>
                    <li>+45 71 59 47 41</li>
                </ul>
            </div>
            <div>
                <h2>Contact Form</h2>
                <ContactForm />
            </div>
        </div>
        </>
    )
}
