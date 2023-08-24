

/*
functions needed:
Player Choice
Computer Choice
Win Decider
Win Counter
*/

/*
Player choice:
Message: Enter Rock, Paper, or Scissors
Store user input in string variable playerChoice
convert all chars in playerChoice to uppercase
Return playerChoice
*/

/*
Computer choice
let variable randomNum get a random number between one and three
if the number is 1, return "ROCK"
if the number is 2, return "PAPER"
if the number is 3, return "SCISSORS"
*/

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

