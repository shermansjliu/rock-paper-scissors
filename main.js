playerPoints = 0
computerPoints = 0

function computerPlay(){
    let choice = Math.random()*3
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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let paper_wins = "Paper beats Rock";
    let rock_wins = "Rock beats Scissors";
    let scissors_wins = "Scissors beats Paper";
    let player_wins = "You Win!";
    let player_lose = 'You Lose!';

    if (playerSelection == "scissors" && computerSelection == 'paper'){

        game( [`${player_wins} ${scissors_wins}`, true])
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        game( [`${player_wins} ${paper_wins}`, true])
    }
    else if (playerSelection == "rock" && computerSelection == 'scissors'){
        game( [`${player_wins} ${rock_wins}`, true])
    }
    else if (playerSelection == computerSelection){
        game( ["draw", 2])
    }
    else if (computerSelection == "scissors"){
        game( [`${player_lose} ${scissors_wins}`, false])
    }
else if (computerSelection == "rock"){
    game( [`${player_lose} ${rock_wins}`, false])
    }

else if (computerSelection == "paper"){
    game( [`${player_lose} ${paper_wins}`, false])
    }

}


function game(roundResult) {

     if (roundResult[1]) {
        playerPoints += 1
    }
    else if(!roundResult[1]){
        computerPoints += 1
    }
    //Update Scores
    document.querySelector('.player-score > p').textContent = playerPoints;
    document.querySelector('.computer-score > p').textContent = computerPoints;

    if (playerPoints >= 5 || computerPoints >= 5) {
        let result_msg = document.querySelector('.result-text');
        if (playerPoints > computerPoints) {
            result_msg.textContent = 'Player Wins!';
        }
        else if (computerPoints > playerPoints ) {
            result_msg.textContent = 'Computer Wins!';
        }
        else{
            result_msg.textContent = "It's a draw!";
        }
    }


}


let buttons = document.querySelectorAll('.player-score > .button-container > .button')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        switch(button){
            case buttons[0]:

                    playRound('rock', computerPlay());
                    break;

            case buttons[1]:
                playRound('paper', computerPlay());
                break;

            case buttons[2]:
                playRound('scissor', computerPlay());
                break;
        }
    })
})
