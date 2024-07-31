//=================================
// ROCK PAPER SCISSOR
//=================================

// Keep Track of Score
let humanScore = 0;
let computerScore = 0;

// Create a function to randomly generate rock paper or scissor
let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerSelection = "";

  if (randomNumber === 0) {
    computerSelection = "rock";
  } else if (randomNumber === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissor";
  }

  return computerSelection;
};

// Write a function to get users input of rock paper or scissor
let getHumanChoice = () => {
  let getUserInput = prompt("Choose your weapon! PAPER(P), ROCK(R), or SCISSOR(S)?");
  let humanSelection = "";

  if (getUserInput.toLowerCase() === "p" || getUserInput.toLowerCase() === "paper") {
    humanSelection = "paper";
  } else if (getUserInput.toLowerCase() === "r" || getUserInput.toLowerCase() === "rock") {
    humanSelection = "rock";
  } else if (getUserInput.toLowerCase() === "s" || getUserInput.toLowerCase() === "scissor") {
    humanSelection = "scissor";
  } else {
    alert("Please choose a valid move!");
    getHumanChoice();
  }

  return humanSelection;
};

// Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  // Compare humanChoice vs computerChoice to get result
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

  console.log("Your Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
}

//  End the game and display scores
function gameOver() {
  console.log("Game Over!");
  if (humanScore > computerScore) {
    alert(`Game Over. You Win!\n Score: ${humanScore}\n Opponent: ${computerScore}`);
  } else if (humanScore === computerScore) {
    alert(`It's a DRAW!\n Score: ${humanScore}\n Opponent: ${computerScore}`);
  } else {
    alert(`Game Over. You Lose!\n Score: ${humanScore}\n Opponent: ${computerScore}`);
  }
}

// Write a function to play a game of 5 rounds, give the player an option to quit
function playGame() {
  roundsPlayed = 0;

  while (roundsPlayed < 5) {
    playRound();
    roundsPlayed += 1;
  }
  gameOver();
}

// Initialise game
playGame();
