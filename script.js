

/*
functions needed:
Player Choice [done]
Computer Choice [done]
Win Decider [done]
Win Counter
*/

/*
Player choice: [DONE]
Message: Enter Rock, Paper, or Scissors
Store user input in string variable playerChoice
convert all chars in playerChoice to uppercase
While (playerChoice != ROCK || PAPER || SCISSORS) {
    playerChoice = prompt("please enter a valid move")
    playerChoice = playerChoice.toUpperCase;
}
Return playerChoice
*/

function getPlayerChoice() {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors");
    playerChoice = playerChoice.toUpperCase();
    while (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        playerChoice = prompt("Please enter a valid move");
        playerChoice = playerChoice.toUpperCase();
    }
    return playerChoice;
}

/*
Computer choice
let variable randomNum get a random number between one and three
if the number is 1, return "ROCK"
if the number is 2, return "PAPER"
if the number is 3, return "SCISSORS"
*/
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
            return "SCISSORS"
    }
}



/*
create integer playerScore == 0
create integer computerScore == 0

create a loop that runs through the game until either computerScore == 5, or playerScore == 5

string output = "the computer chose " [computerChoice]
String playerChoice = playerChoice()
String computerChoice = computerChoice()
int winner = WinDecider(playerChoice, computerChoice)

if winner == 0, output += "it's a tie", move to the next game.
if winner == 1, output += "you win", playerScore++
if winner == 2, output += "you lose", computerScore++
output "the score is: /nComputer: computerScore /nPlayer: playerScore"

[once loop has exited]

if playerScore == 5, output "Congratulations, you won the game!"
    else
        "Game over, you lost :("

*/

let playerScore = 0;
let computerScore = 0;

while (playerScore != 5 && computerScore != 5) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let output = "The computer chose " + computerChoice + ", ";
    let winner = WinDecider(playerChoice, computerChoice);


    switch (winner) {
        case 0:
            output += `it's a tie, the score is still: \n Computer: ${computerScore} \n You: ${playerScore}`
            alert(output);
            break;
        case 1:
            playerScore++;
            output += `you win! The score is now: \n Computer: ${computerScore} \n You: ${playerScore}`
            alert(output);
            break;
        case 2:
            computerScore++;
            output += `you lose. The score is now: \n Computer: ${computerScore} \n You: ${playerScore}`
            alert(output);
    }
}

if (playerScore == 5) {
    alert("congratulations, you won!");
} else {
    alert("Game over, you lost :(");
}


/*
WinDecider (playerChoice, computerChoice)
if playerChoice equals computerChoice, return 0
if playerChoice is ROCK,
    then if computerChoice is SCISSORS
        return 1
    else
        return 2

if playerChoice is PAPER
    then if computerChoice is ROCK,
        return 1
    else
        return 2

if playerChoice is SCISSORS
    then if computerChoice is PAPER
        return 1
    else
        return 2
*/

function WinDecider(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 0; //tie
    }

    //if the player returns ROCK
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