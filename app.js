const word = document.getElementById("word");
const input = document.getElementById("input-text");
const scoreEL = document.getElementById("score");
const openNav = document.querySelector(".open-nav");
const minNav = document.querySelector(".nav-mini");
const closeBtn = document.getElementById("close-nav");

function getResult() {
  fetch("https://random-words-api.vercel.app/word")
    .then(function (data) {
      return data.json();
    })
    .then(showResult);
}

getResult();

// let random word
let randomword;

// score
let score = 0;

function showResult(data) {
  randomword = data[0].word.toLowerCase();
  word.textContent = randomword;
}

input.addEventListener("input", function (e) {
  if (e.target.value == randomword) {
    getResult();
    score++;
    scoreEL.textContent = score;
    e.target.value = "";
  }
});

openNav.addEventListener("click", () => {
  minNav.classList.toggle("active")
});
