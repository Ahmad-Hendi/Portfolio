const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const chalk = require('chalk');
const nodemailer = require("nodemailer");
require('dotenv').config(console.log( {path: path.join(__dirname, '/.env')}));


console.log(chalk.yellow(process.env));





const app = express();

let port = process.env.PORT;


// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// Connecting to MongoDB
const mongooseURI = process.env.DB_URI;

mongoose.connect(mongooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.connection.on('connected', (error) => {
    if (error) {
        console.log(error)
    }else {
        console.log(chalk.cyan.bold('DB connected'))
    }
})








app.listen(port, () => {
    console.log(chalk.cyan.bold(`Server Started on  ..... `));
})


app.use('/public', express.static(path.join(__dirname, 'public')))


app.use('/', require('./routes/aboutme'));
app.use('/register' ,require('./routes/register'));
app.use('/navigation' ,require('./routes/navigation'));

// app.listen(process.env.PORT || 3000 )