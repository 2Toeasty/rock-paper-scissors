
function getPlayerChoice(choseRock, chosePaper, choseScissors) { //TODO: Change prompts to button options

    if (choseRock == true) {
        return "ROCK";
    } else if (chosePaper == true) {
        return "PAPER";
    } else if (choseScissors == true) {
        return "SCISSORS";
    }

}

function getComputerChoice() {
    let randomNum = getRandomIntInclusive(1, 3);
    switch (randomNum) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
    }
}

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector("p");



let rockPress = false;
let paperPress = false;
let scissorsPress = false;

function playRound() {
    if (result) {
        result.textContent = ""; //resets the result div
    }

    let playerChoice = getPlayerChoice(rockPress, paperPress, scissorsPress);
    let computerChoice = getComputerChoice();

    let output = "You chose " + playerChoice + "\n The computer chose " + computerChoice + ", ";
    let winner = WinDecider(playerChoice, computerChoice);

    switch (winner) {
        case 0:
            output += `it's a tie, the score is still: \n Computer: ${computerScore} \n You: ${playerScore}`;
            result.textContent = output;
            break;
        case 1:
            playerScore++;
            output += `you win! The score is now: \n Computer: ${computerScore} \n You: ${playerScore}`;
            result.textContent = output;
            break;
        case 2:
            computerScore++;
            output += `you lose. The score is now: \n Computer: ${computerScore} \n You: ${playerScore}`;
            result.textContent = output;
    }
    rockPress = false;
    paperPress = false;
    scissorsPress = false;

    console.log("playerScore " + playerScore);
    console.log("computerScore " + computerScore);
    checkWin(playerScore, computerScore);
}



function checkWin() {
    if (playerScore == 5) {
        result.textContent = `congratulations, you won! \n The final score was \n You: ${playerScore} \n Computer: ${computerScore}`;
        rockPress = false;
        paperPress = false;
        scissorsPress = false;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        result.textContent = `game over, you lost :( \n The final score was \n Computer: ${computerScore} \n You: ${playerScore}`;
        rockPress = false;
        paperPress = false;
        scissorsPress = false;
        playerScore = 0;
        computerScore = 0;
    }
}
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

if (playerScore < 5 && computerScore < 5) {

    rockButton.addEventListener("click", () => {
        rockPress = true;
        playRound();
    })
    paperButton.addEventListener("click", () => {
        paperPress = true;
        playRound();
    })
    scissorsButton.addEventListener("click", () => {
        scissorsPress = true;
        playRound();
    })
}

function WinDecider(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 0; //tie
    }

    if (playerChoice == "ROCK") {
        if (computerChoice == "SCISSORS") {
            return 1; //win
        } else {
            return 2; //lose
        }
    }

    if (playerChoice == "PAPER") {
        if (computerChoice == "ROCK") {
            return 1; //win
        } else {
            return 2; //lose
        }
    }

    if (playerChoice == "SCISSORS") {
        if (computerChoice == "PAPER") {
            return 1; //win
        } else {
            return 2; //lose
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max - Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}