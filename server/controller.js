const axios    = require('axios');
const { User, Board } = require('./db.js');

var controller = {
  createUser: function(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.json(user);
      })
  },
  getUser: function(req, res) {
    User.findOne({uid: req.params.uid})
      .then(function(user) {
        res.json(user);
      })
  },
  getBoard: function(req, res) {
    Board.findOne({name: req.params.name})
      .then(function(board) {
        res.json(board);
      })
  }
};

module.exports = controller;