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

    // here removing the logic that plays exactly five rounds.
    /*
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors): ');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.startsWith('You win ')) {
            playerScore++;
        } else if (result.startsWith('You lose ')) {
            computerScore++;
        }
    }
*/
    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game.');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lose the game');
    } else {
        console.log("It's a tie game");
    }

}


console.log(document.querySelector('.message').textContent = 'A game buttons.');

// Rock button
// var button = document.createElement("button");
// button.textContent = "Rock"
// button.addEventListener("click", function () {
//     game();
// });
// document.body.appendChild(button)

// //Paper button
// var button = document.createElement("button");
// button.textContent = "Paper"
// button.addEventListener("click", function () {
//     game();
// });
// document.body.appendChild(button)

// //Scissor button
// var button = document.createElement("button");
// button.textContent = "Scissor"
// button.addEventListener("click", function () {
//     game();
// });



// document.body.appendChild(button)

// var button = document.createElement("button");
// button.textContent = "Rock"
// button.addEventListener("click", game);
// document.body.appendChild(button)

// const game = () => alert("it works");