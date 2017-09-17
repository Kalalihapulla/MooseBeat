#!/usr/bin/env node

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
// Create the express app and router.
const app = express();
const router = express.Router();
// Mongoose
const mongoose = require('mongoose');
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
    message: 'hooray! welcsome to our api!',
    geebo: 'lul'
  });
});

router.get('/user', function (req, res) {
  var User = require('./src/models/user.js');
  var userN = new User({
    name: 'Test',
    username: 'Forsens',
    password: 'hunter2',
    created_at : new Date()
  });
  userN.dudify();
  userN.save(function(err) {
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

router.get('/user/:name', function (req, res) {

  res.json({
    message: req.params.name,
    geebo: 'lul'
  });
});

// routes will be prefixed with /static
app.use(express.static('files'));
app.use('/static', express.static('files'));

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