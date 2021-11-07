import * as AI from '../modules/ai-helpers.js';

describe('findValid tests', () => {
  it('#1 testing base cases', () => {
    expect(AI.findValid(0).length).toBe(2);
    expect(AI.findValid(9).length).toBe(2);
    expect(AI.findValid(90).length).toBe(2);
    expect(AI.findValid(99).length).toBe(2);
    // defaults
    expect(AI.findValid(34)).toContain(33);
    expect(AI.findValid(34)).toContain(35);
    expect(AI.findValid(34)).toContain(44);
    expect(AI.findValid(34)).toContain(24);
  });

  it('#2 testing num included', () => {
    expect(AI.findValid(92).length).toBe(3);
    expect(AI.findValid(92)).toContain(93);
    expect(AI.findValid(29).length).toBe(3);
    expect(AI.findValid(29)).toContain(19);
    expect(AI.findValid(7).length).toBe(3);
    expect(AI.findValid(7)).toContain(17);
    expect(AI.findValid(60).length).toBe(3);
    expect(AI.findValid(60)).toContain(61);
  });
});

describe('findValidHorizontal tests', () => {
  it('#3 testing base cases', () => {
    expect(AI.findValidHorizontal(0)).toBe('nope');
    expect(AI.findValidHorizontal(9)).toBe('nope');
    expect(AI.findValidHorizontal(90)).toBe('nope');
    expect(AI.findValidHorizontal(99)).toBe('nope');
    expect(AI.findValidHorizontal(29)).toBe('nope');
    expect(AI.findValidHorizontal(70)).toBe('nope');
    // defaults
    expect(AI.findValidHorizontal(34)).toContain(33);
    expect(AI.findValidHorizontal(34)).toContain(35);
  });

  it('#4 testing num included', () => {
    expect(AI.findValidHorizontal(8)).toContain(9);
    expect(AI.findValidHorizontal(8)).toContain(7);
    expect(AI.findValidHorizontal(93)).toContain(94);
    expect(AI.findValidHorizontal(93)).toContain(92);
  });
});

describe('findValidVertical tests', () => {
  it('#5 testing base cases', () => {
    expect(AI.findValidVertical(0)).toBe('nope');
    expect(AI.findValidVertical(9)).toBe('nope');
    expect(AI.findValidVertical(90)).toBe('nope');
    expect(AI.findValidVertical(99)).toBe('nope');
    expect(AI.findValidVertical(5)).toBe('nope');
    expect(AI.findValidVertical(98)).toBe('nope');
    // defaults
    expect(AI.findValidVertical(44)).toContain(34);
    expect(AI.findValidVertical(44)).toContain(54);
  });

  describe('Testing findEnemyDirection', () => {
    it('testing vertical', () => {
      expect(AI.findEnemyDirection([5, 15])).toBe('vertical');
    });

    it('testing horizontal', () => {
      expect(AI.findEnemyDirection([5, 6])).toBe('horizontal');
    });
  });
});
