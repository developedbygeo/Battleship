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

const humanPlayerAction = (e, player) =>
  new Promise((resolve) => {
    const successfulHit = player.board.shotsFired(parseInt(e.target.id));
    if (successfulHit.length === 0) {
      colorCell(e.target, false);
    } else {
      colorCell(e.target, true);
      if (successfulHit[0].isSunk()) {
        const sunkShip = successfulHit[0].name;
        const shipIconDOM = document.querySelector(`.${sunkShip}`);
        shipIconDOM.classList.add('ship-sunk');
      }
    }
    resolve();
  });

export { enableBoard, disableBoard, humanPlayerAction };
