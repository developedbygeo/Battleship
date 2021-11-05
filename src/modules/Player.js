import _ from 'lodash';
import Gameboard from './Gameboard.js';
import Ship from './Ship.js';

export default class Player {
  constructor(name) {
    this.name = name;
    this.fleet = [];
    this.board = new Gameboard();
  }

  createFleet() {
    const patrol = new Ship('patrol', 2);
    const cruiser1 = new Ship('cruiser1', 3);
    const cruiser2 = new Ship('cruiser2', 3);
    const battleship = new Ship('battleship', 4);
    const carrier = new Ship('carrier', 5);
    this.fleet = [patrol, cruiser1, cruiser2, battleship, carrier];
    return [patrol, cruiser1, cruiser2, battleship, carrier];
  }

  randomPlacement() {
    const direction = ['vertical', 'horizontal'];
    this.fleet.forEach((ship) => {
      // specifies whether vertical or horizontal
      const shipDirection = direction[_.random(0, 1)];
      ship.orientation = shipDirection;
      // random coord generator - checks if its valid
      let randomCoord = _.random(0, 99);
      while (
        !this.board.isPositionValid(
          randomCoord,
          ship.length,
          shipDirection,
          false
        )
      ) {
        randomCoord = _.random(0, 99);
      }
      this.board.placeShip(randomCoord, ship);
    });
  }
}
