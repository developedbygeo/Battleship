import _ from 'lodash';
import determinePosition from './helpers.js';

export default class Gameboard {
  constructor() {
    this.width = 10;
    this.area = _.range(0, this.width ** 2);
    this.missedShots = [];
    this.currentShips = [];
    this.attackedCoords = [];
  }

  remainingUnoccupiedCells() {
    return this.area.filter((cell) => !this.attackedCoords.includes(cell));
  }

  missedAttacks = () => this.missedShots;

  existingShips = () => this.currentShips;

  attackedCoordinates = () => this.attackedCoords;

  setCurrentShips = (ship) => this.currentShips.push(ship);

  isPositionValid(coord, shipLength, shipOrientation, rotated = false) {
    let isValid = true;
    const shipPosition = determinePosition(coord, shipLength, shipOrientation);
    if (shipPosition[shipLength - 1] >= 100 || shipPosition[shipLength - 1] % 10 < coord % 10) {
      return false;
    }
    const currentPositions = [];
    this.existingShips().forEach((ship) => currentPositions.push(ship.position));

    // compares existing positions with the expected position of the ship
    isValid =
      rotated === true
        ? !currentPositions.flat().some((position) => shipPosition.slice(1).includes(position))
        : !currentPositions.flat().some((position) => shipPosition.slice(0).includes(position));
    return isValid;
  }

  placeShip(coord, ship) {
    if (!this.isPositionValid(coord, ship.length, ship.orientation)) {
      throw new Error('Position is invalid');
    }
    if (!this.currentShips.some((ships) => ships === ship)) {
      this.currentShips.push(ship);
    }
    ship.setPosition(ship.position[0], 'horizontal');
  }

  rotateShip(ship) {
    if (ship.orientation === 'vertical') {
      if (!this.isPositionValid(ship.position[0], ship.length, 'horizontal', true)) {
        throw new Error('Invalid placement');
      } else {
        ship.setPosition(ship.position[0], 'horizontal');
        ship.orientation = 'horizontal';
      }
    }
    if (!this.isPositionValid(ship.position[0], ship.length, 'vertical', true)) {
      throw new Error('Invalid placement');
    } else {
      ship.setPosition(ship.position[0], 'vertical');
      ship.orientation = 'vertical';
    }
  }

  handleAttack(coord) {
    const result = [];
    const ships = this.existingShips();
    if (this.attackedCoords.includes(coord)) {
      throw new Error('Coordinate has already been attacked');
    }
    ships.forEach((ship) => {
      if (ship.position.includes(coord)) {
        ship.hit(coord);
        result.push(ship);
        this.attackedCoords.push(coord);
        return result;
      }
    });
    this.attackedCoords.push(coord);
    this.missedShots.push(coord);
    return result;
  }

  remainingShips = () => this.existingShips().filter((ship) => !ship.hasShipSunk()).length;

  reset() {
    this.missedShots.length = 0;
    this.currentShips.length = 0;
    this.attackedCoords.length = 0;
  }
}
