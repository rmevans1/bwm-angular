const express = require('express');

const app = express();

app.get('/rentals', function(req, res){
  res.json({'success': true});
});

const PORT = process.env.port || 3001;

app.listen(PORT, function() {
  console.log('I am running');
});
