import { exec } from 'child_process';
import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Customer', () => {
  it('should have fistName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Henrique', 'Souza', '111.111');
    expect(sut).toHaveProperty('firstName', 'Henrique');
    expect(sut).toHaveProperty('lastName', 'Souza');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have tohave methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Henrique', 'Souza', '111.111');
    expect(sut.getName()).toBe('Henrique Souza');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('Enterprise Customer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Jazin', '111.000');
    expect(sut).toHaveProperty('name', 'Jazin');
    expect(sut).toHaveProperty('cnpj', '111.000');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Jazin', '111.000');
    expect(sut.getName()).toBe('Jazin');
    expect(sut.getIDN()).toBe('111.000');
  });
});
