const computer = ["Rock", "Paper", "Scissors"];
// function for a random computerChoice
function getComputerS(arr) {
   
    const randomIndex = Math.floor(Math.random() * 3);

    const item = arr[randomIndex];

    return item;
} 


// Core function (Game 1 round)
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "It's a tie! Rock ties with rock";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        computerScore++
        return "You lost! Rock is beaten by paper";
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        playerScore++
        return "You won! Rock beats scissors";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "It's a tie! Paper ties with paper";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You won! Paper beats rock";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lost! Paper is beaten by scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a tie! Scissors ties with scissors";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lost! Scissors is beaten by rock";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You won! Scissors beats paper";   
    }
    else {
        return "Something went wrong!";
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win"
let lose = "You lose"
let tie = "It is a tie"

// Loop to play 5 rounds
for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const computerSelection = getComputerS(computer);
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + playerScore);
    console.log("Computer's score = " + computerScore);
  }


