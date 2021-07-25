const sgMail = require('@sendgrid/mail')

const API_KEY = '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';

sgMail.setApiKey(API_KEY)

const message = {
   to: 'abreijo01@gmail.com',
   from: 'whiskwebapp@gmail.com',
   subject: 'Hello from sendgrid',
   text: 'Hello Beautiful',
   html: '<h1>Hello Beautiful<h1>', 
};

sgMail
    .send(message)
    .then((response) => console.log('Email sent...'))
    .catch((error) => console.log(error.message));
