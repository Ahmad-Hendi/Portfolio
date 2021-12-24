const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const chalk = require('chalk');
const nodemailer = require("nodemailer");
const cors = require('cors');
require('dotenv').config({path: path.join(__dirname, '/.env')});








const app =    express();

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
    console.log(chalk.cyan.bold(`Server Started on ${port} ..... `));
})


app.use('/public', express.static(path.join(__dirname, 'public')))


app.use('/', require('./routes/aboutme'));
// app.use('/register' ,require('./routes/register'));
app.use('/navigation' ,require('./routes/navigation'));
app.use('/photography' ,require('./routes/photography'));
app.use('/workshop' ,require('./routes/workshop'));
app.use('/digital' ,require('./routes/digital'));
app.use('/portrait' ,require('./routes/portrait'));
app.use('/wedding' ,require('./routes/wedding'));
app.use('/products' ,require('./routes/products'));
app.use('/events' ,require('./routes/events'));
app.use('/shop' ,require('./routes/shop'));
app.use('/weddingGallery' ,require('./routes/weddingGallery'));
app.use('/weddingGalleryYassin' ,require('./routes/weddingGalleryYassin'));
app.use('/weddingGalleryAsli' ,require('./routes/weddingGalleryAsli'));
app.use('/productDetailsOne' ,require('./routes/productDetailsOne'));
app.use('/productDetailsTwo' ,require('./routes/productDetailsTwo'));
app.use('/productDetailsThree' ,require('./routes/productDetailsThree'));
app.use('/productDetailsFour' ,require('./routes/productDetailsFour'));
app.use('/productDetailsFive' ,require('./routes/productDetailsFive'));
app.use('/productDetailsSix' ,require('./routes/productDetailsSix'));
app.use('/productDetailsSeven' ,require('./routes/productDetailsSeven'));
app.use('/productDetailsEight' ,require('./routes/productDetailsEight'));

app.use(cors())

// app.listen(process.env.PORT || 3000 )