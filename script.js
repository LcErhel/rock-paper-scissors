console.log("check");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("1 - rock, 2 - paper, 3 - scissors");
    console.log(humanChoice);
    return humanChoice;
}