import _ from 'lodash';

const topMidRow = _.range(1, 9);
const bottomMidRow = _.range(91, 99);
const rightMidCol = _.range(19, 99, 10);
const leftMidCol = _.range(10, 90, 10);

// maps the inner part of the board, to locate the enemy ship
function findValid(cell) {
  let validArray = [];
  switch (true) {
    case cell === 0:
      validArray = [cell + 1, cell + 10];
      break;
    case cell === 9:
      validArray = [cell - 1, cell + 10];
      break;
    case cell === 90:
      validArray = [cell + 1, cell - 10];
      break;
    case cell === 99:
      validArray = [cell - 1, cell - 10];
      break;
    case leftMidCol.includes(cell):
      validArray = [cell + 1, cell - 10, cell + 10];
      break;
    case rightMidCol.includes(cell):
      validArray = [cell - 1, cell - 10, cell + 10];
      break;
    case topMidRow.includes(cell):
      validArray = [cell - 1, cell + 1, cell + 10];
      break;
    case bottomMidRow.includes(cell):
      validArray = [cell - 1, cell + 1, cell - 10];
      break;
    default:
      validArray = [cell - 1, cell + 1, cell - 10, cell + 10];
      break;
  }
  return validArray;
}

function findValidHorizontal(cell) {
  let validArray = [];
  switch (true) {
    case cell === 0:
    case cell === 9:
    case cell === 90:
    case cell === 99:
    case leftMidCol.includes(cell):
    case rightMidCol.includes(cell):
      validArray = 'nope';
      break;
    case topMidRow.includes(cell):
    case bottomMidRow.includes(cell):
      validArray = [cell - 1, cell + 1];
      break;
    default:
      validArray = [cell - 1, cell + 1];
  }
  return validArray;
}

function findValidVertical(cell) {
  let validArray = [];
  switch (true) {
    case cell === 0:
    case cell === 9:
    case cell === 90:
    case cell === 99:
    case topMidRow.includes(cell):
    case bottomMidRow.includes(cell):
      validArray = 'nope';
      break;
    case leftMidCol.includes(cell):
    case rightMidCol.includes(cell):
    default:
      validArray = [cell - 10, cell + 10];
      break;
  }
  return validArray;
}

function findEnemyDirection(successfulHits) {
  if (Math.abs(successfulHits[0] - successfulHits[1]) > 1) {
    return 'vertical';
  }
  return 'horizontal';
}

export {
  findValid,
  findValidHorizontal,
  findValidVertical,
  findEnemyDirection,
};
