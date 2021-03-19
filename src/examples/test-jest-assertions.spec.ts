describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // usado em primitivos
    expect(number).toEqual(10); // Object.is - usado em objetos

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);

    expect(number).toBeCloseTo(10.1, 0.1); // checagem aproximada

    expect(number).toHaveProperty('toString'); // se contém o atributo
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Henrique', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 30); // assertiva de propriedade e valor
    expect(person).not.toHaveProperty('lastName');

    expect(person.name).toBe('Henrique');
  });
});
