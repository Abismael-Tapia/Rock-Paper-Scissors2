
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
    let details = `COMPUTER: ${computerSelection} - PLAYER: ${playerSelection}`;

    if(computerSelection === "rock" && playerSelection === "scissor") {
        return  details + "\n You Lose! Rock beats Scissor";
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        return  details + "\n You Win! Paper beats Rock";
    } else if(computerSelection === "rock" && playerSelection === "rock") {
        return  details + "\n TIE GAME";
    } else if(playerSelection === "rock" && computerSelection === "scissor") {
        return  details + "\n You Win! Rock beats Scissor";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return  details + "\n You Lose! Paper beats Rock";
    } else if(playerSelection === "scissor" && computerSelection === "rock") {
        return  details + "\n You Lose! Rock beats Scissor";
    } else if(playerSelection === "scissor" && computerSelection === "paper") {
        return  details + "\n You Win! Scissor beats Paper";
    } else if(playerSelection === "scissor" && computerSelection === "scissor") {
        return  details + "\n TIE GAME";
    } else 	if(computerSelection === "scissor" && playerSelection === "rock") {
        return  details + "\n You Win! Rock beats Scissor";
    } else if(computerSelection === "scissor" && playerSelection === "paper") {
        return  details + "\n You Lose! Scissor beats Paper";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return  details + "\n You Win! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "scissor") {
        return  details + "\n You Lose! Scissor beats Paper";
    } else if(playerSelection === "paper" && computerSelection === "paper") {
        return  details + "\n TIE GAME";
    } else 	if(computerSelection === "paper" && playerSelection === "rock") {
        return  details + "\n You Lose! Paper beats Rock";
    } else if(computerSelection === "paper" && playerSelection === "scissor") {
        return  details + "\n You Win! Scissor beats Paper";
    } 
}
console.log(playRound(computerSelection, playerSelection));