const express = require('express'),
      mongoose = require('mongoose'),
      FakeDb = require('./fake-db');

//Load environment variables
require('dotenv').config({silent: true});

//Connect to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();

app.get('/rentals', function(req, res){
  res.json({'success': true});
});

const PORT = process.env.port || 3001;

app.listen(PORT, function() {
  console.log('I am running');
});
