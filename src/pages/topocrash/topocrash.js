import './topocrash.css';
import { updateCounter } from '../../components/counter/counter';
import { createModal } from '../../components/modal/modal';
import { resetGame } from '../../components/functions/resetGame';

export const initSpecificGame = () => {
  topoCounter = 0;
  const gameContainer = document.querySelector('.game-container');

  const scenario = document.createElement('img');
  scenario.classList.add('scenario-topocrash');
  scenario.src = './public/assets/topocrash/topo-crash-scenario.svg';
  scenario.alt = 'grass image';

  gameContainer.append(scenario);

  scenario.onload = startTopoGeneration;
};

let topoCounter = 0;
const maxTopos = 20;
export let topoInterval;

const startTopoGeneration = () => {
  topoInterval = setInterval(() => {
    if (topoCounter < maxTopos) {
      createTopo();
    } else {
      clearInterval(topoInterval);
      checkEndGameCondition();
    }
  }, 1000);
};

const createTopo = () => {
  const gameContainer = document.querySelector('.game-container');
  const scenario = document.querySelector('.scenario-topocrash');

  const imgTopo = document.createElement('img');
  imgTopo.classList.add('topo-img');
  imgTopo.src = './public/assets/topocrash/topo-crash.png';
  imgTopo.alt = 'Topo Image';
  gameContainer.append(imgTopo);

  const scenarioRect = scenario.getBoundingClientRect();
  const scenarioWidth = scenarioRect.width;
  const scenarioHeight = scenarioRect.height;
  const scenarioLeft = scenarioRect.left;
  const scenarioTop = scenarioRect.top;

  let leftPosition =
    scenarioLeft + Math.random() * (scenarioWidth - imgTopo.width);
  let topPosition =
    scenarioTop + Math.random() * (scenarioHeight - imgTopo.height);

  imgTopo.style.left = `${leftPosition}px`;
  imgTopo.style.top = `${topPosition}px`;

  imgTopo.addEventListener('click', () => {
    topoCrash(imgTopo);
  });

  topoCounter++;

  setTimeout(() => {
    if (imgTopo.parentNode) {
      imgTopo.remove();
      checkEndGameCondition();
    }
  }, 8000);
};

const topoCrash = (imgTopo) => {
  let currentPoints = parseInt(localStorage.getItem('points'), 10) || 0;
  currentPoints += 1;
  updateCounter(currentPoints);

  if (imgTopo.parentNode) {
    imgTopo.remove();
    checkEndGameCondition();
  }
};

const checkEndGameCondition = () => {
  const remainingTopos = document.querySelectorAll('.topo-img').length;
  if (remainingTopos === 0 && topoCounter >= maxTopos) {
    endGame();
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
