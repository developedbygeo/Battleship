export default class Ship {
  constructor(name, length) {
    this.shipName = name;
    this.length = length;
    this.receivedHits = 0;
  }

  pieces() {
    let count = 0;
    const shipPieces = [];
    for (let i = 0; i < this.length; i += 1) {
      shipPieces.push(`${this.shipName}${count}`);
      count += 1;
    }
    return shipPieces;
  }

  receiveAttack() {
    this.receivedHits += 1;
  }

  isSunk() {
    return this.receivedHits === this.length;
  }
}
