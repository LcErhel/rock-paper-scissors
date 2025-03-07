console.log("check");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("1 - rock, 2 - paper, 3 - scissors");
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(computerChoice, humanChoice);

    if(!Number.isInteger(+humanChoice)) {
        return console.log("not a number")
    }
    
    if(humanChoice >= 4 || humanChoice <= 0) {
        return console.log("invalid number");
    }

    if(computerChoice == humanChoice) {
        console.log("draw");
    } else if (computerChoice == 1 && humanChoice == 2) {
        console.log("win");
        humanScore++;
    } else if (computerChoice == 2 && humanChoice == 3) {
        console.log("win");
        humanScore++;
    } else if (computerChoice == 3 && humanChoice == 1) {
        console.log("win");
        humanScore++;
    } else {
        computerScore++;
        console.log("lose");
    }
    console.log(computerScore, humanScore);
}