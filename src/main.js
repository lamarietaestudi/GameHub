import './style.css';
import { createFooter } from './components/footer/footer.js';
import { createHeader } from './components/header/header.js';
import { createCardGames } from './components/gamecards/gamecards.js';

createHeader();

function createGamesContainer() {
  const gamesContainer = document.createElement('body');
  gamesContainer.classList.add('games-container');

  const gamesContent = document.createElement('div');
  gamesContent.classList.add('games-content');

  createCardGames(gamesContent);

  gamesContainer.append(gamesContent);
  document.body.append(gamesContainer);
}

createGamesContainer();

createFooter();
