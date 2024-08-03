//=================================
// ROCK PAPER SCISSOR
//=================================

//  List Possible Choices
const choices = ["rock", "paper", "scissor"];

// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Generate randomised computer play
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNum];

  return computerChoice;
};

// Get players choice of throw
const getHumanChoice = () => {
  let humanChoice = prompt("Choose your throw! Paper, Rock, Scissor?").toLowerCase();

  return humanChoice;
};

// Logic for one round of gameplay
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Paper beats Rock! You lose!");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    console.log("Scissor beats Paper! You lose!");
    computerScore += 1;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    console.log("Rock beats Scissor! You lose!");
    computerScore += 1;
  } else if (humanChoice === computerChoice) {
    console.log(`${humanChoice} and ${computerChoice} - it's a stalemate. No Score.`);
  } else {
    console.log(`${humanChoice} beats ${computerChoice}! You Win!`);
    humanScore += 1;
  }
};

// Play a full game of 5 rounds
const numberRounds = 5;
const playGame = () => {
  for (let i = 0; i < numberRounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`You Win the Game!\nScore: ${humanScore}\nComputer Score: ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lost. Computer Wins.\nScore: ${humanScore}\nComputer Score: ${computerScore}`);
  } else {
    console.log(`Tie Game.\n Score: ${humanScore}\nComputer Score: ${computerScore}`);
  }
};

// Initialize Game
playGame();
