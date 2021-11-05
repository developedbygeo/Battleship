import calculateShipPosition from './helpers';

export default class Ship {
  #orientation;

  #length;

  #position;

  #hits;

  constructor(name, length) {
    this.name = name;
    this.#length = length;
    this.#position = [];
    this.#orientation = 'vertical';
    this.#hits = [];
  }

  get length() {
    return this.#length;
  }

  set orientation(newValue) {
    this.#orientation = newValue;
  }

  get getOrientation() {
    return this.#orientation;
  }

  position(coord, direction) {
    // resetting any existing data & filling it with new data
    this.#position = [];
    calculateShipPosition(coord, this.#length, direction).forEach(
      (coordinate) => this.#position.push(coordinate)
    );
  }

  get getPosition() {
    return this.#position;
  }

  hit(coord) {
    this.#hits.push(coord);
  }

  get getHits() {
    return this.#hits;
  }

  isSunk() {
    return Number(this.getHits.length) === Number(this.length);
  }

  resetHits() {
    this.#hits.length = 0;
  }

  hardReset() {
    this.#position.length = 0;
    this.#orientation = 'vertical';
    this.#hits.length = 0;
  }
}
