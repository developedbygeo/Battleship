import _ from 'lodash';
import calculateShipPosition from './helpers.js';

export default class Gameboard {
  #width;

  #area;

  #currentShips;

  constructor() {
    this.#width = 10;
    this.area = _.range(0, this.#width ** 2).sort((a, b) => a - b);
    this.missedAttacks = [];
    this.#currentShips = [];
    this.attackedCoords = [];
  }

  set setCurrentShips(ship) {
    this.#currentShips.push(ship);
  }

  get getCurrentShipsOnBoard() {
    return this.#currentShips;
  }

  #remainingCells() {
    this.area.filter((cell) => !this.attackedCoords.includes(cell));
  }

  isPositionValid(
    originalCoords,
    shipLength,
    shipOrientation,
    rotated = false
  ) {
    let isValid = true;
    const currentPositions = [];
    this.getCurrentShipsOnBoard.forEach((ship) =>
      currentPositions.push(ship.position)
    );
    const shipPosition = calculateShipPosition(
      originalCoords,
      shipLength,
      shipOrientation
    );
    // checks whether ship is on the edge of the board, applicable to both directions
    if (
      shipPosition[shipLength - 1] >= 100 ||
      shipPosition[shipLength - 1] % 10 < originalCoords % 10
    ) {
      return false;
    }
    // checks taken positions against expected ones. When the ship is rotated, excludes any originalCoord overlap
    if (rotated) {
      isValid = !currentPositions
        .flat()
        .some((position) => shipPosition.slice(1).includes(position));
    } else {
      isValid = !currentPositions
        .flat()
        .some((position) => shipPosition.slice(0).includes(position));
    }
    return isValid;
  }

  placeShip(originalCoord, ship) {
    if (!this.isPositionValid(originalCoord, ship.length, ship.orientation)) {
      return false;
    }
    if (!this.#currentShips.some((ships) => ships === ship)) {
      this.setCurrentShips(ship);
    }
    const position = ship.setPosition(originalCoord, ship.orientation);
    return position;
  }
}
