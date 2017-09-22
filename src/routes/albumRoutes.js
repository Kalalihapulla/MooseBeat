
const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/albums', function (req, res) {

  request.get({
    url: "https://musicbrainz.org/ws/2/release-group?artist=3f77449d-48e4-4ceb-b869-69af48da877b&type=album|ep&fmt=json", headers: {
      'User-Agent': 'MooseBeat/1.0.0 ( https://moosebeat.herokuapp.com/ )'
    }
  }, function (error, response, body) {

    console.log("albums retrieved");
    res.send(JSON.parse(body));



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
  
    
        console.log("albums retrieved");
        res.send(body);
    
        }
    
      });
    });

router.get('/albums/:artist/:title', function (req, res) {

  request.get({ url: "http://api.onemusicapi.com/20151208/release?title=" + req.params.title + "&artist=" + req.params.artist + "&user_key=00c4333119af814c9d614cc8a71ece61&inc=images&maxResultCount=1" }, function (error, response, body) {
    if (!error && response.statusCode == 200) {



      let obj = JSON.parse(body);
      let firstObj = obj[0];
      console.log(firstObj.title);


      let Album = require('./../models/album');
      let albumN = new Album({
        title: firstObj.title,
        artist: firstObj.artist,
        genre: firstObj.genre,
        media: firstObj.media,
        year: firstObj.year,
        created_at: new Date()
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



router.get('/albums/cover', function (req, res) {

  request.get({ url: "https://coverartarchive.org/release-group/3d00fb45-f8ab-3436-a8e1-b4bfc4d66913/" }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("cover retrieved");
      res.send(JSON.parse(body));


    }
  });
});



module.exports = router;