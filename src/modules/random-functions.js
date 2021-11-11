import _ from 'lodash';

// checking computer-generated coordinates
function isValid(coordinates) {
  const borderValues = [..._.range(0, 100, 10), ..._.range(9, 109, 10)];
  const acceptedValues = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const coordinate of coordinates) {
    const div = document.querySelector(`#${coordinate}`);
    if (!div) return false;
    if (div.classList.contains('ship')) return false;
    const id = parseInt(div.id.slice(1));

    if (borderValues.indexOf(id) >= 0) {
      acceptedValues.push(id);
    }
    if (acceptedValues.length > 1) return false;

    const adjacentPrevCell = document.querySelector(`#${coordinate - 1}`);
    const adjacentTopCell = document.querySelector(`#${coordinate + 10}`);
    const adjacentBottomCell = document.querySelector(`#${coordinate - 10}`);
    const adjacentNextCell = document.querySelector(`#${coordinate + 1}`);

    if (adjacentPrevCell) {
      if (adjacentPrevCell.classList.contains('ship-part')) return false;
    }

    if (adjacentTopCell) {
      if (adjacentTopCell.classList.contains('ship-part')) return false;
    }

    if (adjacentBottomCell) {
      if (adjacentBottomCell.classList.contains('ship-part')) return false;
    }

    if (adjacentNextCell) {
      if (adjacentNextCell.classList.contains('ship-part')) return false;
    }
  }
  return true;
}

function generateDirection() {
  const directions = [true, false];
  const choice = _.random(0, 1);
  return directions[choice];
}

function generateRandCoordinates(direction, boxID, shipLength) {
  let coord = _.random(0, 1) * boxID;
  const coordsArray = [];

  if (direction) {
    for (let i = 0; i < shipLength; i += 1) {
      coordsArray.push(coord);
      coord += 1;
    }
  } else {
    for (let i = 0; i < shipLength; i += 1) {
      coordsArray.push(coord);
      coord += 10;
    }
  }
  return coordsArray;
}

function generateRandomTile(player) {
  const remainingTiles = player.remainingTiles();
  const remainingTilesLength = remainingTiles.length;
  const randomTile = _.random(0, 1) * remainingTilesLength;
  const selectedDiv = remainingTiles[randomTile];
  const DivID = selectedDiv.id;
  return DivID;
}

function generateValidCoords(length) {
  let direction = generateDirection();
  let boxID;
  //   for horizontal coords
  if (direction && length === 2) boxID = 99;
  if (direction && length === 3) boxID = 98;
  if (direction && length === 4) boxID = 97;
  if (direction && length === 5) boxID = 96;
  //   for vertical
  if (!direction && length === 2) boxID = 89;
  if (!direction && length === 3) boxID = 79;
  if (!direction && length === 4) boxID = 69;
  if (!direction && length === 5) boxID = 59;

  let coordinates = generateRandCoordinates(direction, boxID, length);
  let valid = isValid(coordinates, direction);
  if (valid) return coordinates;

  do {
    direction = generateDirection();
    coordinates = generateRandCoordinates(direction, boxID, length);
    valid = isValid(coordinates, direction);
  } while (!valid);
  return coordinates;
}
