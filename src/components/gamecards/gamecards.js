import './gamecards.css';
import { gamesData } from '../../data/gamesData.js';
import { initGame } from '../../components/functions/initGame';

export function createCardGames(parentElement) {
  const gamesList = gamesData;

  gamesList.forEach((game) => {
    const gameCard = document.createElement('button');
    gameCard.classList.add('game-card');
    gameCard.addEventListener('click', initGame(game));
  });

  const gameName = document.createElement('h2');
  gameName.classList.add('game-name');
  gameName.textContent = game.name;

  const gameImg = document.createElement('img');
  gameImg.classList.add('game-img');
  gameImg.src = game.image;

  gameCard.append(gameName, gameImg);
  parentElement.append(gameCard);
}
