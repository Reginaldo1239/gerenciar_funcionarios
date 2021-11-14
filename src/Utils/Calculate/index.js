import { DEPENDENT_TO_DISCOUNT } from '../../Constants/Common';

export const calculateBaseSalary = (data) => {
  let { salario, desconto, dependentes, } = data;
  return (salario - desconto) - (dependentes * DEPENDENT_TO_DISCOUNT);
}

export const calculateIncomeTax = (baseSalary) => {
  const aliquotAndInstallmentDeducted = getAliquotIncomeTaxAndInstallmentDeductedIRPF(baseSalary);
  return ((baseSalary * aliquotAndInstallmentDeducted.aliquot) - aliquotAndInstallmentDeducted.installmentDeductedIRPF);
}
//obter alíquota do imposto de renda e dedução da parcela IRPFe
export const getAliquotIncomeTaxAndInstallmentDeductedIRPF = (baseSalary) => {
  if (baseSalary <= 1903.98) {
    return { aliquot: 0, installmentDeductedIRPF: 0 };
  }
  if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    return { aliquot: (7.5 / 100), installmentDeductedIRPF: 142.80 };
  }
  if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    return { aliquot: (15 / 100), installmentDeductedIRPF: 354.80 };
  }
  if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    return { aliquot: (22.5 / 100), installmentDeductedIRPF: 636.13 };
  }
  if (baseSalary > 4664.68) {
    return { aliquot: (27.5 / 100), installmentDeductedIRPF: 869.36 };
  }
}

