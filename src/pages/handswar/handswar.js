import './handswar.css';
import { createModal } from '../../components/modal/modal.js';
import { updateCounter } from '../../components/counter/counter.js';

const handChoices = ['rock', 'paper', 'scissors'];
export const initSpecificGame = () => {
  const gameContainer = document.querySelector('.game-container');

  const scenario = document.createElement('div');
  scenario.classList.add('scenario');

  const yourHandText = document.createElement('p');
  yourHandText.classList.add('your-hand-text');
  yourHandText.textContent = 'Elige tu mano';

  const yourHandOptions = document.createElement('div');
  yourHandOptions.classList.add('your-hand-options');

  handChoices.forEach((choice) => {
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = `./public/assets/handswar/${choice}.png`;
    img.alt = `${choice} image`;
    button.append(img);
    button.addEventListener('click', () => {
      document
        .querySelectorAll('.your-hand-options button')
        .forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
      button.dataset.choice = choice;
      button.classList.remove('inactive');
      playButton.disabled = false;
    });
    yourHandOptions.append(button);
  });

  const playButton = document.createElement('button');
  playButton.classList.add('play-button', 'inactive');
  playButton.textContent = 'Jugar';
  playButton.disabled = true;
  playButton.addEventListener('click', () => {
    if (playButton.disabled) return;
    playButton.disabled = true;
    const rivalHandText = document.createElement('p');
    rivalHandText.classList.add('rival-hand-text');
    rivalHandText.textContent = 'Mano del rival';
    scenario.insertBefore(
      rivalHandText,
      document.querySelector('.rival-hand-container')
    );
    startHandsWar();
  });

  const rivalHandContainer = document.createElement('div');
  rivalHandContainer.classList.add('rival-hand-container');

  const handsWarResult = document.createElement('p');
  handsWarResult.classList.add('hands-war-result');

  scenario.append(
    yourHandText,
    yourHandOptions,
    playButton,
    rivalHandContainer,
    handsWarResult
  );
  gameContainer.append(scenario);
};

const startHandsWar = () => {
  const rivalHandContainer = document.querySelector('.rival-hand-container');
  rivalHandContainer.innerHTML = '';
  let timer = 0;
  let lastChoice = null;
  const randomImg = setInterval(() => {
    let randomChoice;
    do {
      randomChoice =
        handChoices[Math.floor(Math.random() * handChoices.length)];
    } while (randomChoice === lastChoice);
    lastChoice = randomChoice;
    rivalHandContainer.innerHTML = `<img src="./public/assets/handswar/${randomChoice}.png" alt="${randomChoice}">`;
    timer++;
    if (timer === 12) {
      clearInterval(randomImg);
      const finalChoice = randomChoice;
      rivalHandContainer.innerHTML = `<img src="./public/assets/handswar/${finalChoice}.png" alt="${finalChoice}" class="final-choice">`;
      showResult(finalChoice);
    }
  }, 200);
};

const showResult = (rivalChoice) => {
  const selectedButton = document.querySelector(
    '.your-hand-options button.selected'
  );
  if (!selectedButton) return;
  const playerChoice = selectedButton.dataset.choice;
  const results = document.querySelector('.hands-war-result');

  let currentPoints = parseInt(localStorage.getItem('points'), 10) || 0;

  if (playerChoice === rivalChoice) {
    results.textContent = `¡Hay un empate!`;
  } else if (
    (playerChoice === 'rock' && rivalChoice === 'scissors') ||
    (playerChoice === 'scissors' && rivalChoice === 'paper') ||
    (playerChoice === 'paper' && rivalChoice === 'rock')
  ) {
    currentPoints += 1;
    localStorage.setItem('points', currentPoints);
    updateCounter(currentPoints);
    results.textContent = `¡Enhorabuena, has ganado!`;
  } else {
    results.textContent = `Lo siento, has perdido.`;
  }
  results.classList.add('show-result');
  setTimeout(endGame, 2000);
};

const endGame = () => {
  const playButton = document.querySelector('.play-button');
  playButton.disabled = false;
  createModal();
};

document.addEventListener('DOMContentLoaded', initSpecificGame);
