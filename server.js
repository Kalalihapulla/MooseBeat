#!/usr/bin/env node

const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
// Create the express app, router and request.
const app = express();
const router = express.Router();
const request = require('request');
const session = require('express-session');
// Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
// Passport 
const passport = require('passport');
const cookieParser = require('cookie-parser');
//Routes
const userRoutes = require('./src/routes/userRoutes');
const albumRoutes = require('./src/routes/albumRoutes');
const artistRoutes = require('./src/routes/artistRoutes');
const reviewRoutes = require('./src/routes/reviewRoutes');
const passportRoutes = require('./src/routes/passportRoutes');
//Parser middleware
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.xml());

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('./dist/vue-ssr-bundle.json'),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);

//REST API



//Passport
/* app.use(session({ secret: 'owo' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions */


// files routes will be prefixed with /static
app.use(express.static('./src/files'));
app.use('/static', express.static('./src/files'));

// routes will be prefixed with /api
app.use("/api", userRoutes);
app.use("/api", albumRoutes);
app.use("/api", artistRoutes);
app.use("/api", reviewRoutes);
app.use("/log", passportRoutes);




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