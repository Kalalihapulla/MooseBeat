const express = require('express');
const router = express.Router();
const request = require('request');
const token = 'BQD_wc2mwRPhaC0fUCP5ESLD7qBcqQVS8Yga5wZPQMBd17BU-Nyl4gCOgU74cLYBFYlVJIZbwODM65abdBFCHbMh8jiF4ijTUtlElR1JCMHbfXTXH-8M1fkTt5G5jxQl1_3za3kXMRs-';

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