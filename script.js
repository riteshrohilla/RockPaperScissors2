function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    let winningConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissor: 'paper',
    }

    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie"
    }

    if (winningConditions[playerChoice] === computerSelection.toLowerCase()) {
        return `You win! ${playerChoice} beats ${computerSelection}`
    }

    return `oh no! You Lose! ${computerSelection} beats ${playerChoice}.`
}
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // for (let round = 0; round < 5; round++) {
    const playerSelection = prompt("Enter your choice (Rock, Paper, and Scissors):");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
}

// }

console.log(game());


document.createElement(#div);
document.createElement(#div);   