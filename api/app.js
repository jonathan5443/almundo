const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

// DB config
const file = "db/almundo.db";
const db = new sqlite3.Database(file);

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Get hotels
app.get('/hotels', function (req, res) {
  db.all("SELECT h.*, GROUP_CONCAT(a.amenities) AS amenities" +
    " FROM hotels h , amenities a WHERE h.id = a.id" +
    " AND h.name LIKE '%" + req.query.term + "%'" +
    " AND h.stars IN (" + req.query.stars + ")" +
    " GROUP BY a.id "
    , function (err, rows) {
      return res.json(rows);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

