
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
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    } else if(computerSelection === "scissor" && playerSelection === "rock") {
        return "You Win! Rock beats Scissor";
    } else if(computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if(computerSelection === "scissor" && playerSelection === "paper") {
        return "You Lose! Scissor beats Paper";
    } else if(playerSelection === "rock" && computerSelection === "scissor") {
        return "You Win! Rock beats Scissor";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if(playerSelection === "scissor" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissor";
    } else if(playerSelection === "scissor" && computerSelection === "paper") {
        return "You Win! Scissor beats Paper";
    }
}

console.log(playRound(playerSelection, computerSelection));