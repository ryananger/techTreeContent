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
  },
  checkUsername: function(req, res) {
    User.findOne({username: req.params.username})
      .then(function(user) {
        if (!user) {
          res.json(false);
        } else {
          res.json(true);
        }
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
    var user = await User.findOne({username: req.body.author});

    post.board = board._id;
    post = await Post.create(post);

    user.posts.push(post._id);

    board.posts.unshift(post._id);
    board.postCount += 1;

    board.save();
    user.save();

    res.json(post._id);
  },
  createReply: async function(req, res) {
    var reply = req.body;
    var post = await Post.findOne({_id: req.body.parent});
    var user = await User.findOne({username: req.body.author});

    reply = await Reply.create(reply);

    post.replies.push(reply._id);
    post.replyCount += 1;
    post.latest = {author: reply.author, createdOn: reply.createdOn};
    
    user.replies.push(reply._id);

    post.save();
    user.save();

    res.json(reply);
  },
  getPost: async function(req, res) {
    var post = await Post.findOne({_id: req.params.post}).populate('board replies');

    res.json(post);
  },
  deletePost: async function(req, res) {
    var post = await Post.findOne({_id: req.params.post}).populate('board');
    var board = await Board.findOne({name: post.board.name});
    var user = await User.findOne({username: post.author});

    var newUserPosts = [];

    for (var i = 0; i < user.posts.length; i++) {
      console.log(user.posts[i], post._id);

      if (user.posts[i].toString() !== post._id.toString()) {
        newUserPosts.push(user.posts[i]);
      }
    }

    user.posts = newUserPosts;
    user.save();

    board.postCount -= 1;
    board.save();

    await Post.deleteOne({_id: req.params.post});

    res.sendStatus(201);
  },
  deleteReply: async function(req, res) {
    var reply = await Reply.findOne({_id: req.params.reply});
    var post = await Post.findOne({_id: reply.parent});
    var user = await User.findOne({username: post.author});

    var newUserReplies = [];

    for (var i = 0; i < user.replies.length; i++) {
      if (user.replies[i].toString() !== reply._id.toString()) {
        newUserReplies.push(user.replies[i]);
      }
    }

    user.replies = newUserReplies;
    user.save();

    post.replyCount -= 1;

    if (post.replyCount === 0) {
      post.latest = null;
    }

    post.save();

    await Reply.deleteOne({_id: req.params.reply});

    res.sendStatus(201);
  },
  pinPost: async function(req, res) {
    var post = await Post.findOne({_id: req.params.post_id});

    if (post.pinned) {
      post.pinned = false;
      post.save();
    } else {
      post.pinned = true;
      post.save();
    }

    res.sendStatus(201);
  }
};

module.exports = controller;