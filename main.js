const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = window.prompt( "Select either Rock, Paper, or Scissors").toLowerCase();
  computerSelection = computerPlay();

  console.log(playerSelection)
  console.log(computerSelection)
  
  switch (true) {
  
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
      playerScore++;
      console.log("You win! Rock beats Scissors");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    case (playerSelection === 'paper' && computerSelection === 'rock'):
      playerScore++;
      console.log("You win! Paper beats Rock");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      playerScore++;
      console.log("You win! Scissors beats Paper");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    case (playerSelection === 'rock' && computerSelection === 'paper'):
      computerScore++;
      console.log("You lose, paper beats Rock");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
      computerScore++;
      console.log("You lose, Scissors beats Paper");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    case (playerSelection === 'scissors' && computerSelection === 'rock'):
      computerScore++;
      console.log("You lose, Rock beats Scissors");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    case (playerSelection === computerSelection):
      tie++;
      console.log("It's a tie!");
      console.log(playerScore, "<-- Your Score");
      console.log(computerScore, "<-- Computer's Score");
      console.log(tie, "<-- Ties");
      break;
      
    default:
      console.log("Please enter a valid choice");
  }
}

function game() {
  
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (playerScore > computerScore) {
    return "Congrats, You won!";
  } else if (playerScore < computerScore) {
    return "Game over, better luck next time";
  } else {
    return "Tie game, try again!";
  }
}

console.log(game());
console.log(playerScore, "<-- Your Score");
console.log(computerScore, "<-- Computer's Score");
console.log(tie, "<-- Ties");
