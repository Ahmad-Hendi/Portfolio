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


app.use('/', require('./routes'));
app.use('/register' ,require('./routes/register'));
app.use('/index' ,require('./routes/index'));

// Download starts
app.use('/navigation' ,require('./routes/navigation'));
app.use('/DownloadWarmSand' ,require('./routes/DownloadWarmSand'));
app.use('/DownloadColdNight' ,require('./routes/DownloadColdNight'));
app.use('/DownloadBlack&White' ,require('./routes/DownloadBlack&White'));
app.use('/DownloadCinematic' ,require('./routes/DownloadCinematic'));
// Download Ends

app.use('/workshop' ,require('./routes/workshop'));

// Presets start
app.use('/presets' ,require('./routes/presets'));
app.use('/presetDetails' ,require('./routes/presetDetails'));
app.use('/presetDetailsNightOn' ,require('./routes/presetDetailsNightOn'));
app.use('/presetDetailsSand' ,require('./routes/presetDetailsSand'));
app.use('/presetDetailsB&W' ,require('./routes/presetDetailsB&W'));
app.use('/presetDetailsNaturalTone' ,require('./routes/presetDetailsNaturalTone'));
// Presets End


app.use('/myLinks' ,require('./routes/myLinks'));

// Services start
app.use('/services' ,require('./routes/services'));
app.use('/photography' ,require('./routes/photography'));
app.use('/videography' ,require('./routes/videography'));

app.use('/wedding' ,require('./routes/wedding'));
app.use('/products' ,require('./routes/products'));
// Services end

// Gallery start
app.use('/RoyalPalaceOne' ,require('./routes/RoyalPalaceOne'));
app.use('/RoyalPalace2023' ,require('./routes/RoyalPalace2023'));
app.use('/AtomiumNewYear' ,require('./routes/AtomiumNewYear'));
app.use('/AtomiumNewYear2019' ,require('./routes/AtomiumNewYear2019'));
// Gallery end


// Download Gallery start
app.use('/DownloadRoyalPalace' ,require('./routes/DownloadRoyalPalace'));
app.use('/DownloadTheBelgianMonarchy' ,require('./routes/DownloadTheBelgianMonarchy'));
app.use('/DownloadTheAtomsForPeace' ,require('./routes/DownloadTheAtomsForPeace'));
app.use('/DownloadAtomium' ,require('./routes/DownloadAtomium'));




// Download Gallery end 


app.use(cors())
