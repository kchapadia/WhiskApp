import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
const API_KEY = process.env.API_KEY;
const options = {
  auth: {
      api_key: API_KEY
      }
  };

 
//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, temporarytoken } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    temporarytoken: jwt.sign(req.body, "123456",
        {
        expiresIn: 12000
        })
  });
  // Send verification email
  var temp_token = user.temporarytoken;
  const emailActivate = {
    from: "Whisk Staff, whiskwebapp@gmail.com",
    to: user.email,
    subject: "Whisk App Verify Account",
    html: `Hello<strong> ${user.name}</strong>,<br><br><p>Copy the following actiavtion code and paste it into the activation field by clicking on the link below:<p><br><br>${user.temporarytoken}<br><br><a href="http://localhost:3000/verification">Click here to activate your account.</a>`
    };
    const client = nodemailer.createTransport(sgTransport(options));
    client.sendMail(emailActivate, function(err, info)
    {
    if(err)
        console.log(err);
    else
      {
        console.log("Activation Message Confirmation - : " + info.response);
      }    
    });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
      temporarytoken: user.temporarytoken,
      active: user.active  
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// @desc Activate User
// @route PUT /api/users/verify/:token
// @access Public
const verifyUser = asyncHandler(async(req, res) => {
  User.findOne({temporarytoken: req.params.token}, (err, user) => 
  {
     if(err)
      throw err;

      const token = req.params.token;
      console.log("the token is", token);

      //Function to verify the users token
      jwt.verify(token, "123456", (err,decoded) =>
      {
          if(err)
              res.json({ success: false, message: "Activation link has expired." });
          else if(!user)
          {
              res.json({ success: false, message: "Activation link has expired." });
          }
          else{
              user.temporarytoken = false;
              user.active = true;
              // Mongoose Method to save user into database
              user.save(err => {
                  if(err)
                      console.log(err);
                  else{
                      const emailActivate = {
                          from: "Whisk Staff, whiskwebapp@gmail.com",
                          to: user.email,
                          subject: "Whisk App Account Activated",
                          text: `Hello ${user.name}, Your account has been successfully activated!`,
                          html: `Hello<strong> ${user.name}</strong>,<br><br>Your account has been successfully activated!`
                          };
                      const client = nodemailer.createTransport(sgTransport(options));
                      client.sendMail(emailActivate, function(err, info)
                      {
                          if(err)
                              console.log(err);
                          else
                          {
                              console.log("Activation Message Confirmation - : " + info.response);
                          }    
                      });
                  }    
              });
              res.json({
                  succeed: true,
                  message: "User has been successfully activated"
                  });
          }

      });
  });
});

// @desc Change the forgotten password
// @route /api/users/forgotPassword/:token
// @access Public
const forgotUserPassword = asyncHandler(async (req, res) => {
  const { newpassword, confirmpassword } = req.body;
  User.findOne({temporarytoken: req.params.token}, (err, user) => 
  {
    if(err)
      throw err;

      const token = req.params.token;
      console.log("the token is", token);      

      jwt.verify(token, "123456", (err,decoded) =>
      {
          if(err)
              res.json({ success: false, message: "Activation link has expired. Gaming" });
          else if(!user)
          {
              res.json({ success: false, message: "Activation link has expired. Not gamer" });
          }
          else
          {
            // Check to see if the new password and confirmation password are the same
            if(req.body.newpassword === req.body.confirmpassword)
            {
             user.password = req.body.newpassword;
             user.temporarytoken = false;

            const updatedUser = user.save();
    
              res.json({
              _id: updatedUser._id,
              name: updatedUser.name,
              email: updatedUser.email,
              pic: updatedUser.pic,
              isAdmin: updatedUser.isAdmin,
              token: generateToken(updatedUser._id),
              succeed: true,
              message: "User has reset their password"
              });
            }
            else
            {
              res.status(401);
              throw new Error("Passwords do not match");
            }        
          }        
        });
  
});
});

// @desc Send forgot email to user
// @route /api/users/sendForgotEmail
// @access Public
const sendForgotEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // Check if email is in database
  const user = await User.findOne({ email });
  if(user)
  {
    // Give a new temp token
    user.temporarytoken = jwt.sign(req.body, "123456",
    {
    expiresIn: 12000
    });
    const updatedUser = user.save();
    
    //const sgMail = require('@sendgrid/mail')
    
    sgMail.setApiKey(API_KEY)

    const message = {
      to: user.email,
      from: 'whiskwebapp@gmail.com',
      subject: 'Whisk Password Reset',
      text: `Please click the link to reset your password \n\n ${user.temporarytoken}`,
      //html: '<h1>Please click the link to reset your password \n\n <h1>', 
    };

    sgMail
        .send(message)
        .then((response) => console.log('Email sent...'))
        .catch((error) => console.log(error.message));

        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          pic: user.pic,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
          temporarytoken: user.temporarytoken,
          active: user.active
          });
  }
  else
  {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export { authUser, updateUserProfile, registerUser, verifyUser, forgotUserPassword, sendForgotEmail};
