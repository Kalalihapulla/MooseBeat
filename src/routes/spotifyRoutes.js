const express = require('express');
const router = express.Router();
const request = require('request');
const token = 'BQBfG0pu-S1fhcwAFpXl7isALLI3e0iBTtjsASWmTJSRZbWwGuKIcQ6p-pFJsAIITn8xuNUUjzr1r-8Hq7oqBZe2u3AmUQnZyDMdi_KgiwgS5Q0ldKNgS9hvurb3crbYCL6jcfhJqbyz';
const rp = require('request-promise');
const axios = require('axios');


router.get('/spotify/get/token/', function (req, res) {

    const options = {
        method: 'POST',
        uri: 'https://accounts.spotify.com/api/token',
        body: {
            grant_type: "client_credentials"
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic NmY3OGJmZDFkNzVkNGJiN2E0YWRkYWM5MzliNWQ5Yjk6YTM4ZmU5NGY2ZGZmNDBmYjgyN2E3ZjM3ZTFiNTA1MTk='
        }


        // JSON stringifies the body automatically
    }
    rp(options)
        .then(function (response) {
            console.log("w");
            res.send(response)
            // Handle the response
        })
        .catch(function (err) {
            console.log(err);
            // Deal with the error
        })










    /*  request.post('https://accounts.spotify.com/api/token', {
         body: {
             grant_type: 'client_credentials'
         },
         headers: {
             'content-type': 'application/x-www-form-urlencoded',
             'Authorization': 'Basic NmY3OGJmZDFkNzVkNGJiN2E0YWRkYWM5MzliNWQ5Yjk6YTM4ZmU5NGY2ZGZmNDBmYjgyN2E3ZjM3ZTFiNTA1MTk='
         }
 
 
     }, function (error, response, body) {
         if (!error && response.statusCode == 200) {
 
             res.send(body);
 
         }
     }
 
     ); */
});
//2ye2Wgw4gimLv2eAKyk1NB
router.get('/spotify/get/toptracks/:artistId', function (req, res) {

    request.get('https://api.spotify.com/v1/artists/' + req.params.artistId + '/top-tracks?country=US', {
        'auth': {
            'bearer': token
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            res.send(body);
// 
        }
    }

    );
});

router.get('/spotify/get/albums/:artistId', function (req, res) {

    request.get('https://api.spotify.com/v1/artists/' + req.params.artistId + '/albums?album_type=album', {
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
router.get('/spotify/get/related/:artistId', function (req, res) {
    
        request.get('https://api.spotify.com/v1/artists/' + req.params.artistId + '/related-artists', {
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
router.get('/spotify/get/token2/', function (req, res) {
lul();
res.send("w");

});

function lul() {
    axios.post('https://accounts.spotify.com/api/token', {
        grant_type: 'client_credentials',
        headers: {
            'Authorization': 'Basic NmY3OGJmZDFkNzVkNGJiN2E0YWRkYWM5MzliNWQ5Yjk6YTM4ZmU5NGY2ZGZmNDBmYjgyN2E3ZjM3ZTFiNTA1MTk='
        },


    })
        .then(function (response) {
            console.log(response);
            
        })
        .catch(function (error) {
            console.log(error);
        });


}

module.exports = router;