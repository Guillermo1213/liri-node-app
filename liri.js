require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
// var concertLookup = 

var query = process.argv[3];

if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: query, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('I\'ve never heard that song before. Must be wack.. Anyways, Error:' + err);
        }
        // console.log(data.tracks.items[0].album.artists[0].name); //Artist XXX
        // console.log(data.tracks.items[0].album.name); //Album Name XXX
        // console.log(data.tracks.items[0].preview_url); //Preview URL XXX
        // console.log(data.tracks.items[0].name); //Song Title XXX
        return console.log("Ohhh, " + data.tracks.items[0].name + "? I like that song too! Did you know that " + data.tracks.items[0].album.artists[0].name + " has that song on their album " + data.tracks.items[0].album.name + "? Check out a preview of the song at this URL: " + data.tracks.items[0].preview_url);
    });
    // } else if (process.argv[2] === "spotify-this-song" && song == '') {
    //     song = "The Sign"
    //     spotify.search({ type: 'track', query: song, limit: 1 }, function (data) {
    //         console.log(data.tracks.items[0].album.artists[0].name); 
    //         console.log(data.tracks.items[0].album.name); 
    //         console.log(data.tracks.items[0].preview_url); 
    //         console.log(data.tracks.items[0].name);
    //     });
} else if (process.argv[2] === "concert-this") {
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log(response.data[0].datetime);
            //convert with Moment.js?
        })
        .catch(function (error) {
            console.log(error);
        });
}


// } else if(process.argv[2] === "movie"){
//     // take in process.argv[4] as a jointed string due to the possibility of multiple words
//     //lookup with OMDBAPI
// } else if(process.argv[2] === "do"){
//     //run whatever search parameters are inside random.txt
// } else{
//    console.log('I have no clue what you\'re doing, but this is not how I\'m used.. Try any of these commands..');
//    console.log('concert-this <artist/band name here>');
//    console.log('spotify-this-song <song name here>);
//    console.log('movie-this <movie name here>);
//    console.log('do-what-it-says');
// };