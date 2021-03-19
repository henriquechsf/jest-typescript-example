import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = new NoDiscount();
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = new FiftyPercentDiscount();
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    const sut = new TenPercentDiscount();
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
