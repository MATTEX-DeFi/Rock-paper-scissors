alert('Choose a weapon to begin the game!');
const computer = ["Rock", "Paper", "Scissors"];

// function for a random computerChoice
function getComputerS(arr) {
   
    const randomIndex = Math.floor(Math.random() * 3);

    const item = arr[randomIndex];

    return item;
} 


// Core function (1 round)
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

// scores variables
let playerScore = parseInt(0);
let computerScore = parseInt(0);


//DOM Manipulation (UI)
let playerSc = document.getElementsByClassName('playerScore')[0];
playerSc.textContent = "Your score = " + playerScore;

let computerSc = document.getElementsByClassName('computerScore')[0];
computerSc.textContent = "Computer's score = " + computerScore;

const results = document.getElementsByClassName('result')[0];

let winOrLose = document.getElementsByClassName('winLose')[0];
let restartBtn = document.getElementsByClassName('restartBtn')[0];

    
// Rock button 
    const buttonRock = document.getElementsByClassName('buttonR')[0].addEventListener('click', function (){
        let playerSelection = 'rock';
        const computerSelection = getComputerS(computer);
            results.textContent = (playRound(playerSelection,computerSelection));
            let playerSc = document.getElementsByClassName('playerScore')[0];
            playerSc.textContent = "Your score = " + playerScore;
            let computerSc = document.getElementsByClassName('computerScore')[0];
            computerSc.textContent = "Computer's score = " + computerScore;
        
            if (playerScore === 5) {
                winOrLose.textContent = 'You won the game! If you want to play another game, click the restart button.';
                restartBtn.textContent = 'Restart';
                restartBtn.addEventListener('click', function (){
                location.reload();
                });
                document.getElementsByClassName('buttonR')[0].disabled = true;
                document.getElementsByClassName('buttonP')[0].disabled = true;
                document.getElementsByClassName('buttonS')[0].disabled = true;
            } else if (computerScore === 5) {
                winOrLose.textContent = 'You lost the game 😔 If you want to play another game, click the restart button.';
                restartBtn.textContent = 'Restart';
                restartBtn.addEventListener('click', function(){
                    location.reload();
                });
                document.getElementsByClassName('buttonR')[0].disabled = true;
                document.getElementsByClassName('buttonP')[0].disabled = true;
                document.getElementsByClassName('buttonS')[0].disabled = true;
            } else {
                return '';
            }});


    
// Paper button
    const buttonPaper = document.getElementsByClassName('buttonP')[0].addEventListener('click', function (){
      let playerSelection = 'paper';
      const computerSelection = getComputerS(computer);
        results.textContent = (playRound(playerSelection, computerSelection));
        let playerSc = document.getElementsByClassName('playerScore')[0];
        playerSc.textContent = "Your score = " + playerScore;
        let computerSc = document.getElementsByClassName('computerScore')[0];
        computerSc.textContent = "Computer's score = " + computerScore;
    
        if (playerScore === 5) {
            winOrLose.textContent = 'You won the game! If you want to play another game, click the restart button.';
            restartBtn.textContent = 'Restart';
            restartBtn.addEventListener('click', function (){
            location.reload();
            });
            document.getElementsByClassName('buttonR')[0].disabled = true;
            document.getElementsByClassName('buttonP')[0].disabled = true;
            document.getElementsByClassName('buttonS')[0].disabled = true;
        } else if (computerScore === 5) {
            winOrLose.textContent = 'You lost the game 😔 If you want to play another game, click the restart button.';
            restartBtn.textContent = 'Restart';
            restartBtn.addEventListener('click', function(){
                location.reload();
            });
            document.getElementsByClassName('buttonR')[0].disabled = true;
            document.getElementsByClassName('buttonP')[0].disabled = true;
            document.getElementsByClassName('buttonS')[0].disabled = true;
        } else {
            return '';
        }});
    
    
    
// Scissors button
    const buttonScissors = document.getElementsByClassName('buttonS')[0].addEventListener('click', function (){
        let playerSelection = 'scissors';
        const computerSelection = getComputerS(computer);
        results.textContent = (playRound(playerSelection, computerSelection));
        let playerSc = document.getElementsByClassName('playerScore')[0];
        playerSc.textContent = "Your score = " + playerScore;
        let computerSc = document.getElementsByClassName('computerScore')[0];
        computerSc.textContent = "Computer's score = " + computerScore;
        
        if (playerScore === 5) {
            winOrLose.textContent = 'You won the game! If you want to play another game, click the restart button.';
            restartBtn.textContent = 'Restart';
            restartBtn.addEventListener('click', function (){
            location.reload();
            });
            document.getElementsByClassName('buttonR')[0].disabled = true;
            document.getElementsByClassName('buttonP')[0].disabled = true;
            document.getElementsByClassName('buttonS')[0].disabled = true;
        } else if (computerScore === 5) {
            winOrLose.textContent = 'You lost the game 😔 If you want to play another game, click the restart button.';
            restartBtn.textContent = 'Restart';
            restartBtn.addEventListener('click', function(){
                location.reload();
            });
            document.getElementsByClassName('buttonR')[0].disabled = true;
            document.getElementsByClassName('buttonP')[0].disabled = true;
            document.getElementsByClassName('buttonS')[0].disabled = true;
        } else {
            return '';
        }});


 
