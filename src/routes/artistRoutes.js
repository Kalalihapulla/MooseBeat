const express = require('express');
const router = express.Router();
const request = require('request');
//Pictures 
const twitter = "/static/img/twitter.png"
const bbcmusic = "/static/img/bbcmusic.png"
const lyrics = "/static/img/lyrics.jpg"
const instagram = "/static/img/instagram.png"
const facebook = "/static/img/facebook.png"
const discogs = "/static/img/discogs.png"
const home = "/static/img/home.jpg"
const wikipedia = "/static/img/wikipedia.png"
const youtube = "/static/img/youtube.png"
const spotify = "/static/img/spotify.png"


router.get('/artists/:query/', function (req, res) {

  request.get({ url: "http://api.musicgraph.com/api/v2/artist/suggest?api_key=121e2a1c43b279d6e8e80c1b3ed2e04d&prefix=" + req.params.query + "&limit=10" }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(req.params.query);

      res.send(body);

    }
  });


});
router.get('/artists/bio/:mbid', function (req, res) {

  request.get({ url: "http://api.openaura.com/v1/info/artists/"+req.params.mbid+"?id_type=musicbrainz%3Agid&api_key=dabdfde06848e9adabe05b1862d4e0c4e84a3684" }, function (error, response, body) {
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
    if (error) throw error;

    console.log("Info retrieved");
    let result = JSON.parse(body);
    let info = [];
    let check = true;
    let check2 = true;
    let check3 = true;


    for (let value of result.relations) {
      let urlN = value.url.resource;
      let typeN = value.type;


      if (urlN.includes("twitter")) {
        info.push({ url: urlN, type: typeN, picture: twitter, name: 'Twitter' });

      }
      else if (urlN.includes("bbc.co.uk")) {
        info.push({ url: urlN, type: typeN, picture: bbcmusic, name: 'BBC Music' });

      }
      else if (urlN.includes("lyrics.wikia") && check2) {
        info.push({ url: urlN, type: typeN, picture: lyrics, name: 'Lyrics wikia' });
        check2 = false;

      }
      else if (urlN.includes("facebook")) {
        info.push({ url: urlN, type: typeN, picture: facebook, name: 'Facebook' });

      }
      else if (urlN.includes("instagram")) {
        info.push({ url: urlN, type: typeN, picture: instagram, name: 'Instagram' });

      }
      else if (typeN.includes("official homepage") && check) {
        info.push({ url: urlN, type: typeN, picture: home, name: 'Home page' });
        check = false;

      }
      else if (urlN.includes("discogs")) {
        info.push({ url: urlN, type: typeN, picture: discogs, name: 'Discogs' });

      }
      else if (urlN.includes("wikipedia")) {
        info.push({ url: urlN, type: typeN, picture: wikipedia, name: 'Wikipedia' });

      }
      else if (urlN.includes("youtube") && check3) {
        info.push({ url: urlN, type: typeN, picture: youtube, name: 'Youtube' });
        check3 = false;
      }
      else if (urlN.includes("spotify")) {
        info.push({ url: urlN, type: typeN, picture: spotify, name: 'Spotify' });

      }
    }


    res.json(info);

  });

});

module.exports = router;
