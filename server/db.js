const mongoose = require('mongoose');
const url = process.env.MONGODB;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.set('strictQuery', true);
mongoose.connect(url, options, function(a) {
  console.log('Connected to mongoDB.');
});

const userSchema = new mongoose.Schema({
  uid:       String, // from firebase auth
  username:  String,
  email:     String,

  createdOn: {type: Date, default: Date.now},

  settings: Object,

  notifications: [Object],
  posts:    [Object],
  replies:  [Object],
  messages: [Object],

  admin: Boolean,
  settings: Object
});

const boardSchema = new mongoose.Schema({
  name: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  latest: Object,
  postCount: {type: Number, default: 0}
});

// Post Schema
const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  board: {type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
  text: String,
  latest: Object,
  replyCount: {type: Number, default: 0},
  pinned: Boolean,
  createdOn: {type: Date, default: Date.now}
});

const replySchema = new mongoose.Schema({
  author: String,
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  text: String,
  createdOn: {type: Date, default: Date.now}
});

const User = new mongoose.model('User', userSchema);
const Board = new mongoose.model('Board', boardSchema);
const Post = new mongoose.model('Post', postSchema);
const Reply = new mongoose.model('Reply', replySchema);

var models = {
  User: User,
  Board: Board,
  Post: Post,
  Reply: Reply
};

module.exports = models;