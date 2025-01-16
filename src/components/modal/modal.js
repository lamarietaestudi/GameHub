import './modal.css';

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

  const closeButton = document.createElement('button');
  closeButton.classList.add('modal-button');
  closeButton.textContent = 'No';

  modalContent.append(modalMessage, playButton, closeButton);
  modalContainer.append(modalContent);

  document.body.append(modalContainer);

  return { playButton, closeButton, modalContainer }; // Return elements to add event listeners externally
};

export const closeModal = (modal) => {
  document.body.removeChild(modal);
};
