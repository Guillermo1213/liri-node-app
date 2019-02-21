require("dotenv").config();

var keys = require("./keys.js");
const Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
const axios = require('axios');
var OMDBAPI_Key= '8d4af44c';
const FsNode = require('fs-node');

var query = process.argv[3];

if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: query, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('I\'ve never heard that song before. Must be wack.. Anyways, Error:' + err);
        }
        return console.log("Ohhh, " + data.tracks.items[0].name + "? I like that song too! Did you know that " + data.tracks.items[0].album.artists[0].name + " has that song on the album " + data.tracks.items[0].album.name + "? Check out a preview of the song at this URL: " + data.tracks.items[0].preview_url);
    });
} else if (process.argv[2] === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp")
        .then(function (response) {
            //convert with Moment.js?
            return console.log('So get this... ' + query +' is going to play on ' + response.data[0].datetime + ' at the ' + response.data[0].venue.name + ' in ' + response.data[0].venue.city + ", " + response.data[0].venue.country + "! Wanna go?  ;)")
        })
        .catch(function (error) {
            console.log(error);
        });
} else if (process.argv[2] === "movie-this"){
    axios.get('http://www.omdbapi.com/?apikey='+ OMDBAPI_Key + '&t=' + query +'')
    .then (function (response){
        console.log(response.data.Title + ', what a great movie..');
        console.log('It was rated at ' + response.data.imdbRating + ' by IMDB and a ' + response.data.Ratings[1].Value + ' by Rotten Tomatoes.');
        console.log('This awesome movie was originally filmed in the ' + response.data.Country + ' but is available in these languages: ' + response.data.Language + ".");
        console.log('Starring amazing actors, like ' + response.data.Actors + ". The movie's plot was introduced as: " + response.data.Plot + "");
    })
    .catch(function (error){
        console.log(error);
    });
} else if (process.argv[2] === "do-this"){

} else{
   console.log('I have no clue what you\'re doing, but this is not how I\'m used..');
   console.log('Try any of these commands..');
   console.log('concert-this <artist/band name here>');
   console.log('spotify-this-song <song name here>');
   console.log('movie-this <movie name here>');
   console.log('do-what-it-says');
}