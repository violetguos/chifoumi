// constants

let game_params =["rock", "paper","scissor"]


function computerPlay(){
    /* Returns the computer's choice */
    let move;
    let seed = Math.random();
    let choice = Math.floor(seed * 3);
    return game_params[choice];   
}

