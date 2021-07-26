
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const API_KEY = 'insert api key';
const user_email = "abreijo01@gmail.com";
const user_name = "Alexander Breijo";
const options = {
    auth: {
        api_key: API_KEY
        }
    };

const client = nodemailer.createTransport(sgTransport(options));

const emailActivate = {
    from: 'Whisk Staff, whiskwebapp@gmail.com',
    to: user_email,
    subject: 'Whisk Account Activation',
    text: `Hello ${user_name}, Your account has been successfully activated`,
    html: `Hello<strong> ${user_name} </strong>,<br><br>Your account has been successfully activated!` 
};

client.sendMail(emailActivate, function(err, info){
    if(err){
        console.log(err);
    }
    else{
        console.log("Activiation Message Confirmation -  : " + info.response);
    }
});


