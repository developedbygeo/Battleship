import Player from '../modules/Player.js';

const player = new Player('You');

document.body.innerHTML = `<div>
<div class='board-you'></div>
</div>`;

describe('testing the Player class', () => {
  afterEach(() => {});

  it('testing the constructor / createFleet', () => {
    expect(player.name).toBe('you');
    expect(player.board.area.length).toBe(100);
    expect(player.ships.length).toBe(5);
  });

  it('testing the getDomBoard method', () => {
    const board = player.getDomBoard();
    expect(board).toBeDefined();
  });

  it('testing the disableDomBoard method', () => {
    player.disableDomBoard();
    const container = player.getDomBoard();
    expect(container.classList.contains('board-inactive')).toBe(true);
  });

  it('testing the enableDomBoard method', () => {
    player.enableDomBoard();
    const container = player.getDomBoard();
    expect(container.classList.contains('board-inactive')).toBe(false);
  });

  it('testing positionAiShips', () => {
    player.positionAiShips();
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
    player.positionAiShips();
    expect(player.areShipsPlaced()).toBe(true);
  });

  it('testing if all ships are placed - invalid - resetting each ship', () => {
    player.ships.forEach((ship) => ship.reset());
    expect(player.areShipsPlaced()).toBe(false);
  });
});
