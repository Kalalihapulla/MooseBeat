const express = require('express');
const router = express.Router();
const request = require('request');
const Review = require('./../models/review');


router.get('/reviews/get', function (req, res) {

    Review.find(function (err, reviews) {
        if (err) return console.error(err);
        res.json({ reviews });
    });
});

router.post('/reviews/create', function (req, res) {
    let username = req.body.username;
    console.log(username);
    let title = req.body.title;
    let artist_mbid = req.body.artist_mbid;
    let text = req.body.text;


    let reviewN = new Review({
        title: title,
        username: username,
        artist_mbid: artist_mbid,
        text: text,
        created_at: new Date()
    });

    reviewN.save(function (err) {
        /*     userN.resetCount(function(err, nextCount) {  
                     }); */
        if (err) throw err;

        console.log('Review saved successfully!');
    });

    res.send("Review created");
});
router.get('/reviews/get/:mbid', function (req, res) {
 
    Review.find({artist_mbid: req.params.mbid}, function(err, result){
        console.log("Reviews retrieved");
        res.send(result);



        });
   
});

module.exports = router;