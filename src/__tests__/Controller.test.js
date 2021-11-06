import Controller from '../modules/Controller.js';

let testController;

describe('testing the Player class', () => {
  beforeEach(() => {
    testController = new Controller();
  });

  it('#1 testing playerHuman', () => {
    expect(testController.playerHuman.name).toBe('You');
  });

  it('#2 testing playerAi', () => {
    expect(testController.playerAi.name).toBe('AI');
  });

  it('#3 testing currentPlayers', () => {
    expect(testController.currentPlayers.length).toBe(2);
  });

  it('#4 testingCurrentPlayers array index 0', () => {
    expect(testController.currentPlayers[0].name).toBe('You');
  });

  it('#5 testingCurrentPlayers array index 1', () => {
    expect(testController.currentPlayers[1].name).toBe('AI');
  });

  it('#6 testing initial state of turn', () => {
    expect(testController.turn).toBe(0);
  });

  it('#7 testing changeTurn', () => {
    testController.changeTurn();
    expect(testController.turn).toBe(1);
  });

  it('#8 testing changeTurn twice to change turn to 0', () => {
    testController.changeTurn();
    testController.changeTurn();
    expect(testController.turn).toBe(0);
  });

  it('#9 testing checkTurn and play methods, expecting AI', () => {
    testController.changeTurn();
    expect(testController.turn).toBe(1);
    expect(testController.play()).toBe('AI');
  });

  it('#10 testing checkTurn and play methods, expecting You', () => {
    expect(testController.play()).toBe('You');
  });
});
