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
    let user_name = req.body.user_name;
    let title = req.body.title;
    let album_id = req.body.album_id;
    let text = req.body.text;


    let reviewN = new Review({
        title: title,
        user_name: user_name,
        album_id: album_id,
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

module.exports = router;