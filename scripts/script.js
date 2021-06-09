const HANDS = ["rock", "paper", "scissors"];

let human_points = 0;
let computer_points = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const human_result = document.getElementById("human_point")
const computer_result = document.getElementById("computer_point")

const final_result = document.getElementById("final-result");

function computerPlay() {
  return HANDS[Math.floor(Math.random() * HANDS.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "human";
  } else {
    return "computer";
  }
}

function playGame(value) {
  let human = value;
  result = playRound(human.toLowerCase(), computerPlay());
  if (result == "human") {
    console.log("Human win the round!");
    human_points += 1;
    console.log("Human Points: " + human_points);
  } else if (result == "computer") {
    console.log("Computer win the round!");
    computer_points += 1;
    console.log("Computer Points: " + computer_points);
  } else {
    console.log("It's a Draw!");
  }
  updateResult();
  decidewin();
}

function reset() {
  human_points = 0;
  computer_points = 0;
  updateResult();
  btn_disabled(false);
}

function updateResult(){
  human_result.textContent = "Human Point: " + human_points;
  computer_result.textContent = "Computer Point: " + computer_points;
}

function btn_disabled(bool){
  rock.disabled = bool;
  paper.disabled = bool;
  scissors.disabled = bool;
}

function decidewin() {
  if (human_points == 5) {
    btn_disabled(true);
    final_result.textContent = "Human Win The Game!"
  } else if (computer_points == 5) {
    btn_disabled(true);
    final_result.textContent = "Computer Win The Game!"
  }
}
