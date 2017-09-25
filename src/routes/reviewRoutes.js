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
    const username = req.body.username;
    const title = req.body.title;
    const artist_mbid = req.body.artist_mbid;
    const text = req.body.text;


    const reviewN = new Review({
        title: title,
        username: username,
        artist_mbid: artist_mbid,
        text: text,
        created_at: new Date()
    });

    reviewN.save(err => {
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