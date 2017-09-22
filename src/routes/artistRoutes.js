const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/artists/:query/', function (req, res) {
 
      request.get({ url: "http://api.musicgraph.com/api/v2/artist/suggest?api_key=121e2a1c43b279d6e8e80c1b3ed2e04d&prefix=" + req.params.query + "&limit=10"}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(req.params.query);
    
          res.send(body);
    
        }
      });
    
    
    });
    
    module.exports = router;
