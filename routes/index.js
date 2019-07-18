const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/nytlitedb';

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NytLite' });
});


/* GET articles entries from db */
router.get('/api/articles', (req, res, next) => {

	let pool = new Pool({ connectionString: connectionString }),
      querySQL;

  pool.connect((err, client, done) => {
    if (err) {
      done();
      console.log(err);
      res.status(500).json({success: false, data:err});
    }

	querySQL = `SELECT * FROM articles ORDER BY id ASC;`;

    client.query(querySQL)
      .then((response) => {
        res.json(response.rows);
      }).catch((e) => {
				console.log(e);
			}).finally(() => {
				done();
			});

		pool.end();
    return;

  });

});

module.exports = router;
