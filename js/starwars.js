function displayQuote() {
    var starWarsQuotes = ['It\'s a trap!', 
        'Do. Or do not. There is no try.', 
        'I find your lack of faith disturbing.', 
        'I\'ve got a bad feeling about this.', 
        'Never tell me the odds.',
        'Stay on target.'];
    alert(starWarsQuotes[getRandomInt(0, starWarsQuotes.length - 1)]);				
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}