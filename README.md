# liri-node-app

An app for obtaining information via node in the command prompt. 

INSTRUCTIONS

1. In its current state, LIRI has access to three APIs: Open Movie Database (OMDb), Spotify, and News. Commands will log information on requested movies or songs, and will display current news headlines. 

2. COMMANDS
    a. To submit a command, type "node liri.js" into the command prompt.
    b. To access information about a movie, type "movie this", followed by the title of the movie.
    c. To access information about a song, type "spotify-this-song", followed by the title of the song.
        - NOTE: Put the title in quotes!
    d. To get current news headlines, type "my-news". The program will display headlines, attributions, links to articles, and the date/time the 
    article was published. 
    e. For information on the automation command, see Section 3.

3. AUTOMATION
    a. An automation function will take a series of commands from the random.txt file. Make use of the commands in Section 2.
        - FORMAT FOR COMMANDS: "command,'song/movie title in quotes'"

4. COMMAND LOGGING
    a. All commands are logged in the log.txt file.