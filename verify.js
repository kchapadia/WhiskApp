import router from "/backend/routes/userRoutes.js";
// const verifyUser = asyncHandler(async(req, res) = > ...)
router.put("/verify/:token", (req, res) => 
{
    
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
                            from: "Localhost Staff, staff@localhost.com",
                            to: user.email,
                            subject: "Localhost Account Activated",
                            text: `Hello ${user.name}, Your account has been successfully activated!`,
                            html: `Hello<strong> ${user.name}</strong>,<br><br>Your account has been successfully activated!`
                            };
                        
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