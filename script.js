function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}