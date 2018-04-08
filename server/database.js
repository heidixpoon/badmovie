const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "badmovies"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const getAllFavorites = function(callback) {
  let queryString = 'Select * from favorites;'
  console.log(connection.query(queryString));

  connection.query(queryString, function(err, results){
    console.log('database', JSON.stringify(results));
    callback(JSON.stringify(results));
  })
};


const saveFavorite = function(title, release_date, poster_path, vote_average, callback) {

  var queryStr = 'insert into favorites(title, release_date, poster_path, vote_average) value (?, ?, ?, ?)';
  connection.query(queryStr, [title, release_date, poster_path, vote_average], function(err, results) {
    callback();
  });

};


const deleteFavorite = function(callback) {
};


module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite,
  connection
};