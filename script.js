const computer = ["Rock", "Paper", "Scissors"];

function getComputerChoice(computer) {
    return computer[Math.floor(Math.random()*computer.length)];
}


function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a tie! Rock ties with rock";
    }
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++
        return "You lost! Rock is beaten by paper";
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        userScore++
        return "You won! Rock beats scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a tie! Paper ties with paper";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        userScore++;
        return "You won! Paper beats rock";
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lost! Paper is beaten by scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie! Scissors ties with scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lost! Scissors is beaten by rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        userScore++;
        return "You won! Scissors beats paper";   
    }
    else {
        return "Something went wrong!";
    }
}



let computerSelection = getComputerChoice(computer);

let playerSelection = "paper";



let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

for(var i=0;i<5;i++){
  let playerSelection = prompt("Pick a move");
  console.log(playRound(playerSelection, computerSelection));
  console.log("your score = " + userScore);
  console.log("Computer's score = " + computerScore);
}