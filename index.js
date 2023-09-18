let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let initialScoreH = 0;
let initialScoreG = 0;

function addOneH() {
  initialScoreH += 1;
  scoreHome.textContent = initialScoreH;
}

function addTwoH() {
  initialScoreH += 2;
  scoreHome.textContent = initialScoreH;
}
function addThreeH() {
  initialScoreH += 3;
  scoreHome.textContent = initialScoreH;
}

function addOneG() {
  initialScoreG += 1;
  scoreGuest.textContent = initialScoreG;
}

function addTwoG() {
  initialScoreG += 2;
  scoreGuest.textContent = initialScoreG;
}
function addThreeG() {
  initialScoreG += 3;
  scoreGuest.textContent = initialScoreG;
}

function reset() {
  document.getElementById("score-home").innerText = 0;
  document.getElementById("score-guest").innerText = 0;
}
