var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
 // database: 'reviews'
})

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting database', err);
  } else {
    console.log('Database is connected');
  }
});

module.exports = connection;