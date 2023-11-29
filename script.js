'use strict';

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const guessInp = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');

// 1 - 20
let secretNumber = getRandomNumber();
let score = 20;

scoreEl.textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInp.value);

  if (!guess) {
    messageEl.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number!';
    numberEl.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      messageEl.textContent = '📈 Too high!';
      scoreEl.textContent = --score;
    } else {
      messageEl.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      messageEl.textContent = '📉 Too low!';
      scoreEl.textContent = --score;
    } else {
      messageEl.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  body.style.backgroundColor = '';
  numberEl.style.width = '';

  score = 20;
  secretNumber = getRandomNumber();

  guessInp.value = '';
  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  numberEl.textContent = '?';
});
