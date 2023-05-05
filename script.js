const gameOptions = ['rock', 'paper', 'scissor']

function getComputerChoice (options) {
  return options[Math.floor(Math.random() * options.length)]
}

console.log(getComputerChoice(gameOptions))