import Player from '../modules/Player.js';

const player = new Player('You');

describe('testing the Player class', () => {
  afterEach(() => {});

  it('testing the constructor / createFleet', () => {
    expect(player.name).toBe('you');
    expect(player.board.area.length).toBe(100);
    expect(player.ships.length).toBe(5);
  });

  it('testing placeAIFleet', () => {
    player.placeAIFleet();
    expect(player.board.currentShips.length).toBe(5);
  });

  it('testing resetShips', () => {
    player.resetShips();
    player.board.currentShips.forEach((ship) => {
      expect(ship.position.length).toBe(0);
    });
  });

  it('testing attack', () => {
    const ai = new Player('AI');
    ai.board.reset();
    player.attack(ai.board, 29);
    expect(ai.board.missedShots.length).toBe(1);
  });

  it('testing if all ships are placed - valid', () => {
    player.placeAIFleet();
    expect(player.areShipsPlaced()).toBe(true);
  });

  it('testing if all ships are placed - invalid - resetting each ship', () => {
    player.ships.forEach((ship) => ship.reset());
    expect(player.areShipsPlaced()).toBe(false);
  });
});
