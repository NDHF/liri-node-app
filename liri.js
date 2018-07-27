var fileSystemModule = require("fs");

var request = require("request");

require("dotenv").config();

function moviethis(title) {

    if (title === undefined) {
        title = "Mr. Nobody";
    }

    request("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        if (!error && response.statusCode === 200) {

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

function doWhatItSays() {
    fileSystemModule.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        } else {
            var dataArr = data.split(",");
            hearMeOLiri(dataArr[0], dataArr[1]);
        }
}
    )};

function writeCommandToFile(command, separator, parameter) {
    var toBeWritten = command.concat(separator, parameter);
    fileSystemModule.appendFile("log.txt", toBeWritten, function(err) {
        if (err) {
        return console.log(err);
        }
        return console.log("write completed successfully");
    });
    
}

function hearMeOLiri(theFunction, theThing) {
    writeCommandToFile(theFunction, ",", theThing);
    if (theFunction === "movie-this") {
        moviethis(theThing);
    } else if (theFunction === "spotify-this-song") {
        radioOnTheInternet(theThing);
    } else if (theFunction === "do-what-it-says") {
        doWhatItSays();
    }
};

hearMeOLiri(process.argv[2], process.argv[3]);