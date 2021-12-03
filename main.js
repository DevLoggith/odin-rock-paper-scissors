const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
const computerSelection = computerPlay()
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = window.prompt( "Select either Rock, Paper, or Scissors" ).toLowerCase();

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return "You win! Scissors beats Paper";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return "You lose, paper beats Rock";
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return "You lose, Scissors beats Paper";
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return "You lose, Rock beats Scissors";
  } else { 
    return "It's a tie!";
  }
}

function game() {
  
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
}

console.log(game());
console.log(playerScore);
console.log(computerScore);
