// function to generate a random choice for the computer
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
// console.log(getRandomComputerResult());

//function to determine if player has won the round
function hasPlayerWonTheRound(player, computer) {
    if ((player === "Rock" && computer === "Scissors") || (player === "Scissors" && computer === "Paper")||(player === "Paper" && computer === "Rock")) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
// console.log(hasPlayerWonTheRound("Scissors", "Rock"));

let playerScore = 0;
let computerScore = 0;

//get result of rounds
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    let resultMessage = '';
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore ++;
        resultMessage =`Player wins! ${userOption} beats ${computerResult}`
    }
    else if (userOption === computerResult) {
        resultMessage = `It's a tie! Both chose ${userOption}`
    }
    else {
        computerScore += 1;
        resultMessage = `Computer wins! ${computerResult} beats ${userOption}`
    }
    return resultMessage;
}
console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

//accessing elements from the DOM
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

//function to update scores and the round results message
function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText += playerScore;
    computerScoreSpanElement.innerText += playerScore;

    if (playerScoreSpanElement.value === '3'){
        winnerMsgElement.innerText = "Player has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
    // else if (computerScoreSpanElement.value === '3') {
    //     winnerMsgElement.innerText = "Computer has won the game!";
    // }
    else {
        winnerMsgElement.innerText = "Computer has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
};

//function to reset game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});