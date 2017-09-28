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
    const username = req.user.username;
    const title = req.body.title;
    const artist_mbid = req.body.artistId;
    const text = req.body.text;
    const score = req.body.score;


    const reviewN = new Review({
        title: title,
        username: username,
        artist_mbid: artist_mbid,
        text: text,
        score: score,
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

    Review.find({ artist_mbid: req.params.mbid }, function (err, result) {
        console.log("Reviews retrieved");

      /*   let total = 0.0;
        let count = 0.0;

        for (let value of result) {

            total += value.score;
            count += 1;
        }

 */
      /*   result.push(

            { average: Math.round((total / count) * 10) / 10 }
        ); */

        res.send(result);



    });

});

module.exports = router;