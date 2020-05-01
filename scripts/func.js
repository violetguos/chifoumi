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
    console.log(playerSelection);
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


function game(button){


    
    let playerMove = button.name;
    let computerMove = computerPlay();

    let score_one_round = playRound(playerMove, computerMove);
    playerScore += score_one_round[0];
    computerScore += score_one_round[1];
    let displayResult = `Player ${playerScore} : computer ${computerScore}`;
    
    //announce winner

    if (playerScore >= 5){
        displayResult += "\nYOU WIN";
    }
    else if (computerScore >=5)
        displayResult += "\nI WIN";

    
    // display results in a new div
    const mainDiv = document.querySelector('#main');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = displayResult;
    mainDiv.appendChild(content);

    
}

// global score
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    //button.addEventListener('click', function(){playRound(button.name, computerPlay())});
    button.addEventListener('click', function(){game(button)});
});