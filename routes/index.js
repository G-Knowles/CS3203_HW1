const express = require('express');
const router = express.Router();

const json = require("../favs.json");

/* GET home page. */
router.get('/', function(req, res) {
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

// POST: post request to get the details of a given tweet ID
router.post('/getTweetID', function(req, res){

    // Find the given tweet, if found pass the json data, if not send "Not Found"
    let currTweet = json.filter(function (tweet) {
        if (tweet.id == req.body.tweetID) {
            return true;
        }
    });

    // Tweet Found!
    if(currTweet.length === 1){
        res.json(currTweet)
    } else { // Tweet not found
        res.json({message: "Not Found"});
    }

});

// POST: Post request to create a tweet given text and ID
router.post('/createNewTweet', function(req, res){

    // Push the new tweet to the json file and send it
    json.push ({
        id: req.body.newTweetID,
        text: req.body.newTweetText
    });
    res.json(json);

});
// PUT: Put request to update a screen name given current and new name
router.put('/updateScreenName', function(req, res){

    // Find the index of the screen_name to be updated
    let updateIndex = json.map(function(tweet){
        return tweet.user.screen_name;
    }).indexOf(req.body.oldScreenName); //Gets us the index of movie with given id.

    // If the screen_name is not found, return "Not found"
    if(updateIndex === -1){
        res.json({message: "Not found"});
    } else { // Index is found, update the user's screen_name
        json[updateIndex].user = {
            screen_name: req.body.newScreenName,
        };
        // Send the updated json file
        res.json(json);
    }
});

// DELETE: Delete request to delete a tweet given tweet ID
router.delete('/deleteTweetID', function(req, res){

    // Find the index of the tweet to be deleted
    let removeIndex = json.map(function(tweet){
        return tweet.id;
    }).indexOf(req.body.tweetID); //Gets us the index of movie with given id.

    // If the tweetID is not found, return "Not found"
    if(removeIndex === -1){
        res.json({message: "Not found"});
    } else { // If the tweet is found, remove it from the json data and return the new json
        json.splice(removeIndex, 1);
        res.json(json);
    }
});

module.exports = router;
