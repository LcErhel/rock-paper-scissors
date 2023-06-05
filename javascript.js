"use strict"

function getPlayerChoice() {
    let choice = prompt("Rock/Paper/Scissor? || 0/1/2")
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
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
        return 0;
    } else if (result == 1) {
        return 1;
    } else {
        return 2;
    }
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice()
    if (playerChoice == 0 && computerChoice == 0) {
        return "Draw! rock/rock";
    } else if (playerChoice == 1 && computerChoice == 1) {
        return "Draw! paper/paper";
    } else if (playerChoice == 2 && computerChoice == 2) {
        return "Draw! scissors/scissors";
    } else if (playerChoice == 0 && computerChoice == 2) {
        return "You win! rock/scissors";
    } else if (playerChoice == 1 && computerChoice == 0) {
        return "You win! paper/rock";
    } else if (playerChoice == 2 && computerChoice == 1) {
        return "You win! scissors/paper";
    } else if (playerChoice == 2 && computerChoice == 0) {
        return "You lose! scissors/rock";
    } else if (playerChoice == 0 && computerChoice == 1) {
        return "You lose! rock/paper";
    } else if (playerChoice == 1 && computerChoice == 2) {
        return "You lose! paper/scissors";
    } else {
        console.error("broken playRound()");
    }
}

console.log(playRound());