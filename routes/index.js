const express = require('express');
const router = express.Router();

const fs = require("fs");
const json = require("../favs.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET: Get request to get all tweets
router.get('/getTweets', function(req, res){
    //res.send(JSON.stringify(json));
    res.json(json);
});

// GET: Get request to get all user IDs
router.get('/getUsers', function(req, res){
    res.json(json);
});

// GET: Get request to get the details of a given tweet ID
router.post('/getTweetID', function(req, res){
    console.log(req.body);
    let currTweet = json.filter(function (tweet) {
        if (tweet.id == req.body.tweetID) {
            return true;
        }
    });
    console.log(currTweet);
    if(currTweet.length == 1){
        res.json(currTweet)
    } else {
        res.json({message: "Not Found"});
    }

});

// POST: Post request to create a tweet given text and ID
router.post('/createNewTweet', function(req, res){
    json.push ({
        id: req.body.newTweetID,
        text: req.body.newTweetText
    });
    res.json(json);

});
// PUT: Put request to update a screen name given current and new name

// DELETE: Delete request to delete a tweet given tweet ID
module.exports = router;
