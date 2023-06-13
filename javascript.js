"use strict"

let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let executed = false;

const showCurrentRound = document.querySelector(".currentRound");
const showGameResult = document.querySelector(".gameResult");

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

const btnReset = document.querySelector(".reset");
btnReset.addEventListener("click", () => {
    resetGame();
});

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result;

    if (playerChoice == 0 && computerChoice == 0) {
        showCurrentRound.innerHTML = "Draw! rock/rock";
        result = 2;
    } else if (playerChoice == 1 && computerChoice == 1) {
        showCurrentRound.innerHTML = "Draw! paper/paper";
        result = 2;
    } else if (playerChoice == 2 && computerChoice == 2) {
        showCurrentRound.innerHTML = "Draw! scissors/scissors";
        result = 2;
    } else if (playerChoice == 0 && computerChoice == 2) {
        showCurrentRound.innerHTML = "You win! rock/scissors";
        result = 1;
    } else if (playerChoice == 1 && computerChoice == 0) {
        showCurrentRound.innerHTML = "You win! paper/rock";
        result = 1;
    } else if (playerChoice == 2 && computerChoice == 1) {
        showCurrentRound.innerHTML = "You win! scissors/paper";
        result = 1;
    } else if (playerChoice == 2 && computerChoice == 0) {
        showCurrentRound.innerHTML = "You lose! scissors/rock";
        result = 0;
    } else if (playerChoice == 0 && computerChoice == 1) {
        showCurrentRound.innerHTML = "You lose! rock/paper";
        result = 0;
    } else if (playerChoice == 1 && computerChoice == 2) {
        showCurrentRound.innerHTML = "You lose! paper/scissors";
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
    showCurrentRound.innerHTML += ` || Rounds: ${rounds} || Score: ${playerScore} / ${computerScore}`;

    gameResult();
}

function gameResult() {
    if (playerScore >= 3) {
        executed = true;
        showGameResult.innerHTML = "You've won!!!"
        return;
    } else if (computerScore >= 3) {
        executed = true;
        showGameResult.innerHTML = "You've lost!!!";
        return;
    }
}

function resetGame() {
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    executed = false;
    showCurrentRound.innerHTML = "";
    showGameResult.innerHTML = "";
}