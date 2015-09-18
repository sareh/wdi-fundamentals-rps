////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (playerMove === 'rock'){
            switch (computerMove){
                case 'scissors':
                    winner='player';
                    break;
                case 'paper':
                    winner='computer';
                    break;
                case 'rock':
                    winner='tie';
                    break;
            }
    }
    if (playerMove === 'paper'){
            switch (computerMove){
                case 'scissors':
                    winner='computer';
                    break;
                case 'paper':
                    winner='tie';
                    break;
                case 'rock':
                    winner='player';
                    break;
            }
    }
    if (playerMove === 'scissors'){
            switch (computerMove){
                case 'scissors':
                    winner='tie';
                    break;
                case 'paper':
                    winner='player';
                    break;
                case 'rock':
                    winner='computer';
                    break;
            }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    var bestOfNum = 5;
    /* This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    For example,
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    */

    //while number of wins on either side are less than 5 (bestOfNum), continue to loop & play the game:
    while ((playerWins<bestOfNum)&&(computerWins<bestOfNum)){
        
        playerMove=getPlayerMove(); //ask player for their move
        computerMove=getComputerMove(); //get the computer's move
        winner=getWinner(playerMove,computerMove); //calculate who has won
        console.log('Player chose "' + playerMove + '" while Computer chose "' + computerMove + '".\n');

        //increment number of wins & print result
        switch (winner){
            case 'tie':
                console.log('It was a tie!\n');
                break;
            case 'player':
                playerWins += 1;
                console.log('The '+ winner + ' won.\n');
                break;
            case 'computer':
                computerWins += 1;
                console.log('The ' + winner + ' won.\n');
                break;
        }

        console.log('The score is currently player:' + playerWins + ' to computer:' + computerWins + '.\n');
        
        if((playerWins != bestOfNum)&&(computerWins != bestOfNum)){
            //here neither has reached the 'bestOfNum'(default 5) wins:
            console.log('We will continue playing until we get to the best of ' + bestOfNum + '\n\n\n');
        } else {
            //here either one has 
            console.log('The ' + winner + ' has won Rock Paper Scissors - best of '+bestOfNum+'!\n');
        }


    }
    return [playerWins, computerWins];
}

