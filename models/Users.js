const mongoose = require('mongoose');
const chalk = require('chalk');

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: [true, chalk.red.bold("FirstName is required")], 
        unique: false,
        
    },
   
    email: { 
        type: String, 
        trim: true,  // It's basically there to ensure the strings you save through the schema are properly trimmed.
        lowercase: true,
        unique: false ,
        required: [true, chalk.red.bold("Email is required")],
        index : {
            unique : false
        },
        minlength : [6, chalk.red.bold("Email cant be less than 6 characters")],
        maxlength : [30, chalk.red.bold("Email cant be more than 30 characters")],
    },
    message: {
        type: String, 
        required: [true, chalk.red.bold("message is required")]
    },
    registeredAt: { 
        type: Date, 
        index: true 
    },
  });

  const User = mongoose.model('User', userSchema);
  userSchema.indexes()
  
  module.exports = User;



  




