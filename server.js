#!/usr/bin/env node

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');


const { createBundleRenderer } = require('vue-server-renderer');

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-bundle.json'),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);

// Create the express app and router.
const app = express();
const router = express.Router(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!',
              geebo: 'lul'  });   
});

// routes will be prefixed with /api
app.use('/api', router);
// Serve static assets from ./dist on the /dist route.

app.use('/dist', express.static('dist'));

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({url: req.path})
    .pipe(res);
});

// Bind the app to this port.
app.listen(process.env.PORT || 8080);