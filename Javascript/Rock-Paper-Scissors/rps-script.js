let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const scoreElement = document.querySelector(".score-element");
const resultElement = document.querySelector(".result-element");
const movesElement = document.querySelector(".player-computer-move-element");

showScoreElement();

function playerMove(move) {
  const computerMove = randomComputerMove();
  let result = "";

  if (move === "rock") {
    if (computerMove === "rock") {
      result = "tie";
    } else if (computerMove === "paper") {
      result = "lose";
    } else if (computerMove === "scissor") {
      result = "win";
    }
  } else if (move === "paper") {
    if (computerMove === "rock") {
      result = "win";
    } else if (computerMove === "paper") {
      result = "tie";
    } else if (computerMove === "scissor") {
      result = "lose";
    }
  } else if (move === "scissor") {
    if (computerMove === "rock") {
      result = "lose";
    } else if (computerMove === "paper") {
      result = "win";
    } else if (computerMove === "scissor") {
      result = "tie";
    }
  }

  if (result === "win") {
    score.wins += 1;
  } else if (result === "tie") {
    score.ties += 1;
  } else if (result === "lose") {
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  resultElement.innerText = `You ${result}`;

  movesElement.innerHTML= `Your move:
      <img src="img/${move}-emoji.png" class="move-icon" alt="" /> 
      Computer move:
      <img src="img/${computerMove}-emoji.png" class="move-icon" alt="" />`; 

  showScoreElement();
}

function randomComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }
  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem("score");

  showScoreElement();
}

function showScoreElement() {
  scoreElement.innerText = `Wins: ${score.wins} Loses: ${score.losses} Ties: ${score.ties}`;
}
