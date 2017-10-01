const express = require('express');
const router = express.Router();
const rp = require('request-promise');


router.get('/track/get/lyrics/:artist/:title', function (req, res) {

    var options = {
        uri: 'https://lyrix.herokuapp.com/api/find/' + req.params.artist + '/' + req.params.title,
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (lyrics) {
            res.send(lyrics);
        })
        .catch(function (err) {
            res.send("Failed");
            
        });


});


module.exports = router;