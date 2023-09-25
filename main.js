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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));