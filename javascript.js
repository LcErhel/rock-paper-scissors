"use strict"

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let executed = false;

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

btnRock.addEventListener("click", () => {
    if(executed == false) {
        playRound(0);
    }
});
btnPaper.addEventListener("click", () => {
    if(executed == false) {
        playRound(1);
    }
});
btnScissors.addEventListener("click", () => {
    if(executed == false) {
        playRound(2);
    }
});

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice == 0 && computerChoice == 0) {
        console.log("Draw! rock/rock");
        result = 2;
    } else if (playerChoice == 1 && computerChoice == 1) {
        console.log("Draw! paper/paper");
        result = 2;
    } else if (playerChoice == 2 && computerChoice == 2) {
        console.log("Draw! scissors/scissors");
        result = 2;
    } else if (playerChoice == 0 && computerChoice == 2) {
        console.log("You win! rock/scissors");
        result = 1;
    } else if (playerChoice == 1 && computerChoice == 0) {
        console.log("You win! paper/rock");
        result = 1;
    } else if (playerChoice == 2 && computerChoice == 1) {
        console.log("You win! scissors/paper");
        result = 1;
    } else if (playerChoice == 2 && computerChoice == 0) {
        console.log("You lose! scissors/rock");
        result = 0;
    } else if (playerChoice == 0 && computerChoice == 1) {
        console.log("You lose! rock/paper");
        result = 0;
    } else if (playerChoice == 1 && computerChoice == 2) {
        console.log("You lose! paper/scissors");
        result = 0;
    } else {
        console.error("broken playRound()");
    }
    roundResult(result);
}

function roundResult(result) {
    if (result == 0) {
        computerScore++;
        rounds++;
    } else if (result == 1) {
        playerScore++;
        rounds++;
    } else {
        rounds++;
    }

    console.log(`Rounds: ${rounds}`);
    console.log(`Score: ${playerScore} / ${computerScore}`);

    gameResult();
}

function gameResult() {
    if (playerScore >= 3) {
        console.log("You've won!!!");
        executed = true;
        return;
    } else if (computerScore >= 3) {
        console.log("You've lost!!!");
        executed = true;
        return;
    }
}