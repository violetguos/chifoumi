// constants
const ROCK = "rock"
const PAPER = "paper"
const SCISSOR = "scissor"
let game_params =[ROCK, PAPER, SCISSOR]


function computerPlay(){
    /* Returns the computer's choice */
    let move;
    let seed = Math.random();
    let choice = Math.floor(seed * 3);
    return game_params[choice];   
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let score_arr = [0, 0]; // player : computer scores

    // one round of RPS
    if(playerSelection == ROCK){
        if(computerSelection == SCISSOR){
            score_arr = [1, 0];
        }
        else if (computerSelection == PAPER){
            score_arr = [0, 1];
        }
    }
    else if(playerSelection == PAPER){
        if(computerSelection == ROCK){
            score_arr = [1, 0];
        }
        else if (computerSelection == SCISSOR){
            score_arr = [0, 1];
        }
    }
    else if (playerSelection == SCISSOR){
        if(computerSelection == PAPER){
            score_arr = [1, 0];
        }
        else if (computerSelection == ROCK){
            score_arr = [0, 1];
        }
    }
    return score_arr;
}


function game(){

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerMove = prompt("Your move");
        let computerMove = computerPlay();

        let score_one_round = playRound(playerMove, computerMove);
        playerScore += score_one_round[0];
        computerScore += score_one_round[1];
        console.log(`Player ${playerScore} : computer ${computerScore}`);
    }
    if (playerScore > computerScore){
        console.log("YOU WIN");
    }
    else if (playerScore < computerScore)
        console.log("I WIN");
    else 
        console.log("TIE");

}

game();
