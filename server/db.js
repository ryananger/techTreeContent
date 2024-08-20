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
  firstName: String,
  lastName:  String,

  createdOn: {type: Date, default: Date.now},

  email:     String,
  phone:     String,

  settings: Object,

  notifications: [Object],
  posts:    [Object],
  replies:  [Object],
  messages: [Object]
});

const boardSchema = new mongoose.Schema({
  name: String,
  posts: [Object],
  postCount: Number
});

const postSchema = new mongoose.Schema({
  author:  String,
  isReply: Boolean,
  text:    String,

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