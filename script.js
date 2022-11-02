'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const butnNew = document.querySelector('.btn--new');
const butnRoll = document.querySelector('.btn--roll');
const butnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let curentScore = 0;
// rolling dice functionality

butnRoll.addEventListener('click', function () {
  //1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    curentScore += dice;
    current0El.textContent = curentScore; // CHANGE LATER
  } else {
    // switch to the next player
  }
});
