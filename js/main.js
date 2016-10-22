$(function() {
    $("#quoteButton").click(displayQuote);
    $("#countdownButton").click(startCountDown);
    $("#searchButton").click(getBook);
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

    while(numberOfRows--) {
        var movie = movies[numberOfRows % totalMovies];
        $("#movies tbody").append('<tr><td>' + movie.title + '</td><td>' + movie.year + '</td></tr>');
    }
}

function gotError() {
    var y = x * x;
}

var timer;

function startCountDown() {
    var numberOfSeconds = getNumberOfSeconds();
    
    if (timer) {
        clearInterval(timer);
    }
    
    timer = setInterval(function() {
        $("#countDownSeconds").text(numberOfSeconds--);
        
        if(numberOfSeconds < 0){
            clearInterval(timer);
        }
    }, 1000);
}

function getNumberOfSeconds () {
    return getRandomInt(10, 20);
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getBook() {
    var searchText = $('#searchText').val().replace(/ /g, '+')

    if (searchText) {
        $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + searchText + "&key=AIzaSyCKhFM6580-ujXYIz1PZGavqbmZheym-fk", function(data) {
            console.log(data);
        });
    }
}