import _ from 'lodash';

// maps the inner part of the board, to locate the enemy ship based on a direction hypothesis
function findValidXY(cellID, direction = 'vertical') {
  const topConstraints = _.range(1, 9);
  const bottomConstraints = _.range(91, 99);
  const rightConstraints = _.range(19, 99, 10);
  const leftConstraints = _.range(10, 90, 10);
  let validOptions = [];
  let constraints;
  if (direction === 'horizontal') {
    constraints = [0, 9, 90, 99, ...leftConstraints, ...rightConstraints];
    switch (true) {
      case constraints.includes(cellID):
        validOptions = 'nope';
        break;
      case topConstraints.includes(cellID):
      case bottomConstraints.includes(cellID):
      default:
        validOptions = [cellID - 1, cellID + 1];
        break;
    }
  } else if (direction === 'vertical') {
    constraints = [0, 9, 90, 99, ...topConstraints, ...bottomConstraints];
    switch (true) {
      case constraints.includes(cellID):
        validOptions = 'nope';
        break;
      case leftConstraints.includes(cellID):
      case rightConstraints.includes(cellID):
      default:
        validOptions = [cellID - 10, cellID + 10];
        break;
    }
  } else if (direction === 'unavailable') {
    switch (true) {
      case cellID === 0:
        validOptions = [cellID + 1, cellID + 10];
        break;
      case cellID === 9:
        validOptions = [cellID - 1, cellID + 10];
        break;
      case cellID === 90:
        validOptions = [cellID + 1, cellID - 10];
        break;
      case cellID === 99:
        validOptions = [cellID - 1, cellID - 10];
        break;
      case leftConstraints.includes(cellID):
        validOptions = [cellID + 1, cellID - 10, cellID + 10];
        break;
      case rightConstraints.includes(cellID):
        validOptions = [cellID - 1, cellID - 10, cellID + 10];
        break;
      case topConstraints.includes(cellID):
        validOptions = [cellID - 1, cellID + 1, cellID + 10];
        break;
      case bottomConstraints.includes(cellID):
        validOptions = [cellID - 1, cellID + 1, cellID - 10];
        break;
      default:
        validOptions = [cellID - 1, cellID + 1, cellID - 10, cellID + 10];
        break;
    }
  }
  return validOptions;
}

function filterAttackedCells(valid, attacked) {
  return valid.filter((cell) => !attacked.includes(cell));
}

function findEnemyDirection(successfulHits) {
  return Math.abs(successfulHits[0] - successfulHits[1]) > 1 ? 'vertical' : 'horizontal';
}

export { findValidXY, findEnemyDirection, filterAttackedCells };
