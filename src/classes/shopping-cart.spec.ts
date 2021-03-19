import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount { }
  return new DiscountMock();
};

const createCartItemMock = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) { }
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItemMock('Camiseta', 40);
  const cartItem2 = createCartItemMock('Bermuda', 30);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
};

describe('Shopping-Cart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have two cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and total with discount', () => {
    const { sut } = createSutWithProducts();

    expect(sut.total()).toBe(70);
    expect(sut.totalWithDicount()).toBe(70);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });
});
