const express = require('express'),
      router = express.Router(),
      Rental = require('../models/rental');

router.get('', function(req, res) {
  Rental.find({}, function(err, foundRentals) {
    res.json(foundRentals);
  });
})

module.exports = router;
