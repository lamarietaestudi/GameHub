import './buttons.css';
import { createCardGames } from '../gamecards/gamecards.js';
import { initGame } from '../functions/initGame.js';
import { resetGame } from '../functions/resetGame.js';

export const backButton = () => {
  const backButton = document.createElement('button');
  backButton.classList.add('back-button');
  backButton.textContent = '<< Volver';
  backButton.addEventListener('click', () => {
    const topContainer = document.querySelector('.top-container');
    const gamesContainer = document.querySelector('.games-container');
    if (topContainer) {
      topContainer.style.display = 'none';
    }
    resetGame();
    localStorage.removeItem('currentGameId');
    gamesContainer.classList.remove('init-game-container');
    createCardGames(gamesContainer);
  });
  return backButton;
};

export const resetPointsButton = (gameName) => {
  const resetPointsButton = document.createElement('button');
  resetPointsButton.classList.add('reset-points-button');
  resetPointsButton.textContent = 'Reiniciar';
  resetPointsButton.addEventListener('click', () => {
    localStorage.setItem(`points_${gameName}`, 0);
    const pointsLabel = document.querySelector('.points-label');
    if (pointsLabel) {
      pointsLabel.textContent = `Puntos:  0`;
    }
  });
  return resetPointsButton;
};
