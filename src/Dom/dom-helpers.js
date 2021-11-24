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
  if (cell === null) return;
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

function handleStatus(targetParent, target1, status1, target2 = target1, status2 = status1, state = 0) {
  const parentElement = document.querySelector(`.${targetParent}`);
  document.querySelector(`.${target1}`).textContent = `${status1}`;
  document.querySelector(`.${target2}`).textContent = `${status2}`;
  if (!parentElement.classList.contains('err-active')) parentElement.classList.add('err-active');
  if (state === 1) {
    setTimeout(() => {
      parentElement.classList.remove('err-active');
    }, 1000);
  }
}

function generateDomShip(name, orientation, len, selectedCoordinate, action = 'generate') {
  if (orientation === 'horizontal') {
    for (let i = selectedCoordinate; i < selectedCoordinate + len; i += 1) {
      const nextPoint = document.querySelector(`.board-you [data-coord='${i}']`);
      if (action !== 'generate') {
        nextPoint.classList.add('indicate-placement');
      } else {
        nextPoint.classList.add('ship');
        nextPoint.classList.add(`ship-${name}`);
      }
    }
  }
  if (orientation === 'vertical') {
    for (let i = selectedCoordinate; i < selectedCoordinate + len * 10; i += 10) {
      const nextPoint = document.querySelector(`.board-you [data-coord='${i}']`);
      nextPoint.classList.add('ship');
      nextPoint.classList.add(`ship-${name}`);
    }
  }
}

function markedPlacedShip(target) {
  target.classList.remove('placing-now');
  target.classList.add('ship-placed');
}

function unmarkPlacedShips(ships) {
  ships.forEach((ship) => ship.classList.remove('ship-placed'));
}

function rotateDomShips() {
  const description = document.querySelector('.current-orientation');
  const allDomShips = document.querySelectorAll('.player .ship-cont');
  allDomShips.forEach((ship) => {
    const currentOrientation = ship.dataset.orientation;
    if (currentOrientation === 'vertical') {
      ship.dataset.orientation = 'horizontal';
    } else {
      ship.dataset.orientation = 'vertical';
    }
    description.textContent = ship.dataset.orientation;
  });
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
  unmarkPlacedShips,
  markedPlacedShip,
  rotateDomShips,
};
