import Player from '../modules/Player.js';
import Ship from '../modules/Ship.js';

let newPlayer;
let ai;

describe('testing the Player class', () => {
  beforeEach(() => {
    newPlayer = new Player();
    ai = new Player();
  });

  it('testing fleet', () => {
    newPlayer.createFleet();
    expect(newPlayer.fleet.length).toBe(5);
  });

  it('testing fleet ships', () => {
    newPlayer.createFleet();
    expect(newPlayer.fleet[0].name).toBe('patrol');
  });

  it('random placement test', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    expect(newPlayer.board.getCurrentShipsOnBoard.length).toBe(5);
  });

  it('random placement test - length check', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    const orientationArray = [];
    newPlayer.board.getCurrentShipsOnBoard.forEach((ship) =>
      orientationArray.push(ship.getOrientation)
    );
    expect(orientationArray.length).toBe(5);
  });

  it('testing attack', () => {
    const carrier = new Ship('carrier', 3);
    ai.board.placeShip(5, carrier);
    newPlayer.attack(ai.board, 5);
    expect(ai.board.attackedCoords[0]).toBe(5);
  });

  it('fleet reset - testing shot damage reset', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    newPlayer.fleet[0].hit(5);
    newPlayer.fleetReset();
    expect(newPlayer.fleet[0].getHits.length).toBe(0);
  });

  it('fleet reset - testing position reset', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    newPlayer.fleetReset();
    expect(newPlayer.fleet[0].getPosition.length).toBe(0);
  });

  it('fleet reset - testing orientation reset', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    newPlayer.fleet[0].setOrientation = 'horizontal';
    newPlayer.fleetReset();
    expect(newPlayer.fleet[0].getOrientation).toBe('vertical');
  });
});
