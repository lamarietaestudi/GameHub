import './memory.css';
import { updateCounter } from '../../components/counter/counter';
import { memoryCards } from '../../data/memoryData';
import { createModal } from '../../components/modal/modal';
import { resetGame } from '../../components/functions/resetGame';

const gameName = 'Memory Card';

let selectedCards = [];
let matchedCards = 0;

export const initSpecificGame = () => {
  const gameContainer = document.querySelector('.game-container');

  const scenario = document.createElement('div');
  scenario.classList.add('scenario-memory');

  gameContainer.append(scenario);

  const displayCards = memoryCards.sort(() => Math.random() - Math.random());

  displayCards.forEach((card) => {
    const singleCard = createSingleCard(card);
    scenario.append(singleCard);
  });

  startMemoryGame();
};

const createSingleCard = (card) => {
  const singleCard = document.createElement('div');
  singleCard.classList.add('single-card', 'covered');
  singleCard.dataset.emotion = card.emotion;
  singleCard.dataset.id = card.id;

  const cardCovered = document.createElement('div');
  cardCovered.classList.add('card-back');
  cardCovered.textContent = '❔';

  const cardDiscovered = document.createElement('div');
  cardDiscovered.classList.add('card-front');
  cardDiscovered.textContent = card.emoji;

  singleCard.append(cardCovered, cardDiscovered);
  return singleCard;
};

const startMemoryGame = () => {
  const allCards = document.querySelectorAll('.single-card');
  allCards.forEach((card) => {
    card.addEventListener('click', () => {
      if (
        selectedCards.length < 2 &&
        !card.classList.contains('discovered') &&
        !card.classList.contains('matched')
      ) {
        card.classList.remove('covered');
        card.classList.add('discovered');
        selectedCards.push(card);
        if (selectedCards.length === 2) {
          setTimeout(checkForMatch, 2000);
        }
      }
    });
  });
};

const checkForMatch = () => {
  const [card1, card2] = selectedCards;
  if (card1.dataset.emotion === card2.dataset.emotion) {
    matchedCards++;

    let currentPoints =
      parseInt(localStorage.getItem(`points_${gameName}`), 10) || 0;

    currentPoints += 1;
    localStorage.setItem(`points_${gameName}`, currentPoints);
    updateCounter(gameName, currentPoints);

    card1.classList.add('matched');
    card2.classList.add('matched');
    selectedCards = [];
    if (matchedCards === memoryCards.length / 2) {
      setTimeout(endGame, 1500);
    }
  } else {
    card1.classList.remove('discovered');
    card1.classList.add('covered');
    card2.classList.remove('discovered');
    card2.classList.add('covered');
    selectedCards = [];
  }
};

const endGame = () => {
  resetGame();
  const existingModal = document.querySelector('.modal-container');
  if (existingModal) {
    existingModal.remove();
  }
  createModal();
};

document.addEventListener('DOMContentLoaded', initSpecificGame);
