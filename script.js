"use strict";

let computerScore = 0;
let humanScore = 0;
let round = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("1 - rock, 2 - paper, 3 - scissors");
    return humanChoice;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if(computerChoice == humanChoice) {
        round++
    } else if (computerChoice == 1 && humanChoice == 2) {
        round++
        humanScore++;
    } else if (computerChoice == 2 && humanChoice == 3) {
        round++
        humanScore++;
    } else if (computerChoice == 3 && humanChoice == 1) {
        round++
        humanScore++;
    } else {
        round++
        computerScore++;
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const showRound = document.querySelector(".round");
const showScore = document.querySelector(".score");
const showResult = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");

rock.addEventListener("click", () => {
    playRound(1);
    refresh();
    result();
});

paper.addEventListener("click", () => {
    playRound(2);
    refresh();
    result();
});

scissors.addEventListener("click", () => {
    playRound(3);
    refresh();
    result();
});

resetBtn.addEventListener("click", () => {
    reset();
    refresh();
});

function result() {
    if(humanScore >= 5 || computerScore >= 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        if(humanScore >= 5) {
            showResult.textContent = "result: player won!";
        } else {
            showResult.textContent = "result: computer won!";
        }
    }
}

function reset() {
    computerScore = 0;
    humanScore = 0;
    round = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

function refresh() {
    showRound.textContent = "total rounds: " + round;
    showScore.textContent = "computer = " + computerScore + ", human = " + humanScore;
    showResult.textContent = "result:";
}