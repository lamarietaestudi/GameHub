import './modal.css';
import { createCardGames } from '../gamecards/gamecards.js';
import { loadIdGame } from '../functions/loadIdGame.js';

export const createModal = () => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalMessage = document.createElement('p');
  modalMessage.classList.add('modal-message');
  modalMessage.textContent = 'Juego finalizado. ¿Quieres jugar de nuevo?';

  const playButton = document.createElement('button');
  playButton.classList.add('modal-button');
  playButton.textContent = 'Sí';
  playButton.addEventListener('click', () => {
    closeModal(modalContainer);
    const currentGameId = localStorage.getItem('currentGameId');
    if (currentGameId) {
      loadIdGame(parseInt(currentGameId, 10));
    }
  });

  const closeButton = document.createElement('button');
  closeButton.classList.add('modal-button');
  closeButton.textContent = 'No';
  closeButton.addEventListener('click', () => {
    closeModal(modalContainer);
    resetGame();
    const gamesContainer = document.querySelector('.games-container');
    gamesContainer.classList.remove('init-game-container');
    gamesContainer.innerHTML = '';
    createCardGames(gamesContainer);
    localStorage.removeItem('currentGameId');
  });

  modalContent.append(modalMessage, playButton, closeButton);
  modalContainer.append(modalContent);

  document.body.append(modalContainer);

  return { playButton, closeButton, modalContainer };
};

const resetGame = () => {
  const gameContainer = document.querySelector('.game-container');
  if (gameContainer) {
    gameContainer.innerHTML = '';
  }
};

const closeModal = (modal) => {
  document.body.removeChild(modal);
};
