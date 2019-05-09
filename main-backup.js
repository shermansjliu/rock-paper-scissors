function computerPlay(){
    let choice = Math.random() * 3
    choice = Math.floor(choice)
    let move = ""
    switch (choice){
        case 0:
            move = "Scissors"
            break;
        case 1:
            move = "Rock";
            break
        case 2:
            move = "Paper"
            break;
    }
    return move
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    paper_wins = "Paper beats Rock"
    rock_wins = "Rock beats Scissors"
    scissors_wins = "Scissors beats Paper"
    player_wins = "You Win!"
    player_lose = 'You Lose!'

    if (playerSelection == "scissors" && computerSelection == 'paper'){

        return [`${player_wins} ${scissors_wins}`, true]
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return [`${player_wins} ${paper_wins}`, true]
    }
    else if (playerSelection == "rock" && computerSelection == 'scissors'){
        return [`${player_wins} ${rock_wins}`, true]
    }
    else if (playerSelection == computerSelection){
        return ["draw", 2]
    }
    else if (computerSelection == "scissors"){
        return [`${player_lose} ${scissors_wins}`, false]
}
else if (computerSelection == "rock"){
    return [`${player_lose} ${rock_wins}`, false]
}

else if (computerSelection == "paper"){
return [`${player_lose} ${paper_wins}`, false]
}
}

// computerSelection = "Paper"
// playerSelection = prompt("Let's play a game! choose 'rock', 'paper', or scissors' ")
//
// console.log(playRound(playerSelection, computerSelection)[0])

function game() {

    playerPoints = 0
    computerPoints = 0

    for (let i = 0; i < 5; i ++){
        computerSelection = computerPlay()
        playerSelection = prompt("Let's play a game! choose 'rock', 'paper', or scissors' ")

        if (playRound(playerSelection, computerSelection)[1] == true ){
            continue
        }
        else if(playRound(playerSelection, computerSelection)[1]){
            playerPoints += 1
        }
        else{
            computerPoints += 1
        }
    }
    console.log(playerPoints)
    console.log(computerPoints)
    if (playerPoints > computerPoints) {
        return `Player Wins`
    }
    else if (computerPoints > playerPoints){
        return 'Computer Wins!'
    }
    else{
        return "It's a draw!"
    }

}

console.log(game())
