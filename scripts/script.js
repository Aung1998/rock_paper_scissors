const HANDS = ["rock", "paper", "scissors"];
function computerPlay(){
    return HANDS[Math.floor(Math.random() * HANDS.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "draw";
    }
    else if ((playerSelection=="rock" &&  computerSelection == "scissors") || 
            (playerSelection=="scissors" && computerSelection == "paper") ||
            (playerSelection=="paper" && computerSelection == "rock")){
        return "human";
    }
    else{
        return "computer";
    }
}

function playGame(){
    let human_points = 0;
    let computer_points = 0;
    while (human_points < 5 && computer_points < 5){
        let human = prompt("Enter your sign");
        result = playRound(human.toLowerCase(), computerPlay());
        if(result == "human"){
            console.log("Human win the round!");
            human_points += 1;
            console.log(human_points)
        }
        else if (result == "computer"){
            console.log("Computer win the round!");
            computer_points += 1;
            console.log(computer_points)
        }
        else{
            console.log("It's a Draw!");
        }
    }
    if(human_points == 5) {
        console.log("Human win the game!");
    }
    else{
        console.log("Computer win the game!");
    }
}


  