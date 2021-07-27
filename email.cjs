const sgMail = require('@sendgrid/mail')

const API_KEY = 'insert api key';

sgMail.setApiKey(API_KEY)

const message = {
   to: 'user.email',
   from: 'whiskwebapp@gmail.com',
   subject: 'Whisk Password Reset',
   text: 'Please click the link to reset your password \n\n <hyperlink>',
   html: '<h1>Please click the link to reset your password \n\n <hyperlink><h1>', 
};

sgMail
    .send(message)
    .then((response) => console.log('Email sent...'))
    .catch((error) => console.log(error.message));
