const possibilities = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    const computerChoice = possibilities[Math.round(Math.random()*2)];
    let result = "";
    resultDisplay.classList.remove("greenText", "redText");

    if (playerChoice === computerChoice) {
        result = "It is a tie!";
    }
    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You won!" : "You lost!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You won!" : "You lost!";
                break;    
            case "scissors":
                result = (computerChoice === "paper") ? "You won!" : "You lost!";
                break;    
        }
    }

    playerDisplay.innerHTML = "PLAYER: " + playerChoice;
    computerDisplay.innerHTML = "COMPUTER: " + computerChoice;
    resultDisplay.innerHTML = result;

    switch(result) {
        case "You won!":
            resultDisplay.classList.add("greenText");
            break;
        case "You lost!":
            resultDisplay.classList.add("redText");
            break;    
    }
}