const HANDS = ["rock", "paper", "scissors"];

let human_points = 0;
let computer_points = 0;

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
  decidewin();
}

function reset() {
  human_points = 0;
  computer_points = 0;
}

function decidewin() {
  if (human_points == 5) {
    console.log("Human win the game!");
    reset();
  } else if (computer_points == 5) {
    console.log("Computer win the game!");
    reset();
  }
}
