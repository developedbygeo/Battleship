import Gameboard from '../modules/Gameboard.js';
import Ship from '../modules/Ship.js';

const testInstance = new Gameboard();
const newCarrier = new Ship('cruiser', 3);

describe('testing the Gameboard', () => {
  afterEach(() => {
    testInstance.hardReset();
  });

  it('#1 setting ship on currentShips', () => {
    testInstance.setCurrentShips(newCarrier);
    expect(testInstance.getCurrentShipsOnBoard.length).toBe(1);
  });

  it('#2 missedAttacks should be empty', () => {
    expect(testInstance.missedShots).toEqual([]);
  });

  it('#3 no ships on board', () => {
    expect(testInstance.getCurrentShipsOnBoard).toEqual([]);
  });

  it('#4 should return true for valid position', () => {
    expect(testInstance.isPositionValid(5, 3, 'horizontal')).toBe(true);
  });

  it('#5 should return false due to ship overlap', () => {
    testInstance.placeShip(22, new Ship('carrier', 4));
    expect(testInstance.isPositionValid(31, 3, 'horizontal')).toBe(false);
  });

  it('#6 should return false due to invalid position', () => {
    expect(testInstance.isPositionValid(5, 99, 'horizontal')).toBe(false);
  });

  it('#7 should return false due to invalid - rotated position', () => {
    expect(testInstance.isPositionValid(5, 99, 'vertical', true)).toBe(false);
  });

  it('#8 should return false due to valid - rotated position', () => {
    expect(testInstance.isPositionValid(5, 11, 'horizontal', true)).toBe(true);
  });

  it('#9 invalid placeShip - return false', () => {
    newCarrier.position(99, 'vertical');
    expect(testInstance.placeShip(99, newCarrier)).toBe(false);
  });

  it('#10 valid placeShip - push to array', () => {
    newCarrier.position(23, 'vertical');
    testInstance.placeShip(23, newCarrier);
    expect(testInstance.getCurrentShipsOnBoard.length).toBe(1);
  });

  it('#11 invalid rotateShip', () => {
    newCarrier.position(48, 'vertical');
    expect(() => {
      testInstance.rotateShip(newCarrier);
    }).toThrow('Invalid positioning');
  });

  it('#12 valid rotateShip', () => {
    newCarrier.position(35, 'vertical');
    testInstance.rotateShip(newCarrier);
    expect(newCarrier.getPosition[0]).toBe(35);
  });

  it('#13 fired a duplicate shot to the same spot', () => {
    newCarrier.position(35, 'horizontal');
    testInstance.setCurrentShips(newCarrier);
    testInstance.attackedCoords.push(35);
    expect(() => {
      testInstance.shotFired(35);
    }).toThrow('A shot has already been fired here!');
  });

  it('#14 successfull shot, shotResult array is updated', () => {
    newCarrier.position(35, 'horizontal');
    testInstance.setCurrentShips(newCarrier);
    expect(testInstance.shotFired(35).length).toEqual(1);
  });

  it('#15 1 ship is alive and well', () => {
    newCarrier.position(35, 'horizontal');
    testInstance.setCurrentShips(newCarrier);
    expect(testInstance.shipsAlive()).toBe(1);
  });
});
