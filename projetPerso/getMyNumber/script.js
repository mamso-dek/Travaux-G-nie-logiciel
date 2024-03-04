'use strict';
// console.log(document.querySelector('.message'));
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  if (!guess) {
    displayMessage('⛔Entrer un nombre');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Youpi!! 🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Trop grand😥' : 'Trop petit😥');
    } else {
      displayMessage('Partie pardue!!😖');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.check').addEventListener('click', function () {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        displayMessage('Guess the number');
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
      });
    }
  }
});
// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Guess the number');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
