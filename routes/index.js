var express = require('express');
var router = express.Router();

const fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Load in the json file
fs.readFile('favs.json',
    function(err, data) {
      const jsonData = data;
      const parsed = JSON.parse(jsonData);
      console.log(parsed[0].id);
    })

// GET: Get request to get all tweets
router.get('/', function(req, res){
  res.json(parsed.text);
});

// GET: Get request to get all user IDs

// GET: Get request to get the details of a given tweet ID

// POST: Post request to create a tweet given text and ID

// PUT: Put request to update a screen name given current and new name

// DELETE: Delete request to delete a tweet given tweet ID
module.exports = router;
