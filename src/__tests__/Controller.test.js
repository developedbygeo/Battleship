import Controller from '../modules/Controller.js';
import Ship from '../modules/Ship.js';

let testController;
let smallShip;

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

  it('#11 testing default state of gameOver', () => {
    expect(testController.gameOver).toBe(false);
  });

  it('#12 testing gameOver through play', () => {
    testController.gameOver = true;
    expect(testController.play()).toBe('Game Over');
  });

  it('#13 testing fleet creation through Controller (random placement) for playerHuman', () => {
    testController.playerHuman.createFleet();
    testController.playerHuman.randomPlacement();
    expect(testController.playerHuman.board.getCurrentShipsOnBoard.length).toBe(
      5
    );
  });

  it('#14 testing fleet creation through Controller (random placement)for playerAI', () => {
    testController.playerAi.createFleet();
    testController.playerAi.randomPlacement();
    expect(testController.playerAi.board.getCurrentShipsOnBoard.length).toBe(5);
  });

  it('#15 testing findLoserParty with no ships left (Human winner)', () => {
    testController.playerAi.createFleet();
    testController.playerAi.randomPlacement();
    testController.playerAi.board.hardReset();
    expect(testController.findLoserParty()).toBe('You');
  });

  it('#16 testing findLoserParty with no ships left (AI winner)', () => {
    testController.playerHuman.createFleet();
    testController.playerHuman.randomPlacement();
    expect(testController.findLoserParty()).toBe('AI');
  });

  it('#17 testing findLoserParty with ships left (Error trigger)', () => {
    testController.playerHuman.createFleet();
    testController.playerHuman.randomPlacement();
    testController.playerAi.createFleet();
    testController.playerAi.randomPlacement();
    expect(() => {
      testController.findLoserParty();
    }).toThrow('Oops, no one has lost yet!');
  });
});

describe('random AI selection', () => {
  beforeEach(() => {
    testController = new Controller();
    testController.playerHuman.board.attackedCoords = [...Array(99).keys()];
  });

  it('#18 randomAI successfull', () => {
    expect(testController.AIrandom()).toBe(99);
  });
});

describe('random AI selection failed', () => {
  beforeEach(() => {
    testController = new Controller();
    testController.playerHuman.board.attackedCoords = [...Array(100).keys()];
  });

  it('#19 randomAI successfull', () => {
    expect(testController.AIrandom()).toBe(undefined);
  });
});

describe('testing randomAI range', () => {
  beforeEach(() => {
    testController = new Controller();
    testController.playerHuman.board.attackedCoords = [...Array(51).keys()];
  });

  it('#20 randomAI successfull and over certain range', () => {
    expect(testController.AIrandom()).toBeGreaterThanOrEqual(51);
  });
});

describe('testing AIattack', () => {
  beforeEach(() => {
    testController = new Controller();
    testController.playerHuman.board.hardReset();
    smallShip = new Ship('patrol', 3);
  });

  it('#21 AIattack horizontal position', () => {
    smallShip.position(65, 'horizontal');
    testController.playerHuman.board.placeShip(65, smallShip);
    expect(testController.AIattack(65, 'horizontal')).toBeGreaterThanOrEqual(
      64
    );
  });

  it('#22 AIattack vertical position', () => {
    smallShip.position(65, 'vertical');
    testController.playerHuman.board.placeShip(65, smallShip);
    expect(testController.AIattack(65, 'vertical')).toBeGreaterThanOrEqual(55);
  });

  it('#23 AIattack null position', () => {
    smallShip.position(65, 'vertical');
    testController.playerHuman.board.placeShip(65, smallShip);
    expect(testController.AIattack(65)).toBeGreaterThanOrEqual(55);
  });

  it('#24 AIattack undefined result', () => {
    smallShip.position(99, 'vertical');
    testController.playerHuman.board.placeShip(99, smallShip);
    expect(testController.AIattack(99, 'vertical')).toBe(undefined);
  });
});
