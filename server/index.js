const express = require('express'),
      mongoose = require('mongoose');

require('dotenv').config({silent: true});

//mongoose.connect()

const app = express();

console.log(process.env.DB_URL);

app.get('/rentals', function(req, res){
  res.json({'success': true});
});

const PORT = process.env.port || 3001;

app.listen(PORT, function() {
  console.log('I am running');
});
