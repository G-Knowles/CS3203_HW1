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
    let currTweet = json.filter(function (tweet) {
        if (tweet.id == req.body.tweetID) {
            return true;
        }
    });
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
router.put('/updateScreenName', function(req, res){
    console.log(req.body);
    let updateIndex = json.map(function(tweet){
        return tweet.user.screen_name;
    }).indexOf(req.body.oldScreenName); //Gets us the index of movie with given id.

    console.log(updateIndex);
    if(updateIndex === -1){
        res.json({message: "Not found"});
    } else {
        json[updateIndex].user = {
            screen_name: req.body.newScreenName,
        };
        res.json(json);
    }



});

// DELETE: Delete request to delete a tweet given tweet ID
router.delete('/deleteTweetID', function(req, res){
    let removeIndex = json.map(function(tweet){
        return tweet.id;
    }).indexOf(req.body.tweetID); //Gets us the index of movie with given id.

    if(removeIndex === -1){
        res.json({message: "Not found"});
    } else {
        json.splice(removeIndex, 1);
        res.json(json);
    }

});

module.exports = router;
