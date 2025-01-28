import './tictactoe.css';
import { createModal } from '../../components/modal/modal.js';
import { updateCounter } from '../../components/counter/counter.js';
import { gamesData } from '../../data/gamesData.js';

let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

export const initSpecificGame = () => {
  const gameContainer = document.querySelector('.game-container');

  const scenario = document.createElement('div');
  scenario.classList.add('scenario');

  gameContainer.append(scenario);

  const boardItem = document.createElement('div');
  boardItem.classList.add('board-item');

  gameBoard.forEach((cell, index) => {
    const cellItem = createCellItem(index);
    boardItem.append(cellItem);
  });

  const ticTacToeResult = document.createElement('p');
  ticTacToeResult.classList.add('tictactoe-result');

  scenario.append(boardItem, ticTacToeResult);
  startGame();
};

const createCellItem = (index) => {
  const cellItem = document.createElement('div');
  cellItem.classList.add('cell-item');
  cellItem.dataset.index = index;
  cellItem.addEventListener('click', () => {
    cellClickEvent(cellItem);
  });
  return cellItem;
};

const cellClickEvent = (cellItem) => {
  const index = cellItem.dataset.index;
  if (gameBoard[index] !== '' || !gameActive) {
    return;
  }
  gameBoard[index] = currentPlayer;
  cellItem.textContent = currentPlayer;
  if (checkingWinner()) {
    gameActive = false;
    const ticTacToeResult = document.querySelector('.tictactoe-result');
    ticTacToeResult.textContent = `Gana Jugador ${
      currentPlayer === 'X' ? 1 : 2
    } con "${currentPlayer}"`;
  } else if (!gameBoard.includes('')) {
    gameActive = false;
    ticTacToeResult.textContent = 'Hay un empate.';
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

const checkingWinner = () => {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winningPositions.some((condition) => {
    const [first, second, third] = condition;
    return (
      gameBoard[first] &&
      gameBoard[first] === gameBoard[second] &&
      gameBoard[first] === gameBoard[third]
    );
  });
};

const startGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.querySelectorAll('.cell-item').forEach((cell) => {
    cell.textContent = '';
    const ticTacToeResult = document.querySelector('.tictactoe-result');
    ticTacToeResult.textContent = '';
  });
};

const endGame = () => {
  createModal();
};

document.addEventListener('DOMContentLoaded', initSpecificGame);
