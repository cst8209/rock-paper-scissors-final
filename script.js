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

/*
shoot
Plays a game of rock, paper, scissor with the computer. Takes a number represent one of the three hand signs.
*/
function shoot (player) {
  // Randomly generate a number between 1 and 3
  const computer = Math.floor(Math.random() * 3 + 1)

  // Display the moves as text
  $computer.textContent = getMove(computer)
  $player.textContent = getMove(player)

  return computeOutcome(player, computer)
}

/*
getMove
Takes the sign number and returns a sign string
*/
function getMove (num) {
  if (num === ROCK) {
    return 'ROCK'
  } else if (num === PAPER) {
    return 'PAPER'
  } else if (num === SCISSORS) {
    return 'SCISSORS'
  } else {
    return 'NOT VALID'
  }
}

/*
computeOutcome
Computes the outcome of the game by comparing the player's move to the computer's move. Follows standard rock, paper, scissors rules.
*/
function computeOutcome (player, computer) {
  switch (player) {
    case ROCK:
      switch (computer) {
        case ROCK:
          tie()
          return 'It\'s a Tie.'
        case PAPER:
          lose()
          return 'PAPER covers ROCK. You lose.'
        case SCISSORS:
          win()
          return 'ROCK smashes SCISSORS. You win.'
        default:
          return
      }
    case PAPER:
      switch (computer) {
        case ROCK:
          win()
          return 'PAPER covers ROCK. You win.'
        case PAPER:
          tie()
          return 'It\'s a Tie.'
        case SCISSORS:
          lose()
          return 'SCISSORS cuts PAPER. You lose.'
        default:
          return
      }
    case SCISSORS:
      switch (computer) {
        case ROCK:
          lose()
          return 'ROCK smashes SCISSORS. You lose.'
        case PAPER:
          win()
          return 'PAPER covers ROCK. You win.'
        case SCISSORS:
          tie()
          return 'It\'s a Tie.'
        default:
          return
      }
    default:
      notValid()
      return 'Not a valid move. Use 1=ROCK, 2=PAPER, 3=SCISSORS.'
  }
}

/*
lose
Updates the text and styles for when the player loses.
*/
function lose () {
  $outcome.textContent = 'You Lose!'
  $body.style.backgroundColor = 'red'
  $body.style.color = 'white'
}

/*
win
Updates the text styles for when the player wins.
*/
function win () {
  $outcome.textContent = 'You Win!'
  $body.style.backgroundColor = 'green'
  $body.style.color = 'white'
}

/*
tie
Updates the text and styles for when the player ties.
*/
function tie () {
  $outcome.textContent = 'It\'s a Tie!'
  $body.style.backgroundColor = 'white'
  $body.style.color = 'black'
}

/*
notValid
Updates the text and style for when the player move is not valid
*/
function notValid () {
  $outcome.textContent = ''
  $body.style.backgroundColor = 'white'
  $body.style.color = 'black'
}
