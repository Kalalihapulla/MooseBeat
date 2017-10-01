
const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const request = require('request');
const Album = require('./../models/album');



router.get('/user/get/', function (req, res) {

  res.send(req.user.username);

});


router.get('/user/get/:_id', function (req, res) {


  User.find(function (err, users) {
    if (err) return console.error(err);

    User.find({ _id: req.params._id }, callback);

  });
});

router.get('/user', function (req, res) {

  const userN = new User({
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

  const userN = new User({

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
    reviews: [{}],
    albums: [{}]
  });
  /*  userN.reviews.push(
     { id: "7", name: "Douglas Adams", type: "comedy" }
   ); */

  userN.generateHash(req.params.password);

  userN.save(function (err) {
    /*     userN.resetCount(function(err, nextCount) {
                   }); */
    if (err) {
      console.log("Failed");
      res.send("User already exists!");

    }
    else {
      console.log('User saved successfully!');
      console.log(userN.username);
      res.send("User created!");
    }
  });
});

router.get('/user/albums/add/:artist/:title/:mbid', function (req, res) {
  //http://api.onemusicapi.com/20151208/images/discogs/10038433/1491656932-6796.jpeg.jpg?user_key=00c4333119af814c9d614cc8a71ece61&inc=images&maxResultCount=1

  User.findOne({ 'username': req.user.username }, function (err, user) {

    user.albums.push(
      { artist: req.params.artist, title: req.params.title, cover: 'https://coverartarchive.org/release-group/' + req.params.mbid + '/front.jpg', mbid: req.params.mbid }
    );
    user.save(err => {

      if (err) throw err;

      console.log('Album saved to user successfully!');
    });

  });

  var lul = check(req.params.title).then(function (fulfilled) {

    if (fulfilled == null) {

      const albumN = new Album({
        title: req.params.title,
        artist: req.params.artist,
        created_at: new Date(),
        added: 1
      });
      albumN.save(err => {

        if (err) throw err;

        console.log('Album saved successfully!');
      });

    }
    else {
      fulfilled.addOne();
      fulfilled.save(err => {

        if (err) throw err;

        console.log('Album updated successfully!');
      });

    }

  })
    .catch(function (error) {

      console.log(error.message);

    });

  res.send("Added " + req.params.title);

});

var check = function (title) {
  return new Promise(
    function (resolve, reject) {
      Album.findOne({ 'title': title }, function (err, album) {

        if (album != null) {
          console.log("found");
          resolve(album);

        }
        else {
          console.log("not found");

          resolve(null);
        }
      });


    }
  );
}



router.get('/user/albums/get/:username', function (req, res) {
  //http://api.onemusicapi.com/20151208/images/discogs/10038433/1491656932-6796.jpeg.jpg?user_key=00c4333119af814c9d614cc8a71ece61&inc=images&maxResultCount=1

  User.findOne({ 'username': req.params.username }, function (err, user) {


    let result = user.albums;

    res.send(result.filter(x => !!x));


    /*  for (let value of result) {
       if (value != null) {
 
         request.get({ url: "http://api.onemusicapi.com/20151208/release?title=" + value.title + "&artist=" + value.artist + "&user_key=00c4333119af814c9d614cc8a71ece61&inc=images&maxResultCount=1" }, function (error, response, body) {
           if (!error && response.statusCode == 200) {
 
             let obj = JSON.parse(body);
             let firstObj = obj[0];
             jsonArtist.push(firstObj);
             res.send(jsonArtist);
           }
 
         });
 
       }
 
     } */



  });


});


module.exports = router;