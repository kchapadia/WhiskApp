const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const CLIENT_ID = '237617397986-ii1j0acvh68m68rktk802hqfoqdl89ek.apps.googleusercontent.com';
const CLIENT_SECRET = 'cdSHSvZcevfjrFaKF25ctP4n';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04OULncsDfsOVCgYIARAAGAQSNwF-L9IrH1WHcKjY_Y6DtdgM2Miu2SlZxon60thymlt5Jvgt3YJa_ysT75XvmiKhjuHlH-3LUB8';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail()
{
    try{
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'whiskwebapp@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'whiskwebapp@gmail.com',
            to: 'abreijo01@gmail.com',
            subject: 'This is a test',
            text: 'Hello this is a test to see if the app is working',
            html: '<h1>Hello this is a test to see if the app is working<h1>'
        };

        const result = await transport.sendMail(mailOptions)
        return result
    }
    catch(error){
        return token
    }
}

sendMail()
.then((result) => console.log('Email is sent...', result))
.catch((error) => console.log(error.message))