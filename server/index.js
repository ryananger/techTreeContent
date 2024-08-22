const express = require('express');
const router = express.Router();
//const https  = require('https');
const http   = require('http');
const cors   = require('cors');
const path   = require('path');
const app    = express();
const dotenv = require('dotenv');
dotenv.config();

const controller = require('./controller.js');

const dist = path.join(__dirname, '../client/dist');

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

router.get('/:url', function(req, res) {
  res.sendFile(dist + '/index.html');
});

// var options = {
//   key:  fs.readFileSync(process.env.HTTPS_KEY),
//   cert: fs.readFileSync(process.env.HTTPS_CERT)
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(dist));
app.use(router);

app.post('/api/users', controller.createUser);
app.get('/api/users/:uid', controller.getUser);
app.get('/api/users/checkUsername/:username', controller.checkUsername);
app.get('/api/boards/:name', controller.getBoard);
app.get('/api/boards/posts/:name', controller.getPosts);
app.post('/api/posts/', controller.createPost);
app.post('/api/replies/', controller.createReply);
app.get('/api/posts/:post', controller.getPost);
app.put('/api/posts/delete/:post', controller.deletePost);
app.put('/api/replies/delete/:reply', controller.deleteReply);
app.put('/api/posts/pin/:post_id', controller.pinPost);

const PORT = 4001;

http.createServer(app).listen(PORT);
//https.createServer(options, app).listen(443);
console.log(`Server listening at http://localhost:${PORT}`);
