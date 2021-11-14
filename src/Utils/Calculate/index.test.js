import faker from 'faker';
import { calculateBaseSalary, calculateIncomeTax, getAliquotIncomeTaxAndInstallmentDeductedIRPF } from './index';
import { DEPENDENT_TO_DISCOUNT } from '../../Constants/Common';

test('testa se a função calculateBaseSalary está retornando o valor correto', () => {
  const infoSalary = {
    salario: faker.finance.amount(),
    desconto: faker.finance.amount(),
    dependentes: faker.datatype.number(),
  }
  let baseSalary = calculateBaseSalary({ salario: infoSalary.salario, desconto: infoSalary.desconto, dependentes: infoSalary.dependentes });
  let responseExpect = (infoSalary.salario - infoSalary.desconto) - (infoSalary.dependentes * DEPENDENT_TO_DISCOUNT);
  expect(baseSalary).toBe(responseExpect);
})



describe('testa a função calculateIncomeTax', () => {
  test('é esperado que retorne qualquer numero', () => {
    const salary = calculateIncomeTax(faker.datatype.number({ 'min': 0, 'max': 1000000000000000 }));
    const responseExpect = calculateIncomeTax(salary);
    expect(typeof (responseExpect) === 'number' && responseExpect !== NaN).toEqual(true);
  })
});

describe('testa se a função getAliquotIncomeTaxAndInstallmentDeductedIRPF retorna  aliquota e dedução da parcela IRPF,conforme esperado', () => {
  test('test  para salario <= 1903.98', () => {
    const salary = faker.datatype.number({ 'min': 0, 'max': 1903 });
    const reponseExpect = { aliquot: 0, installmentDeductedIRPF: 0 }
    expect(getAliquotIncomeTaxAndInstallmentDeductedIRPF(salary)).toEqual(reponseExpect);
  });

  test('test  para salario >= 1903.99 && salario <= 2826.65', () => {
    const salary = faker.datatype.number({ 'min': 1903.99, 'max': 2826.65 });
    const responseExpect = { aliquot: 0.075, installmentDeductedIRPF: 142.80 }
    expect(getAliquotIncomeTaxAndInstallmentDeductedIRPF(salary)).toEqual(responseExpect);
  })

  test('test  para salario >= 2826.66 && salario <= 3751.05', () => {
    const salary = faker.datatype.number({ 'min': 2826.66, 'max': 3751.05 });
    const responseExpect = { aliquot: 0.15, installmentDeductedIRPF: 354.80 }
    expect(getAliquotIncomeTaxAndInstallmentDeductedIRPF(salary)).toEqual(responseExpect);
  })

  test('test  para salario >= 3751.06 && salario <= 4664.68', () => {
    const salary = faker.datatype.number({ 'min': 3751.06, 'max': 4664.68 });
    const responseExpect = { aliquot: 0.225, installmentDeductedIRPF: 636.13 }
    expect(getAliquotIncomeTaxAndInstallmentDeductedIRPF(salary)).toEqual(responseExpect);
  })

  test('test  para salario => 4664.68', () => {
    const salary = faker.datatype.number({ 'min': 4664.69, 'max': 10000000000000000000000000 });
    const responseExpect = { aliquot: 0.275, installmentDeductedIRPF: 869.36 }
    expect(getAliquotIncomeTaxAndInstallmentDeductedIRPF(salary)).toEqual(responseExpect);
  })
})
