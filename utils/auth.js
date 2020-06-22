const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.secretKey;
const mongoose = require('mongoose');
      User  = mongoose.model('User');
      

exports.withAuth = function(req, res, next) {
  const token = req.body.token;

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
}