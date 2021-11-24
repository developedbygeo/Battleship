import { findValidXY, filterAttackedCells, findEnemyDirection } from '../modules/ai-helpers.js';

describe('testing findValidXY', () => {
  it('testing findValidXY - no direction arg', () => {
    expect(findValidXY(5)).toBe('nope');
  });

  it('testing findValidXY - horizontal - valid', () => {
    expect(findValidXY(5, 'horizontal')).toContain(4);
    expect(findValidXY(5, 'horizontal')).toContain(6);
    expect(findValidXY(5, 'horizontal').length).toBe(2);
  });

  it('testing findValidXY - horizontal - nope', () => {
    expect(findValidXY(90, 'horizontal')).toBe('nope');
  });

  it('testing findValidXY - vertical - valid', () => {
    expect(findValidXY(45, 'vertical')).toContain(55);
    expect(findValidXY(45, 'vertical')).toContain(35);
    expect(findValidXY(45, 'vertical').length).toBe(2);
    expect(findValidXY(29, 'vertical')).toContain(19);
    expect(findValidXY(70, 'vertical')).toContain(80);
  });

  it('testing findValidXY - vertical - nope', () => {
    expect(findValidXY(8, 'vertical')).toBe('nope');
  });

  it('testing findValidXY - unavailable - valid', () => {
    expect(findValidXY(0, 'unavailable')).toContain(10);
    expect(findValidXY(9, 'unavailable')).toContain(8);
    expect(findValidXY(90, 'unavailable')).toContain(80);
    expect(findValidXY(99, 'unavailable')).toContain(98);
    expect(findValidXY(20, 'unavailable')).toContain(30);
    expect(findValidXY(39, 'unavailable')).toContain(29);
    expect(findValidXY(92, 'unavailable')).toContain(82);
    expect(findValidXY(8, 'unavailable')).toContain(18);
    expect(findValidXY(45, 'unavailable')).toContain(46);
  });
});

describe('testing filterAttackedCells', () => {
  it('testing filterAttackedCells', () => {
    const valid = [0, 5, 25, 35, 99, 56];
    const attacked = [0, 99, 13, 55, 21, 25, 56];
    expect(filterAttackedCells(valid, attacked)).toContain(35);
    expect(filterAttackedCells(valid, attacked)).toContain(5);
    expect(filterAttackedCells(valid, attacked).length).toBe(2);
  });
  it('testing undefined for filterAttackedCells', () => {
    const attacked = [0, 99, 13, 55, 21, 25, 56];
    expect(filterAttackedCells(undefined, attacked)).toBe(undefined);
  });
});

describe('testing findEnemyDirection', () => {
  it('testing findEnemyDirection', () => {
    const attacks = [0, 1];
    const attacks2 = [89, 99];
    expect(findEnemyDirection(attacks)).toBe('horizontal');
    expect(findEnemyDirection(attacks2)).toBe('vertical');
  });
});
