//=================================
// ROCK PAPER SCISSOR
//=================================

// Keep track of scores globally
let humanScore = 0;
let computerScore = 0;

// Number of Points to win
let pointsToWin = 5;
let currentRound = 0;

// The gameboard - the base of all displayable views
const body = document.querySelector('body');

// Create Elements for Start View
const playButton = document.createElement('button');
const h1Start = document.createElement('h1');

// Create all elements for Gameplay Views
const buttonContainer = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorButton = document.createElement('button');
const resultDiv = document.createElement('div');
const result = document.createElement('p');
const actionButtons = [rockButton, paperButton, scissorButton];
const roundTitle = document.createElement('h1');

// Create all elements for Winner View
const winnerH1 = document.createElement('h1');
const playAgain = document.createElement('button');
const currentScore = document.createElement('h2');
const winnerDiv = document.createElement('div');

// Text content for elements
rockButton.textContent = 'rock';
paperButton.textContent = 'paper';
scissorButton.textContent = 'scissor';
playAgain.textContent = 'Play Again';
playButton.textContent = 'Start';
h1Start.textContent = 'Rock Paper Scissor';

// Classes for styling
h1Start.classList.add('title');
buttonContainer.classList.add('buttonContainer');
winnerDiv.classList.add('winnerDiv');

// Display Start Screen
body.appendChild(h1Start);
body.appendChild(playButton);

// Display Player Options to begin gameplay (clear scores and reset gameboard if new game)
const gameStart = () => {
	humanScore = 0;
	computerScore = 0;
	currentRound = 0;

	// Clear content
	body.textContent = '';
	buttonContainer.textContent = '';

	// Append buttons to button container
	body.appendChild(buttonContainer);
	actionButtons.forEach((button) => {
		buttonContainer.appendChild(button);
	});
};

// Generate randomized computer play
const getComputerChoice = () => {
	const choices = ['Rock', 'Paper', 'Scissor'];
	let randomNum = Math.floor(Math.random() * choices.length);
	let computerChoice = choices[randomNum];

	return computerChoice;
};

// Logic for one round of gameplay
const playRound = (humanSelection, computerSelection) => {
	// Append round title to show current round
	roundTitle.innerText = `Round ${currentRound}`;
	body.appendChild(roundTitle);
	currentRound++;

	body.appendChild(resultDiv);
	resultDiv.appendChild(result);

	if (humanSelection === 'Rock' && computerSelection === 'Paper') {
		result.textContent = 'Paper beats Rock! You lose!';
		computerScore += 1;
	} else if (humanSelection === 'Paper' && computerSelection === 'Scissor') {
		result.textContent = 'Scissor beats Paper! You lose!';
		computerScore += 1;
	} else if (humanSelection === 'Scissor' && computerSelection === 'Rock') {
		result.textContent = 'Rock beats Scissor! You lose!';
		computerScore += 1;
	} else if (humanSelection === computerSelection) {
		result.textContent = `${humanSelection} and ${computerSelection} - it's a stalemate. No Score.`;
	} else {
		result.textContent = `${humanSelection} beats ${computerSelection}! You Win!`;
		humanScore += 1;
	}

	showScore();
	findWinner();
};

const showScore = () => {
	currentScore.innerText = `Player : ${humanScore}\nComputer : ${computerScore}`;
	resultDiv.appendChild(currentScore);
};

const findWinner = () => {
	if (humanScore === pointsToWin && computerScore < pointsToWin) {
		winnerH1.innerText = 'You Win the Game!';
		winnerScreen();
	} else if (humanScore < pointsToWin && computerScore === pointsToWin) {
		winnerH1.innerText = 'You lost. Computer wins the Game.';
		winnerScreen();
	} else if (humanScore === computerScore && humanScore === pointsToWin) {
		winnerH1.innerText = 'Tie Game';
		winnerScreen();
	}
};

// Display Winner
const winnerScreen = () => {
	actionButtons.forEach((button) => {
		button.remove();
	});

	resultDiv.remove();
	roundTitle.remove();

	body.append(winnerDiv);

	winnerDiv.appendChild(winnerH1);
	winnerDiv.appendChild(currentScore);
	winnerDiv.appendChild(playAgain);
};

// Add event listeners for buttons
playButton.addEventListener('click', gameStart);

rockButton.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const humanSelection = 'Rock';
	playRound(humanSelection, computerSelection);
});
paperButton.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const humanSelection = 'Paper';
	playRound(humanSelection, computerSelection);
});
scissorButton.addEventListener('click', () => {
	const computerSelection = getComputerChoice();
	const humanSelection = 'Scissor';
	playRound(humanSelection, computerSelection);
});

playAgain.addEventListener('click', gameStart);
