const express = require('express');
const router = express.Router();
const request = require('request');
const token = 'BQCYxWC7zg3pRY04ARB10T26S-byxXHekxksXN6ZUB5T3HU-epTl0ySNfzxsBnE1LfSmLl0JpaTMWiFCGAkQHIDrtHq9__sTVbOaA7-wsu3nwmVWZszPHwDSSRbWOprwnmTgTPOZK-1T';

router.get('/spotify/get/toptracks/:artistId', function (req, res) {

    request.get('https://api.spotify.com/v1/artists/'+req.params.artistId+'/top-tracks?country=US', {
        'auth': {
            'bearer': token
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            res.send(body);

        }
    }

    );
});

router.get('/spotify/get/albums/:artistId', function (req, res) {
    
        request.get('https://api.spotify.com/v1/artists/'+ req.params.artistId +'/albums?album_type=album', {
            'auth': {
                'bearer': token
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
    
                res.send(body);
    
            }
        }
       
        );
    });
module.exports = router;