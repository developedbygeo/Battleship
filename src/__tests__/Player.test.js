import Player from '../modules/Player.js';

let newPlayer;

describe('testing the Player class', () => {
  beforeEach(() => {
    newPlayer = new Player();
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

  it('random placement test - direction horizontal', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    const orientationArray = [];
    newPlayer.board.getCurrentShipsOnBoard.forEach((ship) =>
      orientationArray.push(ship.getOrientation)
    );
    expect(orientationArray).toContain('horizontal');
  });

  it('random placement test - direction vertical', () => {
    newPlayer.createFleet();
    newPlayer.randomPlacement();
    const orientationArray = [];
    newPlayer.board.getCurrentShipsOnBoard.forEach((ship) =>
      orientationArray.push(ship.getOrientation)
    );
    expect(orientationArray).toContain('vertical');
  });
});
