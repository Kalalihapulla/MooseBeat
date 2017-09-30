
const express = require('express');
const router = express.Router();
const request = require('request');
const Album = require('./../models/album');

router.get('/albums2/:mbid', function (req, res) {

  request.get({
    url: "https://musicbrainz.org/ws/2/release-group?artist=" + req.params.mbid + "&type=album|ep&fmt=json", headers: {
      'User-Agent': 'MooseBeat/1.0.0 ( https://moosebeat.herokuapp.com/ )'
    }
  }, function (error, response, body) {

    console.log("albums retrieved1");
    res.send(body);



  });
});
router.get('/albums2', function (req, res) {

  request.get({
    url: "http://api.musicgraph.com/api/v2/artist/4f9be051-9dea-0f98-3032-b90f88d0c537/albums?api_key=c8303e90962e3a5ebd5a1f260a69b138",
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {


      console.log("albums2 retrieved");
      res.send(JSON.parse(body));

    }

  });
});
router.get('/albums/:artist', function (req, res) {


  request.get({
    url: "http://api.musicgraph.com/api/v2/album/search?api_key=121e2a1c43b279d6e8e80c1b3ed2e04d&artist_name=" + req.params.artist,
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {


      console.log("albums retrieved2");
      res.send(body);

    }

  });
});

router.get('/albums/save/:artist/:title', function (req, res) {

  request.get({ url: "http://api.onemusicapi.com/20151208/release?title=" + req.params.title + "&artist=" + req.params.artist + "&user_key=00c4333119af814c9d614cc8a71ece61&inc=images&maxResultCount=1" }, function (error, response, body) {
    if (!error && response.statusCode == 200) {



      const obj = JSON.parse(body);
      const firstObj = obj[0];
      console.log(firstObj.title);



      const albumN = new Album({
        title: firstObj.title,
        artist: firstObj.artist,
        genre: firstObj.genre,
        media: firstObj.media,
        year: firstObj.year,
        created_at: new Date(),
        added: 1
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


router.get('/albums/cover/:mbid', function (req, res) {

  request.get({ url: "https://coverartarchive.org/release-group/" + req.params.mbid }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("cover retrieved");
      res.send(JSON.parse(body));


    }
  });
});

router.get('/albums/cover/:mbid', function (req, res) {

  request.get({ url: "https://coverartarchive.org/release-group/" + req.params.mbid }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("cover retrieved");
      res.send(JSON.parse(body));


    }
  });
});
router.get('/albums/get/all', function (req, res) {
console.log("ow");
  Album.find(function (err, albums) {
    albums.sort(function(a, b){
      return b.added - a.added;
  });

    res.send(albums);
  });

});








module.exports = router;