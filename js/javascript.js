
const getComputerChoice = () => {
    let elements = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    let randomElement = elements[random];

    return randomElement;
}

let computerSelection = getComputerChoice();

const getPlayerChoice = () => {
    let playerElement = prompt("Select a element between: Rock, Paper or Scissors");
    playerElement = playerElement.toLowerCase();

    return playerElement;
}

let playerSelection = getPlayerChoice();

function playRound(computerSelection, playerSelection) {
    if(computerSelection === "rock" && playerSelection === "scissor") {
        return "You Lose! Rock beats Scissor";
    }
}

console.log(playRound());