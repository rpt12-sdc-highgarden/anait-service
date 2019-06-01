const connection = require('./index.js')
const path = __dirname + '/file.csv';
// /Users/Anait/Desktop/RPT12/mj-service/db2/file.csv

connection.query('CREATE DATABASE IF NOT EXISTS reviews', function(err, data) {
  if (err) {
    console.log('Error', err)
  } else {
   // console.log(null, data)
  }
});


connection.query('USE reviews', function(err, data) {
  if(err) {
    console.log('Error', err)
  } else {
  //  console.log(null, data)
  }
});


connection.query('CREATE TABLE IF NOT EXISTS reviews (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, image_url BLOB, reviewer_name CHAR(30) NOT NULL, star_rate INT NOT NULL, review_date TEXT, review_description TEXT, likes_count INT NOT NULL )', function (err, data) {
  if(err) {
    console.log('Error', err)
  } else {
 //   console.log(null, data)
  }
});
var startTime = new Date();

connection.query('LOAD DATA LOCAL INFILE "' + path +'" INTO TABLE reviews FIELDS TERMINATED BY "," LINES TERMINATED BY "\n" IGNORE 1 ROWS (id, image_url, reviewer_name, star_rate, review_date, review_description, likes_count)', function (err, data) {
  if(err) {
    console.log('Error', err)
  } else {
    const elapsed = new Date() - startTime;
   var resultInMinutes = (elapsed / 60000).toFixed(2);
   console.log('total time: ', resultInMinutes);
 //   console.log(null, data)
  }
});

