$(function() {
    $("#quoteButton").click(displayQuote);
});

function justLogIt() {
    console.log('Hello');
    var starWarsCharacter = {
        name: 'Lando Calrissian',
        actor: 'Donald Glover'
    };
    console.log(starWarsCharacter);
}

function createTable(numberOfRows) {
    var movies = [
        { title: 'Star Wars', year: 1977 },
        { title: 'Kill Bill', year: 2003 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'The NeverEnding Story', year: 1984 },
        { title: 'The Prestige', year: 2006 },
    ]

    var totalMovies = movies.length;
    
    $("#movies tbody").html("");

    while(numberOfRows) {
        var movie = movies[numberOfRows % totalMovies];
        $("#movies tbody").append('<tr><td>' + movie.title + '</td><td>' + movie.year + '</td></tr>');
        numberOfRows--;
    }
}

function gotError() {
    var y = x * x;
}