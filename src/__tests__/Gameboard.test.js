import Gameboard from '../modules/Gameboard.js';
import Ship from '../modules/Ship.js';

let testInstance;
const cruiser = new Ship('cruiser', 3);
const invalidCruiser = new Ship('cruiser2', 3);

describe('testing the Gameboard', () => {
  testInstance = new Gameboard();
  invalidCruiser.orientation = 'horizontal';
  invalidCruiser.setPosition(8, 'horizontal');
  afterEach(() => {
    testInstance.reset();
  });
  it('testing the constructor', () => {
    expect(testInstance.width).toBe(10);
    expect(testInstance.area.length).toBe(100);
    expect(testInstance.missedShots.length).toBe(0);
    expect(testInstance.currentShips.length).toBe(0);
    expect(testInstance.attackedCoords.length).toBe(0);
  });

  it('placing ship - correctly', () => {
    testInstance.placeShip(9, cruiser);
    expect(testInstance.currentShips.length).toBe(1);
    expect(testInstance.existingShips().length).toBe(1);
  });

  it('available cells', () => {
    testInstance.placeShip(9, cruiser);
    testInstance.handleAttack(95);
    testInstance.handleAttack(92);
    testInstance.handleAttack(91);
    testInstance.handleAttack(85);
    testInstance.handleAttack(1);
    expect(testInstance.remainingUnoccupiedCells().length).toBe(95);
  });

  it('placing ship - incorrectly', () => {
    expect(() => {
      testInstance.placeShip(8, invalidCruiser);
    }).toThrow('Position is invalid');
  });

  it('placing multiple ships - correctly', () => {
    cruiser.setPosition(5, 'horizontal');
    const cruiser3 = new Ship('cruiser3', 3);
    cruiser3.setPosition(65, 'horizontal');
    testInstance.placeShip(5, cruiser);
    testInstance.placeShip(65, cruiser3);
    expect(testInstance.currentShips).toContain(cruiser);
    expect(testInstance.currentShips).toContain(cruiser3);
  });

  it('testing position - horizontal -  invalid', () => {
    expect(testInstance.isPositionValid(9, 3, 'horizontal', true)).toBe(false);
  });

  it('testing position - vertical - valid', () => {
    expect(testInstance.isPositionValid(9, 3, 'vertical', false)).toBe(true);
  });

  it('testing ship rotation - vertical - invalid', () => {
    invalidCruiser.setPosition(99, 'horizontal');
    expect(() => {
      testInstance.rotateShip(invalidCruiser);
    }).toThrow(Error);
  });

  it('testing ship rotation - vertical - valid', () => {
    cruiser.orientation = 'vertical';
    cruiser.setPosition(55, 'vertical');
    testInstance.rotateShip(cruiser);
    expect(cruiser.orientation).toBe('vertical');
  });

  it('testing ship rotation - vertical x2 - invalid', () => {
    cruiser.orientation = 'vertical';
    cruiser.setPosition(48, 'vertical');
    expect(() => {
      testInstance.rotateShip(cruiser);
    }).toThrow(Error);
  });

  it('testing ship rotation - horizontal - invalid', () => {
    invalidCruiser.orientation = 'horizontal';
    invalidCruiser.setPosition(99, 'horizontal');
    expect(() => {
      testInstance.rotateShip(invalidCruiser);
    }).toThrow(Error);
  });

  it('testing attacks - invalid', () => {
    testInstance.attackedCoords.push(58);
    expect(() => {
      testInstance.handleAttack(58);
    }).toThrow(Error);
  });

  it('testing attacks - valid - no ship', () => {
    testInstance.attackedCoords.push(55);
    expect(testInstance.handleAttack(58).length).toBe(0);
  });

  it('testing attacks - valid - ship exists', () => {
    testInstance.attackedCoords.push(55);
    cruiser.setPosition(9, 'vertical');
    testInstance.setCurrentShips(cruiser);
    expect(testInstance.handleAttack(19)).toContain(cruiser);
    expect(cruiser.hits).toContain(19);
    expect(testInstance.attackedCoords).toContain(19);
  });

  it('testing remainingShips - valid - ship exists', () => {
    cruiser.setPosition(9, 'vertical');
    testInstance.setCurrentShips(cruiser);
    testInstance.handleAttack(19);
    expect(testInstance.remainingShips()).toBe(1);
  });

  it('testing remainingShips - multiple - valid - ships exist', () => {
    const cruiser3 = new Ship('cruiser3', 3);
    cruiser.setPosition(9, 'vertical');
    cruiser3.setPosition(65, 'horizontal');
    testInstance.setCurrentShips(cruiser);
    testInstance.setCurrentShips(cruiser3);
    expect(testInstance.remainingShips()).toBe(2);
  });

  it('testing remainingShips - multiple - valid - ship exists and one is sunk', () => {
    const cruiser3 = new Ship('cruiser3', 3);
    cruiser.setPosition(9, 'vertical');
    cruiser3.setPosition(65, 'horizontal');
    cruiser3.hits = [65, 66, 67];
    testInstance.setCurrentShips(cruiser);
    testInstance.setCurrentShips(cruiser3);
    expect(testInstance.remainingShips()).toBe(1);
  });
});
