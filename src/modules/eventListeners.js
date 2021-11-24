import { populateBoard, initializeGameDOM } from '../Dom/dom-helpers.js';

import Game from './Game.js';

function hideError() {
  document.querySelector('.error-wrapper').classList.remove('err-active');
}

function restart() {
  window.location.reload();
}

export default function enableEventListeners() {
  const hideIntroBtn = document.querySelector('.play-now');
  const errBtn = document.querySelector('.remove-err');
  const restartBtn = document.querySelector('.play-again');

  errBtn.addEventListener('click', hideError);

  restartBtn.addEventListener('click', restart);

  hideIntroBtn.addEventListener('click', () => {
    const bothBoards = document.querySelectorAll('.board');
    initializeGameDOM();
    populateBoard(...bothBoards);
    const game = new Game();
    game.initializePlacement();
  });
}

export { enableEventListeners };
