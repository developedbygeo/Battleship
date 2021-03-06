import determinePosition from './helpers.js';

export default class Ship {
  constructor(name, length) {
    this.shipName = name;
    this.length = length;
    this.position = [];
    this.hits = [];
    this.orientation = 'vertical';
  }

  setPosition(startingCoordinate, orientation) {
    this.position.length = 0;
    determinePosition(startingCoordinate, this.length, orientation).forEach((coord) => this.position.push(coord));
  }

  hit(coord) {
    this.hits.push(coord);
  }

  hasShipSunk() {
    return this.hits.length === this.length;
  }

  reset() {
    this.position.length = 0;
    this.hits.length = 0;
    this.orientation = 'vertical';
  }
}
