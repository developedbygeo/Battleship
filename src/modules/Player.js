/* eslint-disable class-methods-use-this */

import Ship from './Ship.js';

export default class Player {
  constructor(name, myBoard, enemyBoard) {
    this.name = name;
    this.myBoard = document.querySelector('.board-you');
    this.enemyBoard = document.querySelector('.board-ai');
    this.fleet = [];
  }

  generateFleet() {
    const patrol = new Ship('patrol', 2);
    const cruiser1 = new Ship('cruiser1', 3);
    const cruiser2 = new Ship('cruiser2', 3);
    const battleship = new Ship('battleship', 4);
    const carrier = new Ship('carrier', 5);
    this.fleet = [patrol, cruiser1, cruiser2, battleship, carrier];
  }

  remainingTiles() {
    return [...this.myBoard.querySelectorAll('.box')];
  }

  checkHit(coord) {
    const tile = document.querySelector(`#${coord}`);
    if (tile.classList.contains('ship')) return true;
    return false;
  }
}
