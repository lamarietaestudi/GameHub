import { gamesData } from '../../data/gamesData.js';

export const initGame = () => {
  document.body.innerHTML = '';
  const gameContainer = document.createElement('div');
  gameContainer = classList.add('game-container');

  const gameContent = document.createElement('div');
  gameContent = classList.add('game-content');

  const gameTitle = document.createElement('h3');
  gameTitle = classList.add('game-title');
  gameTitle.textContent = gamesData.name;

  const gameInstructions = document.createElement('p');
  gameInstructions = classList.add('game-instructions');
  gameInstructions.textContent = gamesData.instructions;

  const gamePrizes = document.createElement('p');
  gamePrizes = classList.add('game-prizes');
  gamePrizes.textContent = gamesData.prizes;

  gameContainer.append(gameTitle, gameInstructions, gamePrizes);
  document.body.append(gameContainer);
};
