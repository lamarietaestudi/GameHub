import './header.css';
import { createCounter, clearCounter } from '../counter/counter';

export const createHeader = () => {
  const headerContainer = document.createElement('header');
  const headerContent = document.createElement('div');
  const headerInfo = document.createElement('h1');

  headerContainer.classList.add('header-container');
  headerContent.classList.add('header-content');
  headerInfo.classList.add('header-info');

  headerInfo.textContent = 'Game Hub';

  const clearButton = document.createElement('button');
  clearButton.classList.add('clear-button');
  clearButton.textContent = 'Reiniciar puntos';
  clearButton.addEventListener('click', () => {
    clearCounter();
  });

  const counter = createCounter();

  headerContent.append(headerInfo, counter, clearButton);
  headerContainer.append(headerContent);
  document.body.append(headerContainer);
};
