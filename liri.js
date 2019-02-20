require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var concertLookup = 

if(process.argv[2] === "concert"){
    // take in process.argv[4] as a jointed string due to the possibility of multiple words
    //lookup with bandsintownAPI
} else if(process.argv[2] === "spotify"){
    // take in process.argv[5] as a jointed string due to the possibility of multiple words
    //lookup with SpotifyAPI
} else if(process.argv[2] === "movie"){
    // take in process.argv[4] as a jointed string due to the possibility of multiple words
    //lookup with OMDBAPI
} else if(process.argv[2] === "do"){
    //run whatever search parameters are inside random.txt
} else{
    //i have no clue what you're doing, but this is not one my many uses.. Try any of these commands.. 
    //concert-this <artist/band name here>
    //spotify-this-song '<song name here>'
    //movie-this '<movie name here>'
    //do-what-it-says
};