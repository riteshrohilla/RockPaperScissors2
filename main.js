function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection === playerSelection.toLowerCase();

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'You win ' + playerSelection + ' beats ' + computerSelection;
    } else {
        return 'You lose ' + computerSelection + ' beats ' + playerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors): ');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));