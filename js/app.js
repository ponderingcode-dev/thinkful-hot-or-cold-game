
$(document).ready(function(){
    newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
    
    $(".new").click(function(){
        newGame();
    });
    
    $("#guessButton").click(function() {
        onUserGuess();
    });
    
    $(document).keypress(function(event) {
        if  (13 == event.which) {
            onUserGuess();
        }
    });
});

var solution;
var userGuess;
var guesses = [];
var guessCounter = 0;

function newGame() {
    solution = getRandomIntInclusive(1, 100);
    guesses = [];
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function registerGuess(intGuess)
{
    guesses.push(intGuess);
    analyzeGuess(intGuess);
}

function analyzeGuess(intGuess) {
    var diff = Math.abs((intGuess)-(solution));
    if (0 == diff) { $('#feedback').text("Correct!"); }
    if (50 <= diff) { $('#feedback').text("Ice cold!"); }
    if (30 <= diff && 50 > diff) { $('#feedback').text("Cold!"); }
    if (20 <= diff && 30 > diff) { $('#feedback').text("Warm!"); }
    if (10 <= diff && 20 > diff) { $('#feedback').text("Hot!"); }
    if (1 <= diff && 10 > diff) { $('#feedback').text("Very Hot"); }
}

function onUserGuess() {
    guessCounter++;
    $('#count').text(guessCounter);
        userGuess = parseInt($("#userGuess").val());
        $('#guessList').append('<li>'+userGuess+'</li>');
        registerGuess(userGuess);
}