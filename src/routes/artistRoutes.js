const express = require('express');
const router = express.Router();
const request = require('request');
//Pictures 
const twitter = "/static/img/twitter.png"
const bbcmusic = "/static/img/bbcmusic.png"
const lyrics = "/static/img/lyrics.jpg"

router.get('/artists/:query/', function (req, res) {

  request.get({ url: "http://api.musicgraph.com/api/v2/artist/suggest?api_key=121e2a1c43b279d6e8e80c1b3ed2e04d&prefix=" + req.params.query + "&limit=10" }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(req.params.query);

      res.send(body);

    }
  });


});
router.get('/artists/info/:mbid/', function (req, res) {

  request.get({
    url: "http://musicbrainz.org/ws/2/artist/" + req.params.mbid + "?inc=url-rels&fmt=json", headers: {
      'User-Agent': 'MooseBeat/1.0.0 ( https://moosebeat.herokuapp.com/ )'
    }
  }, function (error, response, body) {

    console.log("Info retrieved");
    let result = JSON.parse(body);
    let info = [];


    for (let value of result.relations) {
      let urlN = value.url.resource;
      let typeN = value.type;

      if (urlN.includes("twitter")) {
        info.push({ url: urlN, type: typeN, picture: twitter, name: 'Twitter' });

      }
      else if (urlN.includes("bbc.co.uk")) {
        info.push({ url: urlN, type: typeN, picture: bbcmusic, name: 'BBC Music' });

      }
      else if (urlN.includes("lyrics.wikia")) {
        info.push({ url: urlN, type: typeN, picture: lyrics, name: 'Lyrics wikia' });

      }
    }


    res.json(info);

    /*     result.push(
          {}
        ); */


  });

});

module.exports = router;
