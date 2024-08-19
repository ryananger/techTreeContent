const axios    = require('axios');
const pusher = require('./pusher.js');
const { User, Community } = require('./db.js');

var controller = {
  createUser: function(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      })
  }
};

module.exports = controller;