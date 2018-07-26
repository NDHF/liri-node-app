require("dotenv").config();

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified

function moviethis(title) {

    if (title === undefined) {
        title = "Mr. Nobody";
    }

    request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            //console.log(JSON.parse(body));
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDb Rating: " + JSON.parse(body).imdbRating);
            if (JSON.parse(body).Tomato === undefined) {
                console.log("No Tomatometer rating available");
            } else {
                console.log("Tomatometer Rating: " + JSON.parse(body).Tomato);
            }
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });
};

function radioOnTheInternet(song) {

    if (song === undefined) {
        song = "The Sign";
    }

    require("dotenv").config();
    const keys = require('./keys.js');
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: 'track',
        query: song,
        limit: 1,
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview: " + data.tracks.items[0].external_urls.spotify);
        }
    })
};

function hearMeOLiri(theFunction) {
    if (theFunction === "movie-this") {
        moviethis(process.argv[3]);
    } else if (theFunction === "spotify-this-song") {
        radioOnTheInternet(process.argv[3]);
    }
};

hearMeOLiri(process.argv[2]);