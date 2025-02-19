import { topoInterval } from '../../pages/topocrash/topocrash';

const stopAllProcesses = () => {
  if (topoInterval) {
    clearInterval(topoInterval);
  }
};

export const resetGame = () => {
  stopAllProcesses();

  const gameContainer = document.querySelector('.game-container');
  if (gameContainer) {
    gameContainer.innerHTML = '';
    gameContainer.removeAttribute('style');
  }
};
