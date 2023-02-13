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
// const mongooseURI = process.env.DB_URI;

// mongoose.connect(mongooseURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

// mongoose.connection.on('connected', (error) => {
//     if (error) {
//         console.log(error)
//     }else {
//         console.log(chalk.cyan.bold('DB connected'))
//     }
// })








app.listen(port, () => {
    console.log(chalk.cyan.bold(`Server Started on ${port} ..... `));
})


app.use('/public', express.static(path.join(__dirname, '/public')))


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
app.use('/DayOut' ,require('./routes/DayOut'));
app.use('/TheRedMoon' ,require('./routes/TheRedMoon'));
app.use('/LesMarolles' ,require('./routes/LesMarolles'));
app.use('/TheMagicCircles' ,require('./routes/TheMagicCircles'));
app.use('/BreakingTheDark' ,require('./routes/BreakingTheDark'));

// All the art work starts
app.use('/AnotherDimension' ,require('./routes/AnotherDimension'));
app.use('/UnforeseenRendezvous' ,require('./routes/UnforeseenRendezvous'));
app.use('/DeBrouckere' ,require('./routes/DeBrouckere'));
// Gallery end


// Download Gallery start
app.use('/DownloadTheMagicCircles' ,require('./routes/DownloadTheMagicCircles'));
app.use('/DownloadTheRedMoon' ,require('./routes/DownloadTheRedMoon'));
app.use('/DownloadUnforeseenRendezvous' ,require('./routes/DownloadUnforeseenRendezvous'));
app.use('/DownloadDayOut' ,require('./routes/DownloadDayOut'));
app.use('/DownloadBreakingTheDark' ,require('./routes/DownloadBreakingTheDark'));
app.use('/DownloadDeBrouckere' ,require('./routes/DownloadDeBrouckere'));


app.use('/DownloadAnotherDimension' ,require('./routes/DownloadAnotherDimension'));






// Download Gallery end 


// Photographyworkshop start
app.use('/Photographyworkshop' ,require('./routes/Photographyworkshop'));





app.use('/Gallery' ,require('./routes/Gallery'));


app.use(cors())
