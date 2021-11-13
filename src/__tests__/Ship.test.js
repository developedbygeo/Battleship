import Ship from '../modules/Ship.js';

let cruiser;

describe('testing constructor properties', () => {
  beforeEach(() => {
    cruiser = new Ship('cruiser', 3);
  });

  it('testing constructor properties', () => {
    expect(cruiser.shipName).toBe('cruiser');
    expect(cruiser.length).toBe(3);
    expect(cruiser.position.length).toBe(0);
    expect(cruiser.hits.length).toBe(0);
    expect(cruiser.orientation).toBe('vertical');
  });

  it('testing position - vertical', () => {
    cruiser.setPosition(5, 'vertical');
    expect(cruiser.position).toContain(15);
  });

  it('testing position length - vertical', () => {
    cruiser.setPosition(5, 'vertical');
    expect(cruiser.position.length).toBe(3);
  });

  it('testing position - horizontal', () => {
    cruiser.setPosition(5, 'horizontal');
    expect(cruiser.position).toContain(6);
  });

  it('testing position length - horizontal', () => {
    cruiser.setPosition(5, 'vertical');
    expect(cruiser.position.length).toBe(3);
  });

  it('testing hit', () => {
    cruiser.hit(5);
    expect(cruiser.hits).toContain(5);
  });

  it('testing sunk', () => {
    expect(cruiser.isSunk()).toBe(false);
  });
});

describe('testing reset', () => {
  beforeEach(() => {
    cruiser = new Ship('cruiser', 3);
    cruiser.setPosition(5, 'horizontal');
    cruiser.hit(5);
  });

  it('testing position reset', () => {
    cruiser.reset();
    expect(cruiser.position.length).toBe(0);
  });

  it('testing hits reset', () => {
    cruiser.reset();
    expect(cruiser.hits.length).toBe(0);
  });

  it('testing orientation reset', () => {
    cruiser.reset();
    expect(cruiser.orientation).toBe('vertical');
  });
});
