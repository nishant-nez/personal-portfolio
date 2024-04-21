import axios from 'axios';
import emailjs from '@emailjs/browser';

const sendEmail = (name, email, subject, message) => {
    const serviceID = 'service_u1t0dyt';
    const templateID = 'template_evvt1f8';
    const publicKey = 'CRXdJzV6J5l-H2uYy';

    const templateParams = {
        from_name: name,
        from_email: email,
        from_subject: subject,
        message: message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response);
        }).catch((error) => {
            console.error('Error sending email: ', error);
        });
};

export default sendEmail;
