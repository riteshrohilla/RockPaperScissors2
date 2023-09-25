function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    let winningConditions = {
        rock: 'Scissors',
        paper: 'Rock',
        scissors: 'Paper',
    }

    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!🤨"
    }

    if (winningConditions[playerChoice] === )
}