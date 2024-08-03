//=================================
// ROCK PAPER SCISSOR
//=================================

//  List Possible Choices
const choices = ["rock", "paper", "scissor"];

// Create 3 new buttons to represent paper rock scissor
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");
rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorButton.textContent = "scissor";

// Append buttons to body of html
const buttons = [rockButton, paperButton, scissorButton];
const body = document.querySelector("body");
buttons.forEach((button) => {
  body.appendChild(button);
});

// Create display board
const resultDiv = document.createElement("div");
const result = document.createElement("p");
const currentScore = document.createElement("h2");

// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Generate randomized computer play
const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[randomNum];

  return computerChoice;
};

// Logic for one round of gameplay
const playRound = (humanSelection, computerSelection) => {
  body.appendChild(resultDiv);
  resultDiv.appendChild(result);

  if (humanSelection === "rock" && computerSelection === "paper") {
    result.textContent = "Paper beats Rock! You lose!";
    computerScore += 1;
  } else if (humanSelection === "paper" && computerSelection === "scissor") {
    result.textContent = "Scissor beats Paper! You lose!";
    computerScore += 1;
  } else if (humanSelection === "scissor" && computerSelection === "rock") {
    result.textContent = "Rock beats Scissor! You lose!";
    computerScore += 1;
  } else if (humanSelection === computerSelection) {
    result.textContent = `${humanSelection.toUpperCase()} and ${computerSelection.toUpperCase()} - it's a stalemate. No Score.`;
  } else {
    result.textContent = `${humanSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}! You Win!`;
    humanScore += 1;
  }
};

// Add event listeners for buttons
rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "rock";
  playRound(humanSelection, computerSelection);
});
paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "paper";
  playRound(humanSelection, computerSelection);
});
scissorButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "scissor";
  playRound(humanSelection, computerSelection);
});

const showScore = () => {
  currentScore.innerText = `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;
  resultDiv.appendChild(currentScore);
};
// // Play a full game of 5 rounds
// const numberRounds = 5;
// const playGame = () => {
//   for (let i = 0; i < numberRounds; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore > computerScore) {
//     console.log(`You Win the Game!\nScore: ${humanScore}\nComputer Score: ${computerScore}`);
//   } else if (humanScore < computerScore) {
//     console.log(`You lost. Computer Wins.\nScore: ${humanScore}\nComputer Score: ${computerScore}`);
//   } else {
//     console.log(`Tie Game.\n Score: ${humanScore}\nComputer Score: ${computerScore}`);
//   }
// };

// Initialize Game
// playGame();
