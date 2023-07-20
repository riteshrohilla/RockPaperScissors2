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

    if (winningConditions[playerChoice])

}