#!/usr/bin/env node

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
// Create the express app,router and request.
const app = express();
const router = express.Router();
const request = require('request');
// Mongoose
const mongoose = require('mongoose');
// Passport 
const passport = require('passport');
mongoose.connect('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');


const { createBundleRenderer } = require('vue-server-renderer');

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-bundle.json'),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);



//REST API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get('/', function (req, res) {
  res.json({
    message: 'hooray! welcome to our api!',
    geebo: 'lul'
  });
});

app.post('/login',
passport.authenticate('local'),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});


router.get('/user', function (req, res) {
  const User = require('./src/models/user.js');
  let userN = new User({
    username: 'Forsen',
    password: 'hunter2',
    created_at: new Date()
  });
  userN.dudify();
  userN.save(function (err) {
    /*     userN.resetCount(function(err, nextCount) {
          
                 }); */
    if (err) throw err;

    console.log('User saved successfully!');
  
  });

  res.json({
    message: 'create',
    geebo: 'lul'
  });
});

router.get('/user/create/:name/:password', function (req, res) {

  const User = require('./src/models/user.js');
  let userN = new User({

    username: req.params.name,
    password: req.params.password,
    created_at: new Date()
  });



  userN.save(function (err) {
    /*     userN.resetCount(function(err, nextCount) {
                   }); */
    if (err) throw err;

    console.log('User saved successfully!');
    console.log(userN.getId());
  });

  res.json({
    message: 'create',
    geebo: 'lul'
  });
});

router.post('/user/create/', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  const User = require('./src/models/user.js');
  let userN = new User({

    username: req.params.username,
    password: req.params.password,
    created_at: new Date()
  });
  //mimic a slow network connection
  setTimeout(function(){

      res.send(JSON.stringify({
          username: req.body.username || null,
          password: req.body.password || null
      }));

  }, 1000)

  //debugging output for the terminal
  console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

router.get('/user/get/', function (req, res) {

  const User = require('./src/models/user.js');
  User.find(function (err, users) {
    if (err) return console.error(err);
    res.json({ users });
  });
});

router.get('/user/get/:_id', function (req, res) {
  const User = require('./src/models/user.js');

  User.find(function (err, users) {
    if (err) return console.error(err);

    User.find({ _id: req.params._id }, callback);

  });


});



router.get('/albums/:artist/:title', function (req, res) {

  request.get({ url: "http://api.onemusicapi.com/20151208/release?title=" + req.params.title + "&artist=" + req.params.artist + "&user_key=00c4333119af814c9d614cc8a71ece61&inc=images&maxResultCount=1" }, function (error, response, body) {
    if (!error && response.statusCode == 200) {



      let obj = JSON.parse(body);
      let firstObj = obj[0];
      console.log(firstObj.title);


      let Album = require('./src/models/album.js');
      let albumN = new Album({
        title: firstObj.title,
        artist: firstObj.artist,
        genre: firstObj.genre,
        media: firstObj.media,
        year: firstObj.year
      });
      res.json(JSON.parse(body));

      albumN.save(function (err) {
        /*     userN.resetCount(function(err, nextCount) {
              
                   
              
                     }); */
        if (err) throw err;

        console.log('Album saved successfully!');
      });
    }
  });


});

// routes will be prefixed with /static
app.use(express.static('./src/files'));
app.use('/static', express.static('./src/files'));

// routes will be prefixed with /api
app.use('/api', router);

app.use('/dist', express.static('dist'));

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({ url: req.path })
    .pipe(res);
});

// Bind the app to this port.
app.listen(process.env.PORT || 8080);