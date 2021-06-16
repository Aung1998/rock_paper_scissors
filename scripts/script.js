const HANDS = ["rock", "paper", "scissors"];

let human_points = 0;
let computer_points = 0;

const btn = document.getElementsByClassName("choice_btn");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const human_result = document.getElementById("human_point")
const computer_result = document.getElementById("computer_point")
const winner  = document.getElementById("winner");

function computerPlay() {
  return HANDS[Math.floor(Math.random() * HANDS.length)];
}

function computerAnnimate(btn_id){
  const comp_btn = document.getElementById(btn_id);
  comp_btn.classList.toggle('comp_clicked');
  comp_btn.addEventListener("transitionend", removeTransition);
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
  let computer = computerPlay();
  computerAnnimate(computer);
  result = playRound(human.toLowerCase(), computer);
  if (result == "human") {
    winner.textContent = "Human Win the round!"
    human_points += 1;
    console.log("Human Points: " + human_points);
  } else if (result == "computer") {
    winner.textContent = "Computer Win the round!"
    computer_points += 1;
    console.log("Computer Points: " + computer_points);
  } else {
    winner.textContent = "It's a draw!"
  }
  updateResult();
  decidewin();
}

function reset() {
  human_points = 0;
  computer_points = 0;
  updateResult();
  winner.textContent = "";
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
    winner.textContent = "Human Win The Game!"
  } else if (computer_points == 5) {
    btn_disabled(true);
    winner.textContent = "Computer Win The Game!"
  }
}

for(let i = 0; i<=btn.length; i++){
  btn[i].addEventListener('click', function(e){
    this.classList.toggle('btn_clicked');
  })
  btn[i].addEventListener("transitionend", removeTransition);    
}

function removeTransition(e){
  if(e.propertyName != 'transform') return;
  this.classList.remove('btn_clicked');
  this.classList.remove('comp_clicked');
}

