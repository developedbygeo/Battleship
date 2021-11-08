import _ from 'lodash';
import calculateShipPosition from './helpers.js';

export default class Gameboard {
  #width;

  #currentShips;

  constructor() {
    this.#width = 10;
    this.area = _.range(0, this.#width ** 2).sort((a, b) => a - b);
    this.missedShots = [];
    this.#currentShips = [];
    this.attackedCoords = [];
  }

  setCurrentShips(ship) {
    this.#currentShips.push(ship);
  }

  get getCurrentShipsOnBoard() {
    return this.#currentShips;
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
      currentPositions.push(ship.getPosition)
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
    if (
      !this.isPositionValid(originalCoord, ship.length, ship.getOrientation)
    ) {
      return false;
    }
    if (!this.#currentShips.some((ships) => ships === ship)) {
      this.setCurrentShips(ship);
    }
    ship.position(originalCoord, ship.getOrientation);
  }

  rotateShip(ship) {
    if (ship.getOrientation === 'vertical') {
      if (
        !this.isPositionValid(
          ship.getPosition[0],
          ship.length,
          'horizontal',
          true
        )
      ) {
        throw new Error('Invalid positioning');
      } else {
        ship.position(ship.getPosition[0], 'vertical');
        ship.orientation = 'vertical';
      }
    }
  }
  // checks whether the fired shot hits and registers it accordingly

  shotFired(coord) {
    const existingShips = this.getCurrentShipsOnBoard;
    const shotResult = [];
    if (this.attackedCoords.includes(coord)) {
      throw new Error('A shot has already been fired here!');
    }
    existingShips.forEach((ship) => {
      if (ship.getPosition.includes(coord)) {
        ship.hit(coord);
        shotResult.push(ship);
        this.attackedCoords.push(coord);
        return shotResult;
      }
    });
    this.attackedCoords.push(coord);
    this.missedShots.push(coord);
    return shotResult;
  }

  shipsAlive() {
    let aliveShips = 0;
    this.getCurrentShipsOnBoard.forEach((ship) => {
      if (!ship.isSunk()) {
        aliveShips += 1;
      }
    });
    return aliveShips;
  }

  remainingCells(valid = undefined) {
    if (valid) {
      return valid.filter((cell) => !this.attackedCoords.includes(cell));
    }
    return this.area.filter((cell) => !this.attackedCoords.includes(cell));
  }

  hardReset() {
    this.missedShots.length = 0;
    this.#currentShips.length = 0;
    this.attackedCoords.length = 0;
  }
}
