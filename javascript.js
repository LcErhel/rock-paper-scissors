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

function roundResult(result) {

    console.log(result);
    if (result == 2) {
        ++rounds;
    } else if (result == 0) {
        ++computerScore;
        ++rounds;
    } else if (result == 1) {
        ++playerScore;
        ++rounds;
    }

    console.log(`Rounds: ${rounds}`);
    console.log(`Score: ${playerScore} / ${computerScore}`);

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
        console.log("Draw! scissors/scissors")
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

//btnPaper.addEventListener("click", playRound(1));
//btnScissors.addEventListener("click", playRound(2));
/*
function getPlayerChoice() {
    const btnRock = document.querySelector(".rock");
    const btnPaper = document.querySelector(".paper");
    const btnScissors = document.querySelector(".scissors");

    btnRock.addEventListener("click", playRound(0));
    btnPaper.addEventListener("click", playRound(1));
    btnScissors.addEventListener("click", playRound(2));
}
*/
/*

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(choice) {
    let playerChoice = choice;
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

getPlayerChoice();
*/