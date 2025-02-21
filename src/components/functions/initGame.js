import '../../style.css';
import { createCounter } from '../counter/counter.js';
import { backButton } from '../buttons/buttons.js';
import { resetPointsButton } from '../buttons/buttons.js';

export const initGame = (game) => {
  const gamesContainer = document.querySelector('.games-container');
  if (!gamesContainer) {
    console.error('No se encuentra el contenedor de juegos');
    return;
  }
  gamesContainer.classList.add('init-game-container');
  gamesContainer.innerHTML = '';

  const topContainer = document.createElement('div');
  topContainer.classList.add('top-container');

  topContainer.append(
    backButton(),
    createCounter(game.name),
    resetPointsButton(game.name)
  );

  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');

  const gameTitle = document.createElement('h3');
  gameTitle.classList.add('game-title');
  gameTitle.textContent = game.name;

  const gameInstructions = document.createElement('p');
  gameInstructions.classList.add('game-instructions');
  gameInstructions.innerHTML = game.instructions;

  const gamePrizes = document.createElement('p');
  gamePrizes.classList.add('game-prizes');
  gamePrizes.textContent = game.prizes;

  gameContainer.append(gameTitle, gameInstructions, gamePrizes);
  gamesContainer.append(topContainer, gameContainer);
};
