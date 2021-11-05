import Ship from '../modules/Ship.js';

const cruiser = new Ship('cruiser', 3);

it('testing horizontal orientation', () => {
  cruiser.orientation = 'horizontal';
  expect(cruiser.getOrientation).toBe('horizontal');
});

it('ship positioning on coord 5', () => {
  cruiser.orientation = 'vertical';
  cruiser.position(5, 'vertical');
  expect(cruiser.getPosition).toContain(15);
});

describe('testing hits', () => {
  beforeEach(() => {
    cruiser.resetHits();
  });
  it('ship is hit but not sunk', () => {
    cruiser.hit(5);
    expect(cruiser.isSunk()).toBe(false);
  });
  it('ship is hit and sunk', () => {
    cruiser.orientation = 'horizontal';
    cruiser.position = 5;
    cruiser.hit(5);
    cruiser.hit(6);
    cruiser.hit(7);
    expect(cruiser.isSunk()).toBe(true);
  });
});

describe('testing hardReset', () => {
  beforeEach(() => {
    cruiser.hardReset();
  });
  it('testing hard reset - position', () => {
    expect(cruiser.getPosition.length).toBe(0);
  });
  it('testing hard reset - orientation', () => {
    expect(cruiser.getOrientation).toBe('vertical');
  });
  it('testing hard reset - hits', () => {
    expect(cruiser.getHits.length).toBe(0);
  });
});
