const rules = document.getElementById("rules");
const imgRules = document.getElementById("img-rules");
const choices = document.getElementsByClassName("choices");
const choseRock = document.getElementById("chose-rock");
const choseScissors = document.getElementById("chose-scissors");
const chosePaper = document.getElementById("chose-paper");
const gameSection = document.getElementsByClassName("game-section")[0];
const winnerSection = document.getElementsByClassName("winner-section")[0];
const fightText = document.getElementsByClassName("fight-text");
const fightBox = document.getElementsByClassName("fight-box")[0];
const loadingCircle = document.getElementsByClassName("loading-circle")[0];
var win = document.getElementsByClassName("win")[0];
const lose = document.getElementsByClassName("lose")[0];
const draw = document.getElementsByClassName("draw")[0];
const resultDiv = document.getElementsByClassName("result")[0];
const playAgain = document.getElementsByClassName("play-again")[0];
var randomNumber = Math.floor(Math.random() * 3);
var computerChoice = choices[randomNumber];
var clonePlayer = choices[1].cloneNode(true);
var cloneComputer = computerChoice.cloneNode(true);
var scoreCount = 0;
const gameScore = document.getElementsByClassName("game-score")[0];

function decideWinner(playerChoice, cpuChoice) {
  if (playerChoice.classList.contains("rock-div")) {
    switch (playerChoice.classList.contains("rock-div")) {
      case cpuChoice.classList.contains("scissors-div"):
        win.classList.add("outcome");
        scoreCount++;
        break;
      case cpuChoice.classList.contains("paper-div"):
        lose.classList.add("outcome");
        break;
      case cpuChoice.classList.contains("rock-div"):
        draw.classList.add("outcome");
        break;
    }
  } else if (playerChoice.classList.contains("scissors-div")) {
    switch (playerChoice.classList.contains("scissors-div")) {
      case cpuChoice.classList.contains("paper-div"):
        win.classList.add("outcome");
        scoreCount++;
        break;
      case cpuChoice.classList.contains("rock-div"):
        lose.classList.add("outcome");
        break;
      case cpuChoice.classList.contains("scissors-div"):
        draw.classList.add("outcome");
        break;
    }
  } else if (playerChoice.classList.contains("paper-div")) {
    switch (playerChoice.classList.contains("paper-div")) {
      case cpuChoice.classList.contains("rock-div"):
        win.classList.add("outcome");
        scoreCount++;
        break;
      case cpuChoice.classList.contains("scissors-div"):
        lose.classList.add("outcome");
        break;
      case cpuChoice.classList.contains("paper-div"):
        draw.classList.add("outcome");
        break;
    }
  }

  if (win.classList.contains("outcome")) {
    playerChoice.classList.add("winner");
  } else if (lose.classList.contains("outcome")) {
    cpuChoice.classList.add("winner");
  }
  gameScore.innerHTML = scoreCount;
}

rules.addEventListener("click", () => {
  imgRules.classList.toggle("active");
});

choseRock.addEventListener("click", () => {
  gameSection.classList.add("hidden");
  winnerSection.classList.add("visible");
  window.clonePlayer = choices[1].cloneNode(true);
  fightText[0].before(clonePlayer);
  window.randomNumber = Math.floor(Math.random() * 3);
  window.computerChoice = choices[randomNumber];
  window.cloneComputer = computerChoice.cloneNode(true);
  setTimeout(() => {
    loadingCircle.classList.add("ready");

    fightText[1].before(cloneComputer);
    decideWinner(clonePlayer, cloneComputer);
    resultDiv.classList.add("ready");
  }, 1000);
});

choseScissors.addEventListener("click", () => {
  gameSection.classList.add("hidden");
  winnerSection.classList.add("visible");
  window.clonePlayer = choices[2].cloneNode(true);
  fightText[0].before(clonePlayer);
  window.randomNumber = Math.floor(Math.random() * 3);
  window.computerChoice = choices[randomNumber];
  window.cloneComputer = computerChoice.cloneNode(true);
  setTimeout(() => {
    loadingCircle.classList.add("ready");

    fightText[1].before(cloneComputer);
    decideWinner(clonePlayer, cloneComputer);
    resultDiv.classList.add("ready");
  }, 1000);
});

chosePaper.addEventListener("click", () => {
  gameSection.classList.add("hidden");
  winnerSection.classList.add("visible");
  window.clonePlayer = choices[0].cloneNode(true);
  fightText[0].before(clonePlayer);
  window.randomNumber = Math.floor(Math.random() * 3);
  window.computerChoice = choices[randomNumber];
  window.cloneComputer = computerChoice.cloneNode(true);
  setTimeout(() => {
    loadingCircle.classList.add("ready");

    fightText[1].before(cloneComputer);
    decideWinner(clonePlayer, cloneComputer);
    resultDiv.classList.add("ready");
  }, 1000);
});

playAgain.addEventListener("click", () => {
  gameSection.classList.remove("hidden");
  winnerSection.classList.remove("visible");
  loadingCircle.classList.remove("ready");
  resultDiv.classList.remove("ready");
  win.classList.remove("outcome");
  draw.classList.remove("outcome");
  lose.classList.remove("outcome");
  let youPicked = document.querySelector(".player .choices");
  let cpuPicked = document.querySelector(".computer .choices");
  youPicked.remove();
  cpuPicked.remove();
  youPicked.classList.remove("winner");
  cpuPicked.classList.remove("winner");
});
