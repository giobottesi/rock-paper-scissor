const gameOptions = ['rock', 'paper', 'scissor']

function getComputerChoice (options) {
  return options[Math.floor(Math.random() * options.length)]
}

const playerSelection = "rock";
const computerSelection = getComputerChoice(gameOptions);

function playRound(playerSelection, computerSelection) {
  lowercasedPlayerSelection = playerSelection.toLowerCase()

  if(playerSelection.toLowerCase() === computerSelection) {
    return "It's a tie!";
  } else if(playerSelection.toLowerCase() === "rock") {
    return computerSelection === "paper" ? "You Lose! Paper beats Rock" : "You Won! Rock beats Scissor";
  } else if(playerSelection.toLowerCase() === "paper") {
    return computerSelection === "scissor" ? "You Lose! Scissor beats Paper" : "You Won! Paper beats Rock";
  } else if(playerSelection.toLowerCase() === "scissor") {
    return computerSelection === "rock" ? "You Lose! Rock beats Scissor" : "You Won! Scissor beats Paper";
  }
}

console.log(playRound(playerSelection, computerSelection))
console.log("Player: " + playerSelection)
console.log("Computer: " + computerSelection)
