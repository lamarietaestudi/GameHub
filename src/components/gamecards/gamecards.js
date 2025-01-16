import './gamecards.css';
import { gamesData } from '../../data/gamesData.js';
import { loadIdGame } from '../functions/loadIdGame.js';

export function createCardGames(parentElement) {
  const gamesList = gamesData;

  gamesList.forEach((game) => {
    const gameCardContainer = document.createElement('div');
    gameCardContainer.classList.add('game-card');

    const gameCard = document.createElement('button');
    gameCard.classList.add('game-card');
    gameCard.addEventListener('click', () => loadIdGame(game.id));

    const gameName = document.createElement('h2');
    gameName.classList.add('game-name');
    gameName.textContent = game.name;

    const gameImg = document.createElement('img');
    gameImg.classList.add('game-img');
    gameImg.src = game.image;

    gameCard.append(gameName, gameImg);
    gameCardContainer.append(gameCard);
    parentElement.append(gameCardContainer);
  });
}
