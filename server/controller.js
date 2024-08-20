const axios    = require('axios');
const { User, Board, Post } = require('./db.js');

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
  },
  getPosts: function(req, res) {

  },
  createPost: async function(req, res) {
    var post = req.body;
    var board = await Board.findOne({name: req.body.board});

    post.board = board._id;
    post = await Post.create(post);
    
    board.posts.unshift(post._id);
    await Board.updateOne({name: board.name}, board);

    res.sendStatus(200);
  }
};

module.exports = controller;