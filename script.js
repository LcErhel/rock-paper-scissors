console.log("check");

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

function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {
    console.log(computerChoice, humanChoice);

    if(!Number.isInteger(+humanChoice)) {
        return console.log("not a number")
    }
    
    if(humanChoice >= 4 || humanChoice <= 0) {
        return console.log("invalid number");
    }

    if(computerChoice == humanChoice) {
        round++
        console.log("draw");
    } else if (computerChoice == 1 && humanChoice == 2) {
        console.log("win");
        round++
        humanScore++;
    } else if (computerChoice == 2 && humanChoice == 3) {
        console.log("win");
        round++
        humanScore++;
    } else if (computerChoice == 3 && humanChoice == 1) {
        console.log("win");
        round++
        humanScore++;
    } else {
        round++
        computerScore++;
        console.log("lose");
    }
}

function playGame() {
    for(round = 0; round < 5;) {
        playRound();
    }

    if(computerScore > humanScore) {
        console.log("You lose! Final score: " + computerScore + ":" + humanScore);
    } else if (computerScore < humanScore) {
        console.log("You win! Final score: " + computerScore + ":" + humanScore)
    } else {
        console.log("Draw! Final score: " + computerScore + ":" + humanScore)
    }
    console.log("rounds: " + round);
    reset();
}

function reset() {
    computerScore = 0;
    humanScore = 0;
    round = 0;
}