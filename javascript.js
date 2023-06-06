"use strict"

function getPlayerChoice() {
    let choice = prompt("Rock/Paper/Scissor? || 0/1/2");
    if (choice.toLowerCase() == "rock" || choice == 0) {
        return 0;
    } else if (choice.toLowerCase() == "paper" || choice == 1) {
        return 1;
    } else if (choice.toLowerCase() == "scissors" || choice == 2) {
        return 2;
    } else {
        return console.error("Invalid input");
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice == 0 && computerChoice == 0) {
        console.log("Draw! rock/rock");
        return 2;
    } else if (playerChoice == 1 && computerChoice == 1) {
        console.log("Draw! paper/paper");
        return 2;
    } else if (playerChoice == 2 && computerChoice == 2) {
        console.log("Draw! scissors/scissors")
        return 2;
    } else if (playerChoice == 0 && computerChoice == 2) {
        console.log("You win! rock/scissors");
        return 1;
    } else if (playerChoice == 1 && computerChoice == 0) {
        console.log("You win! paper/rock");
        return 1;
    } else if (playerChoice == 2 && computerChoice == 1) {
        console.log("You win! scissors/paper");
        return 1;
    } else if (playerChoice == 2 && computerChoice == 0) {
        console.log("You lose! scissors/rock");
        return 0;
    } else if (playerChoice == 0 && computerChoice == 1) {
        console.log("You lose! rock/paper");
        return 0;
    } else if (playerChoice == 1 && computerChoice == 2) {
        console.log("You lose! paper/scissors");
        return 0;
    } else {
        console.error("broken playRound()");
    }
}

function playFullGame() {
    let checkResult;
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (let scoreSum = 5; scoreSum > (playerScore + computerScore);) {
        checkResult = playRound();
        ++rounds;
        if (checkResult == 0) {
            ++computerScore;
        } else if (checkResult == 1) {
            ++playerScore;
        }

        console.log(`Rounds: ${rounds}`);
        console.log(`Score: ${playerScore} / ${computerScore}`);

        if (playerScore >= 3) {
            console.log("You've won!!!")
            return;
        } else if (computerScore >= 3) {
            console.log("You've lost!!!")
            return;
        }
    }
}

playFullGame();