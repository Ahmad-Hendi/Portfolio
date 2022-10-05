const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
const chalk = require('chalk');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
require('dotenv').config({path: path.join(__dirname, '/.env')});




router.get('/', (req, res) => {
  res.render('register.ejs')

})



router.post('/', (req, res) => {
  console.log(req.body);
  let newRegister = new User ({
        firstName : req.body.firstName,
        email : req.body.email,
        message: req.body.message,
        registeredAt: new Date,
      });

       


      


      // node mailer start
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: process.env.SMTP_PORT,
        secure: true,
        // tls: {
        //   rejectUnauthorized: false
        // },
        requireTLS: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,

        },
        
      });
      
      let mailOptions = {
        from: process.env.EMAIL,
        to: [req.body.email, process.env.EMAIL ],
        subject: 'Ahmad Hendi',
        attachments:  [
          { filename: '3dEffect.gif', path: './public/images/3dEffect.gif' }
        ],
        html : `
        Hello ${req.body.firstName}. Enjoy using the filter <br>
        Don't hesitate to follow me on socials 
        <br>
        <a href="https://www.instagram.com/?hl=en"> Instagram </a> <br>
        <a href="https://www.tiktok.com/@ahmad_hendi_?lang=en">TikTok </a> <br>
        <a href="https://www.youtube.com/channel/UCpQ6g_-V58bvbhSF4pC3a4Q"> YouTube </a> <br>
        <a href="https://www.pinterest.com/ahmad_hendi_/"> Pinterest </a> <br>
        
        <br>
        Here is a copy of your message <br>
        <span style="color:gray; font-size: 130% ">  📃 ${req.body.message} 📃 <span>
        `,
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log(chalk.bold.cyan('Email sent: ' + info.response));
        }

      });
      newRegister.save();
      
      res.redirect('/navigation')
});


nodemailer 

module.exports = router;

  
    
    
        




