const gameOptions = ['rock', 'paper', 'scissor']

let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorButton = document.querySelector(".scissor")
let resultsPanel = document.querySelector("#results-panel")

let roundResult = document.createElement('round-result')
let roundMessage = document.createElement('round-message')
let playerScore = document.createElement('player-score')
let computerScore = document.createElement('computer-score')

let finalResult = document.createElement('final-result')
let finalMessage = document.createElement('final-message')

var playerScoreCounter = 0
var computerScoreCounter = 0

roundResult.classList.add('container')
playerScore.classList.add('col-sm')
computerScore.classList.add('col-sm')

function getComputerChoice (options) {
  return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "tie";
  } else if(playerSelection === "rock") {
    return computerSelection === "paper" ? "computer" : "player";
  } else if(playerSelection === "paper") {
    return computerSelection === "scissor" ? "computer" : "player";
  } else if(playerSelection === "scissor") {
    return computerSelection === "rock" ? "computer" : "player";
  }
}

function scoreCounter (result, playerSelection, computerSelection) {
  if (result === "player") {
    roundResult.textContent = "You won! " + playerSelection + " beats " + computerSelection
    playerScoreCounter = playerScoreCounter + 1
  } else if (result === "computer") {
    roundResult.textContent = "You lose! " + computerSelection + " beats " + playerSelection
    computerScoreCounter = computerScoreCounter + 1
  } else {
    roundResult.textContent = "It's a tie!"
  }
}

function resetScores () {
  playerScoreCounter = 0
  computerScoreCounter = 0
}

function removeFinalResult () {
  finalResult.textContent = ""
}

function gameOver () {
  if (playerScoreCounter > computerScoreCounter) {
    finalResult.textContent = "You won!!!"
  } else {
    finalResult.textContent = "You lose ):"
  }

  finalResult.appendChild(finalMessage);
  resultsPanel.appendChild(finalResult)

  resetScores()
}

function game (playerSelection) {
  if (playerScoreCounter === 0 && computerScoreCounter === 0) removeFinalResult()

  let computerSelection = getComputerChoice(gameOptions);

  result = playRound(playerSelection, computerSelection)

  scoreCounter(result, playerSelection, computerSelection)

  playerScore.textContent = "Player Score: " + playerScoreCounter
  computerScore.textContent = "Computer Score: " + computerScoreCounter

  roundResult.appendChild(roundMessage);
  roundResult.appendChild(playerScore);
  roundResult.appendChild(computerScore);
  resultsPanel.appendChild(roundResult)

  if (playerScoreCounter === 5 || computerScoreCounter === 5) gameOver()
}


rockButton.addEventListener('click', () => game('rock'))
paperButton.addEventListener('click', () => game('paper'))
scissorButton.addEventListener('click', () => game('scissor'))
