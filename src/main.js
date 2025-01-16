import './style.css';
import { createFooter } from './components/footer/footer.js';
import { createHeader } from './components/header/header.js';
import { createCardGames } from './components/gamecards/gamecards.js';
import { loadIdGame } from './components/functions/loadIdGame.js';

createHeader();

export function createGamesContainer() {
  let gamesContainer = document.querySelector('.games-container');
  if (!gamesContainer) {
    gamesContainer = document.createElement('div');
    gamesContainer.classList.add('games-container');
    document.body.append(gamesContainer);
  }
  return gamesContainer;
}

document.addEventListener('DOMContentLoaded', () => {
  const gamesContainer = createGamesContainer();
  const currentGameId = localStorage.getItem('currentGameId');

  if (currentGameId) {
    loadIdGame(parseInt(currentGameId, 10));
  } else {
    createCardGames(gamesContainer);
  }
  createFooter();
});
