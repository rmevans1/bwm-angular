const express = require('express'),
      mongoose = require('mongoose'),
      FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

//Load environment variables
require('dotenv').config({silent: true});

//Connect to database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();

// Load api routes
app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.port || 3001;

app.listen(PORT, function() {
  console.log('I am running');
});
