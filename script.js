'use strict';

let num = null;
let score = 100;
let highScore = 0;

const random = () => {
  return (num = Math.floor(Math.random() * 10) + 1);
};

num = random();

const buttonAgain = document.querySelector('.btn');
const buttonCheck = document.querySelector('.btn.check');

buttonAgain.addEventListener('click', () => {
  console.log(random());
  document.querySelector('.number').textContent = '?';
  console.log(num);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 100;
  score = 100;
});

const scoreCalc = () => {
  document.querySelector('.score').textContent = --score;
};

buttonCheck.addEventListener('click', () => {
  console.log(num);
  const guess = document.querySelector('.guess').value;
  +guess === num
    ? (document.querySelector('.message').textContent = 'Congratulations!')
    : +guess > num
    ? (document.querySelector('.message').textContent = 'Number is lower')
    : (document.querySelector('.message').textContent = 'Number is higher');

  if (+guess === num) {
    document.querySelector('.number').textContent = num;
    document.querySelector('.highscore').textContent = score;
  } else {
    scoreCalc();
  }
});
