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
        return "It's a tie!🤨 You should play again..."
    }

    if (winningConditions[playerChoice] ===
        computerSelection.toLowerCase()) {
        return `You win!🎉 ${playerChoice} beats ${computerSelection}`
    }

    return `Oh no! You lose!😢 ${computerSelection} beats ${playerChoice}`
}



// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));