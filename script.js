'use strict';

//selecting elements only
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

//stating condition
score0El.textContent = 0;
score1El.textContent = 0;

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
