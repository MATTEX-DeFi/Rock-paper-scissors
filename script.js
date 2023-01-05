const computer = ["Rock", "Paper", "Scissors"];

function getComputerChoice(computer) {
    return computer[Math.floor(Math.random()*computer.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase()
    if (playerSelection === "rock" && computerSelection === "Rock") {
    return "It's a tie! Rock ties with rock";
    }
    else if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lost! Rock is beaten by paper";
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You won! Rock beats scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a tie! Paper ties with paper";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You won! Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lost! Paper is beaten by scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie! Scissors ties with scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lost! Scissors is beaten by rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You won! Scissors beats paper";   
    }
    else {
        return "Something went wrong!";
    }
}



let computerSelection = getComputerChoice(computer);

let playerSelection = "paper";

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));