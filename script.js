'use strict';

//selecting elements only
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

//stating condition
score0El.textContent = 0;
score1El.textContent = 0;

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', function () {
  // Move down the variable here to be called when ever the btn is clicked.
  let dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
});
