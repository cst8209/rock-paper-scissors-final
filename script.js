/*
Rock, Paper, Scissors
Use the shoot() function to play against the computer. Pass an number arguement for the desired move. 1=ROCK, 2=PAPER, 3=SCISSORS. Normal Rock, Paper, Scissors rules apply.
*/
console.log('What to play Rock, Paper, Scissors. Use the shoot() function. Moves: 1=ROCK, 2=PAPER, 3=SCISSORS.')

// HTML Elements
const $body = document.querySelector('body')
const $player = document.getElementById('player')
const $computer = document.getElementById('computer')
const $outcome = document.getElementById('outcome')

// Move Constants
const ROCK = 1
const PAPER = 2
const SCISSORS = 3
