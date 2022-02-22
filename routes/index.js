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
router.get('/getTweetID', function(req, res){
    let currTweet = json.filter(function (tweet) {
        if (tweet.id == req.params.id) {
            return true;
        }
    });
    console.log(currTweet);
    if(currTweet.length == 1){
        res.json(currTweet[0])
    } else {
        res.status(404);//Set status to 404 as movie was not found
        res.json({message: "Not Found"});
    }

});

// POST: Post request to create a tweet given text and ID

// PUT: Put request to update a screen name given current and new name

// DELETE: Delete request to delete a tweet given tweet ID
module.exports = router;
