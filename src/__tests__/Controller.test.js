import Controller from '../modules/Controller.js';

let game = new Controller();

describe('testing the Controller class', () => {
  document.body.innerHTML = `
  <div>
      <div class='ai-patrol'></div>
      <div class='board-you'>
      </div>
      <div class='board-ai'>
      </div>
      <div class='error-wrapper'>
      <p class='error-title-header'></p>
      <p class='error-message-p'></p>
      </div>
  </div>`;

  afterEach(() => {
    game = new Controller();
    game.player1.enableDomBoard();
    game.player2.enableDomBoard();
  });

  it('testing the constructor', () => {
    expect(game.turn).toBe(0);
    expect(game.player1.name).toBe('you');
    expect(game.player2.name).toBe('ai');
    expect(game.players.length).toBe(2);
    expect(game.currentPlayer.name).toBe('you');
  });

  it('testing handleTurn, findActivePlayer and getCurrentPlayerTurn', () => {
    game.handleTurn();
    game.findActivePlayer();
    expect(game.currentPlayer.name).toBe('ai');
    expect(game.getCurrentPlayerTurn()).toBe(1);
  });

  it('testing handleTurn - turn 1', () => {
    game.turn = 1;
    game.handleTurn();
    expect(game.turn).toBe(0);
  });

  it('testing turnDefault and handleBoards - turn human', () => {
    game.turnDefault();
    game.handleBoards();
    expect(game.turn).toBe(0);
    expect(game.player1.getDomBoard().classList.contains('board-inactive')).toBe(true);
  });

  it('testing handleBoards - turn cpu', () => {
    game.turn = 1;
    game.handleBoards();
    expect(game.player2.getDomBoard().classList.contains('board-inactive')).toBe(true);
  });

  it('testing turnComplete', () => {
    game.turn = 0;
    game.turnComplete();
    expect(game.turn).toBe(1);
    expect(game.currentPlayer.name).toBe('ai');
    expect(game.player2.getDomBoard().classList.contains('board-inactive')).toBe(true);
  });

  it('testing isGAmeOver', () => {
    game.player2.generateShips();
    game.player2.positionAiShips();
    expect(game.isGameOver(game.player2)).toBe(false);
  });

  it('testing gameOver', () => {
    game.gameOver();
    expect(game.player1.getDomBoard().classList.contains('board-inactive')).toBe(true);
    expect(game.player2.getDomBoard().classList.contains('board-inactive')).toBe(true);
    expect(document.querySelector('.error-wrapper').classList.contains('err-active')).toBe(true);
  });

  it('testing selectRandomCell', () => {
    expect(typeof game.selectRandomCell()).toBe('number');
  });

  it('testing handlePossibleGameOver', () => {
    game.player1.generateShips();
    game.player1.positionAiShips();
    game.turn = 0;
    game.handlePossibleGameOver(game.player1);
    expect(game.turn).toBe(1);
  });

  it('testing gameInit', () => {
    game.gameInit();
    expect(game.turn).toBe(0);
    expect(game.player2.ships.length).toBe(5);
  });
});
