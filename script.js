console.log("check");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(computerChoice);
    return computerChoice;
}