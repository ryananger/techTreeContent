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
  messages: [Object]
});

const boardSchema = new mongoose.Schema({
  name: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  latest: Object,
  postCount: { type: Number, default: 0 }
});

// Post Schema
const postSchema = new mongoose.Schema({
  author: String,
  board: {type: mongoose.Schema.Types.ObjectId, ref: 'Board'},
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
  text: String,
  latest: Object,
  createdOn: {type: Date, default: Date.now}
});

const User = new mongoose.model('User', userSchema);
const Board = new mongoose.model('Board', boardSchema);
const Post = new mongoose.model('Post', postSchema);

var models = {
  User: User,
  Board: Board,
  Post: Post
};

module.exports = models;