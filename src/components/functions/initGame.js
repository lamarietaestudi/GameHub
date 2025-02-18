import '../../style.css';
import { createCardGames } from '../gamecards/gamecards.js';

export const initGame = (game) => {
  const gamesContainer = document.querySelector('.games-container');
  if (!gamesContainer) {
    console.error('No se encuentra el contenedor de juegos');
    return;
  }
  gamesContainer.classList.add('init-game-container');
  gamesContainer.innerHTML = '';

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

  const backButton = document.createElement('button');
  backButton.classList.add('back-button');
  backButton.textContent = 'Volver al menú de juegos';
  backButton.addEventListener('click', () => {
    localStorage.removeItem('currentGameId');
    gamesContainer.classList.remove('init-game-container');
    createCardGames(gamesContainer);
  });

  gameContainer.append(gameTitle, gameInstructions, gamePrizes);
  gamesContainer.append(backButton, gameContainer);
};
