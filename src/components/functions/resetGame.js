export const resetGame = () => {
  const gameContainer = document.querySelector('.game-container');
  if (gameContainer) {
    gameContainer.innerHTML = '';
    gameContainer.removeAttribute('style');
  }
};
