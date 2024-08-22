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
  getPosts: async function(req, res) {
    var board = await Board.findOne({name: req.params.name}).populate('posts');

    res.json(board.posts);
  },
  createPost: async function(req, res) {
    var post = req.body;
    var board = await Board.findOne({name: req.body.board});

    post.board = board._id;
    post = await Post.create(post);

    board.posts.unshift(post._id);
    board.postCount += 1;
    await Board.updateOne({name: board.name}, board);

    res.json(post._id);
  },
  createReply: async function(req, res) {
    var reply = req.body;
    var post = await Post.findOne({_id: req.body.parent});

    reply = await Reply.create(reply);

    post.replies.push(reply._id);
    post.replyCount += 1;
    post.latest = {author: reply.author, createdOn: reply.createdOn};
    
    await Post.updateOne({_id: post._id}, post);

    res.json(reply);
  },
  getPost: async function(req, res) {
    var post = await Post.findOne({_id: req.params.post}).populate('board replies');

    res.json(post);
  },
  deletePost: async function(req, res) {
    var post = await Post.findOne({_id: req.params.post}).populate('board');
    var board = await Board.findOne({name: post.board.name});

    board.postCount -= 1;
    board.save();

    await Post.deleteOne({_id: req.params.post});

    res.sendStatus(201);
  },
  deleteReply: async function(req, res) {
    var reply = await Reply.findOne({_id: req.params.reply});
    var post = await Post.findOne({_id: reply.parent});

    post.replyCount -= 1;
    post.save();

    await Reply.deleteOne({_id: req.params.reply});

    res.sendStatus(201);
  }
};

module.exports = controller;