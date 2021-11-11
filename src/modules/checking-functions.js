import _ from 'lodash';

function checkCoordsValid(coords, player) {
  const directions = player.dragDirections;

  coords.forEach((coord) => {
    if (coord < 0 || coord > 99) return false;
  });

  if (!directions.horizontal) return true;

  //   borders for horizontal placement
  const borderCells = [..._.range(0, 100, 10), ..._.range(9, 109, 10)];
  const validCoords = [];
  coords.forEach((coord) => {
    if (borderCells.indexOf(coord) >= 0) {
      validCoords.push(coord);
    }
    if (validCoords.length > 1) return false;
  });
  return true;
}

function checkOverlap(coords) {
  const overlapArray = [];
  coords.forEach((coord) => {
    const coordDiv = document.querySelector(`#${coord}`);
    if (!coordDiv) return false;
    if (coordDiv.classList.contains('ship')) {
      overlapArray.push('yes');
    }
  });
  if (overlapArray.length > 0) return true;
  return false;
}

function checkEmptyDiv(parent) {
  const children = parent.childElementCount;
  if (children < 1) return true;
  return false;
}
