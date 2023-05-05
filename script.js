const gameOptions = ['rock', 'paper', 'scissor']

function getComputerChoice (options) {
  return options[Math.floor(Math.random() * options.length)]
}

const playerSelection = "rock";

function playRound(playerSelection, computerSelection) {
  lowercasedPlayerSelection = playerSelection.toLowerCase()

  if(playerSelection.toLowerCase() === computerSelection) {
    return "tie";
  } else if(playerSelection.toLowerCase() === "rock") {
    return computerSelection === "paper" ? "computer" : "player";
  } else if(playerSelection.toLowerCase() === "paper") {
    return computerSelection === "scissor" ? "computer" : "player";
  } else if(playerSelection.toLowerCase() === "scissor") {
    return computerSelection === "rock" ? "computer" : "player";
  }
}

function game () {
  playerScore = 0
  computerScore = 0
  for (let i = 1; i <= 5; i++ ) {
    let playerSelection = prompt("Choose between rock, paper or scissor!!")
    let computerSelection = getComputerChoice(gameOptions);

    result = playRound(playerSelection.toLowerCase(), computerSelection)

    if (result === "player") {
      message = "You won! " + playerSelection.toLowerCase() + " beats " + computerSelection
      playerScore++
    } else if (result === "computer") {
      message = "You lose! " + computerSelection.toLowerCase() + " beats " + playerSelection.toLowerCase()
      computerScore++
    } else {
      message = "It's a tie!"
    }

    console.log(message)
    console.log("Player score: " + playerScore)
    console.log("Computer score: " + computerScore)
  }

  playerScore > computerScore ? console.log("Congrats! You won!") : console.log("Oh no! You lose.")
  return console.log("Final Score - Player: " + playerScore + "; Computer: " + computerScore)
}

console.log(game())
