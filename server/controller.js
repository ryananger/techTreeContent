const axios    = require('axios');
const {User, Board, Post, Reply} = require('./db.js');

var controller = {
  createUser: function(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      })
  },
  getUser: function(req, res) {
    User.findOne({uid: req.params.uid}).populate('posts replies')
      .then(function(user) {
        res.json(user);
      })
  }
};

module.exports = controller;