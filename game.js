/* Guess a number Game
written 2/5/2018 by Rich Lewis */

function playGame() {
  
var guessNum;
var guessRight = "You guessed it right!";
var guessLow = "You guessed too low!  Try again.";
var guessHigh = "You guessed too high!  Try again.";
var num = Math.floor(Math.random() * 100);

//Main loop;
while guessNum != num {
guessNum = prompt("Please guess a number between 1 and 100");
  if guessNum > num {
    alert(guessHigh);
  }
  else if guessNum < num {
    alert(guessLow);
  }
}
alert(guessRight);
}
