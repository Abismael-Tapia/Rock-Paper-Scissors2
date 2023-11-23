let playerWins = 0;
let computerWins = 0;
let tieGames = 0;

const getComputerChoice = () => {
    let elements = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    let randomElement = elements[random];

    return randomElement;
}


const getPlayerChoice = () => {
    let playerElement = prompt("Select a element between: Rock, Paper or Scissors");
    playerElement = playerElement.toLowerCase();

    return playerElement;
}



function playRound(computerElement, playerElement) {
    let details = `COMPUTER: ${computerElement} vs PLAYER: ${playerElement}`;

    if(computerElement === "rock" && playerElement === "scissor") {
        computerWins++;
        return  details + "\n You Lose! Rock beats Scissor";
    } else if(computerElement === "rock" && playerElement === "paper") {
        playerWins++;
        return  details + "\n You Win! Paper beats Rock";
    } else if(computerElement === "rock" && playerElement === "rock") {
        tieGames++;
        return  details + "\n TIE GAME";
    } else if(playerElement === "rock" && computerElement === "scissor") {
        playerWins++;
        return  details + "\n You Win! Rock beats Scissor";
    } else if(playerElement === "rock" && computerElement === "paper") {
        computerWins++;
        return  details + "\n You Lose! Paper beats Rock";
    } else if(playerElement === "scissor" && computerElement === "rock") {
        computerWins++;
        return  details + "\n You Lose! Rock beats Scissor";
    } else if(playerElement === "scissor" && computerElement === "paper") {
        playerWins++;
        return  details + "\n You Win! Scissor beats Paper";
    } else if(playerElement === "scissor" && computerElement === "scissor") {
        tieGames++;
        return  details + "\n TIE GAME";
    } else if(computerElement === "scissor" && playerElement === "rock") {
        playerWins++;
        return  details + "\n You Win! Rock beats Scissor";
    } else if(computerElement === "scissor" && playerElement === "paper") {
        computerWins++;
        return  details + "\n You Lose! Scissor beats Paper";
    } else if(playerElement === "paper" && computerElement === "rock") {
        playerWins++;
        return  details + "\n You Win! Paper beats Rock";
    } else if(playerElement === "paper" && computerElement === "scissor") {
        computerWins++;
        return  details + "\n You Lose! Scissor beats Paper";
    } else if(playerElement === "paper" && computerElement === "paper") {
        tieGames++;
        return  details + "\n TIE GAME";
    } else if(computerElement === "paper" && playerElement === "rock") {
        computerWins++;
        return  details + "\n You Lose! Paper beats Rock";
    } else if(computerElement === "paper" && playerElement === "scissor") {
        playerWins++;
        return  details + "\n You Win! Scissor beats Paper";
    } 
}

const game = () => {

    for(let i = 0; i < 5; i++){
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
    }

    return console.log(`La puntuación final es --> Jugador: ${playerWins} Computadora: ${computerWins} Empate: ${tieGames}`);
}

game();



