/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';

export default class Player {
  constructor(name) {
    this.name = name.toLowerCase();
    this.board = new Gameboard();
    this.ships = this.generateShips();
  }

  getDomBoard() {
    return document.querySelector(`.board-${this.name}`);
  }

  disableDomBoard() {
    this.getDomBoard().classList.add('board-inactive');
  }

  enableDomBoard() {
    this.getDomBoard().classList.remove('board-inactive');
  }

  generateShips() {
    const carrier = new Ship('carrier', 5);
    const battleship = new Ship('battleship', 4);
    const cruiser1 = new Ship('cruiser1', 3);
    const cruiser2 = new Ship('cruiser2', 3);
    const patrol = new Ship('patrol', 2);
    return [carrier, battleship, cruiser1, cruiser2, patrol];
  }

  positionAiShips() {
    const possibleOrientations = ['vertical', 'horizontal'];
    for (let i = 0; i < 5; i += 1) {
      const shipToBePlaced = this.ships[i];
      // randomly generating ship orientation
      const randomOrientation = possibleOrientations[_.random(0, 1)];
      shipToBePlaced.orientation = randomOrientation;
      // randomly generating coords and checking whether the position's valid
      let coord = _.random(0, 100);
      while (!this.board.isPositionValid(coord, shipToBePlaced.length, randomOrientation, false)) {
        coord = _.random(0, 100);
      }
      this.board.placeShip(coord, shipToBePlaced);
    }
  }

  resetShips() {
    this.ships.forEach((ship) => ship.reset());
  }

  attack(enemyBoard, coord) {
    enemyBoard.handleAttack(coord);
  }

  areShipsPlaced() {
    for (let i = 0; i < this.ships.length; i += 1) {
      if (this.ships[i].position.length === 0) {
        return false;
      }
    }
    return true;
  }
}
