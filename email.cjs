const sgMail = require('@sendgrid/mail')

const API_KEY = 'insert api key';

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
