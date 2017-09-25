
const express = require('express');
const router = express.Router();
const User = require('./../models/user');



router.get('/user/get/', function (req, res) {


  User.find(function (err, users) {
    if (err) return console.error(err);
    res.json({ users });
  });
});


router.get('/user/get/:_id', function (req, res) {


  User.find(function (err, users) {
    if (err) return console.error(err);

    User.find({ _id: req.params._id }, callback);

  });
});

router.get('/user', function (req, res) {

  let userN = new User({
    username: 'Forsen23',
    password: 'hunter2',
    created_at: new Date()
  });

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

router.post('/user/create/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let userN = new User({

    username: req.params.username,
    password: req.params.password,
    created_at: new Date()
  });
  //mimic a slow network connection
  setTimeout(function () {

    res.send(JSON.stringify({
      username: req.body.username || null,
      password: req.body.password || null
    }));

  }, 1000)

  //debugging output for the terminal
  console.log('you posted: First Name: ' + req.body.firstName + ', Last Name: ' + req.body.lastName);
});

router.get('/user/create/:name/:password', function (req, res) {

var userN = new User({

    username: req.params.name,
    password: "",
    created_at: new Date(),
    reviews: [{}]
  });
  userN.reviews.push(
    {id: "7", name: "Douglas Adams", type: "comedy"}
);

  userN.generateHash(req.params.password);


  userN.save(function (err) {
    /*     userN.resetCount(function(err, nextCount) {
                   }); */
    if (err) throw err;

    console.log('User saved successfully!');
    console.log(userN.username);
 
  });

  res.redirect('/');
});


module.exports = router;