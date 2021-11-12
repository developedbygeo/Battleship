/* eslint-disable class-methods-use-this */
import Ship from './Ship.js';

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = document.querySelector(`.${this.name.toLowerCase()}-board`);
    this.fleet = [];
    this.dragDirection = { horizontal: true };
  }

  changeDirection() {
    if (this.dragDirection === { horizontal: true }) {
      this.dragDirection = { horizontal: false };
    } else {
      this.dragDirection = { horizontal: true };
    }
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
    return [...this.playerBoard.querySelectorAll('.box')];
  }

  checkHit(coord, enemy) {
    let tile;
    if (enemy === 'player') {
      tile = document.querySelector(`.you-board #${coord}`);
    } else {
      tile = document.querySelector(`.ai-board #${coord}`);
    }
    if (tile.classList.contains('ship')) return true;
    return false;
  }
}
