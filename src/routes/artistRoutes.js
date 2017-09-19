const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/artists/:query/', function (req, res) {
    
      request.get({ url: "http://api.openaura.com/v1/search/artists?q=" + req.params.query + "&api_key=34f0b7dbb9887c1fdb52034d75577e1d07d2073c"}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
    
          //let obj = JSON.parse(body);
          console.log(req.params.query);
    
          res.send(body);
    
      
        }
      });
    
    
    });
    
    module.exports = router;