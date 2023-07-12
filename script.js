'use strict';

//selecting elements only
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
let sum0 = 0; // bring this outside the function to make it sum up
const current1 = document.getElementById('current--1');
let sum1 = 0; // bring this outside the function to make it sum up
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//stating condition
score0El.textContent = 0;
score1El.textContent = 0;

btnRoll.addEventListener('click', function () {
  // Move down the variable here to be called when ever the btn is clicked.
  let dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //add score to current
  if (dice !== 1) {
    // add dice to current score
    sum0 += Number(dice);
    current0.textContent = sum0;
  } else {
    // switch to next player
    sum0 = 0;
    current0.textContent = 0;
  }
});
