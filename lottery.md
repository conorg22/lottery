Lottery Sim
Specification

Build a webpage which does the following:

The user starts with $10 in virtual money.
The user enters 4 distinct numbers between 1 and 10, inclusive. (see hint)
The user presses a button which costs them $2, and the computer generates four distinct random numbers between 1 and 10 inclusive which are shown to the user.
The user wins 2^n^2 (two to the n squared) dollars, where n is the number of numbers they guessed correctly. No winnings given if there are no matches. (0 = $0, 1 = $2, 2 = $16, 3 = $64, 4 = $4096)
Details

Players cannot go into debt. Make sure the player has the money to pay for the lottery ticket. Display an error message if the user has run out of money.
Players should be able to play the same numbers over and over, but can change them if they want.
There is no upper limit to the amount you can win.
Make sure the user has entered valid numbers before they are allowed to play. Display an error message if the user has entered an invalid number.
Display an error message if the user has entered two of the same number
Above and Beyond

Make the page beautiful
Allow the player to purchase more than one "ticket" before rolling the numbers.
Display an animation when the player rolls new numbers.
Use localstorage to keep track of the current high score.
Hint

There are many ways for the user to input some numbers, here are two examples:

Inputs

<input id="num1" />
...
var num1 = document.getElementById("num1").value;
Prompt

var numbers = prompt("Enter your numbers");