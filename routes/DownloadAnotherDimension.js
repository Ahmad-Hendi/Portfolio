const express = require('express');
const router = express.Router();
const chalk = require('chalk');
const bcrypt = require('bcrypt');





router.get('/', (req, res) => {
  res.render('DownloadAnotherDimension.ejs')
})

          
module.exports = router;
    
        




