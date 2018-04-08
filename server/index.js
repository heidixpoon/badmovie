var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
const axios = require('axios')
const config = require('./config.js')
const db = require('./database.js');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.get('/search', function(req, res) {

    console.log(req.query.data)
    let genreId = req.query.data;

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${config.api_key}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
    .then((response) => {
        // console.log('api', JSON.stringify(response.data))
        res.status(200).send(JSON.stringify(response.data))
    })


    //get the search genre     

    //https://www.themoviedb.org/account/signup

    // use this endpoint to search for movies by genres, you will need an API key

    //https://developers.themoviedb.org/3/discover/movie-discover

    //and sort them by horrible votes using the search parameters in the API
})

app.get('/genres', function(req, res) {
    //make an axios request to get the list of official genres

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.api_key}&language=en-US`)
    .then((response) => {
        res.status(200).send(JSON.stringify(response.data));
    }).catch((err) => {
        console.log(err)
    })

    // from this endpoint https://developers.themoviedb.org/3/genres/get-movie-list which needs your api key

    //send back
})

app.get('/myFavs', function(req, res){

    db.getAllFavorites((data)=>{
        res.status(200).send(data);
    })


})


app.post('/save', function(req, res) {

    console.log('in server', req.body)
    let movie = req.body.data;
    db.saveFavorite(movie.title, movie.release_date, movie.poster_path, movie.vote_average, () => {
        res.status(200).send();
    })

})

app.post('/delete', function(req, res) {

})



app.listen(3000, function() {
  console.log('listening on port 3000!');
});