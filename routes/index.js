const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NytLite' });
});


/* GET articles from articles.txt as json */
router.get('/api/articles', (req, res, next) => {
	fs.readFile(path.join(__dirname, '../db/articles.txt'), 'utf8', (err, data) => {
		if ( err ) throw err;
		res.json(data);
	});
});

module.exports = router;
