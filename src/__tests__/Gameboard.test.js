import Gameboard from '../modules/Gameboard.js';

const testInstance = new Gameboard();

it('missedAttacks should be empty', () => {
  expect(testInstance.missedAttacks).toEqual([]);
});
it('no ships on board', () => {
  expect(testInstance.getCurrentShipsOnBoard).toEqual([]);
});
it('should return true for valid position', () => {
  expect(testInstance.isPositionValid(5, 3, 'horizontal')).toBe(true);
});
it('should return false due to invalid position', () => {
  expect(testInstance.isPositionValid(5, 99, 'horizontal')).toBe(false);
});
it('should return false due to invalid - rotated position', () => {
  expect(testInstance.isPositionValid(5, 99, 'vertical', true)).toBe(false);
});
