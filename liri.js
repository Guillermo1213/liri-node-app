require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var concertLookup = 

var song= process.argv[5];

if(process.argv[2] === "spotify"){
spotify.search({type: 'track', query: song, limit: 1}, function(err, data){
    if (err){
        return console.log('I\'ve never heard that song before. Must be wack.. Anyways, Error:' + err);
    }
    // console.log(data.tracks.items[0].album.artists[0].name); //Artist XXX
    // console.log(data.tracks.items[0].album.name); //Album Name XXX
    // console.log(data.tracks.items[0].preview_url); //Preview URL XXX
    // console.log(data.tracks.items[0].name); //Song Title XXX

    return console.log("Ohhh, " + data.tracks.items[0].name + "? I like that song too! Did you know that " + data.tracks.items[0].album.artists[0].name + " has that song on their album " + data.tracks.items[0].album.name + "? Check out a preview of the song at this URL: " + data.tracks.items[0].preview_url);



});
};



// if(process.argv[2] === "concert"){
//     // take in process.argv[4] as a jointed string due to the possibility of multiple words
//     //lookup with bandsintownAPI
// } else if(process.argv[2] === "spotify"){
//     // take in process.argv[5] as a jointed string due to the possibility of multiple words
//     //lookup with SpotifyAPI
// } else if(process.argv[2] === "movie"){
//     // take in process.argv[4] as a jointed string due to the possibility of multiple words
//     //lookup with OMDBAPI
// } else if(process.argv[2] === "do"){
//     //run whatever search parameters are inside random.txt
// } else{
//     //i have no clue what you're doing, but this is not one my many uses.. Try any of these commands.. 
//     //concert-this <artist/band name here>
//     //spotify-this-song '<song name here>'
//     //movie-this '<movie name here>'
//     //do-what-it-says
// };