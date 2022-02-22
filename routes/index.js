var express = require('express');
var router = express.Router();

const fs = require("fs");
var json = require("../favs.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET: Get request to get all tweets
router.get('/getTweets', function(req, res){
    res.send(JSON.stringify(json));
});

// GET: Get request to get all user IDs
router.get('/getUsers', function(req, res){
    res.send(JSON.stringify(json));
});

// GET: Get request to get the details of a given tweet ID

// POST: Post request to create a tweet given text and ID

// PUT: Put request to update a screen name given current and new name

// DELETE: Delete request to delete a tweet given tweet ID
module.exports = router;
