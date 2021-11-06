import Ship from '../modules/Ship.js';

const cruiser = new Ship('cruiser', 3);

it('#1 testing horizontal orientation', () => {
  cruiser.orientation = 'horizontal';
  expect(cruiser.getOrientation).toBe('horizontal');
});

it('#2 ship positioning on coord 5', () => {
  cruiser.orientation = 'vertical';
  cruiser.position(5, 'vertical');
  expect(cruiser.getPosition).toContain(15);
});

describe('testing hits', () => {
  beforeEach(() => {
    cruiser.resetHits();
  });
  it('#3 ship is hit but not sunk', () => {
    cruiser.hit(5);
    expect(cruiser.isSunk()).toBe(false);
  });
  it('#4 ship is hit and sunk', () => {
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
  it('#5 testing hard reset - position', () => {
    expect(cruiser.getPosition.length).toBe(0);
  });
  it('#6 testing hard reset - orientation', () => {
    expect(cruiser.getOrientation).toBe('vertical');
  });
  it('#7 testing hard reset - hits', () => {
    expect(cruiser.getHits.length).toBe(0);
  });
});
