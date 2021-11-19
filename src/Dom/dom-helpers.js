function elementCreator(el, elClass, elID = null, attr = 'data-coord') {
  const element = document.createElement(`${el}`);
  element.classList.add(elClass);
  element.setAttribute(`${attr}`, elID);
  return element;
}

function populateBoard(...boards) {
  boards.forEach((board) => {
    for (let i = 0; i < 100; i += 1) {
      board.appendChild(elementCreator('div', 'box', i));
    }
  });
}

function enableBoard(boardName) {
  const board = document.querySelector(`board-${boardName}`);
  board.classList.remove('board-active');
}
function disableBoard(boardName) {
  const board = document.querySelector(`board-${boardName}`);
  board.classList.add('board-active');
}

function colorCell(cell, hitOrNot) {
  if (hitOrNot) {
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
}

function sunkShip(receivingPlayer, target, status = false) {
  const element = document.querySelector(`.${receivingPlayer}-${target}`);
  if (status === true) {
    element.classList.add('ship-sunk');
  } else {
    element.classList.remove('ship-sunk');
  }
}

function initializeGameDOM() {
  const heroDiv = document.querySelector('.hero-intro');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  heroDiv.classList.add('hero-intro-inactive');
  header.classList.add('header-active');
  main.classList.add('main-active');
}

function handleStatus(targetParent, target1, status1, target2 = target1, status2 = status1) {
  const parentElement = document.querySelector(`.${targetParent}`);
  document.querySelector(`.${target1}`).textContent = `${status1}`;
  document.querySelector(`.${target2}`).textContent = `${status2}`;
  if (!parentElement.classList.contains('err-active')) parentElement.classList.add('err-active');
}

function generateDomShip(name, orientation, len, id) {
  if (orientation === 'horizontal') {
    for (let i = id; i < id + len; i += 1) {
      const nextPoint = document.querySelector(`.board-you [data-coord='${i}']`);
      nextPoint.classList.add('ship');
      nextPoint.classList.add(`ship-${name}`);
    }
  }
  if (orientation === 'vertical') {
    for (let i = id; i < id + len * 10; i += 10) {
      const nextPoint = document.querySelector(`.board-you [data-coord='${i}']`);
      nextPoint.classList.add('ship');
      nextPoint.classList.add(`ship-${name}`);
    }
  }
}

export {
  elementCreator,
  populateBoard,
  enableBoard,
  disableBoard,
  initializeGameDOM,
  sunkShip,
  colorCell,
  handleStatus,
  generateDomShip,
};
