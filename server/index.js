const express = require('express'),
      mongoose = require('mongoose'),
      Rental = require('./models/rental');

//Load environment variables
require('dotenv').config({silent: true});

//Connect to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

const app = express();

app.get('/rentals', function(req, res){
  res.json({'success': true});
});

const PORT = process.env.port || 3001;

app.listen(PORT, function() {
  console.log('I am running');
});
