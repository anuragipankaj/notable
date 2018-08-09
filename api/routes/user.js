const express = require("express");
const router = express.Router();
var nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'staging107_purch@yahoo.com',
    pass: 'staging107_purch'
  }
});

var mailOptions = {
  from: 'staging107_purch@yahoo.com',
  to: 'anuragi.pankaj@tftus.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 


var email;
var password;
router.post('/', (req, res, next) => {
  const user = {
      email: req.body.email,
      password: req.body.password
  };
 email=req.body.email;
 password=req.body.password;
console.log(email+" : "+password);

  userData=user;
  res.status(201).json({
      message: 'user is created',
      user: user
  });
});



module.exports = router;