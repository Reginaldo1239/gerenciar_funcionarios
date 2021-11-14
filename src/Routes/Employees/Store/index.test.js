import { render, screen, fireEvent } from '@testing-library/react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import faker from 'faker';
import ReduxProvider from '../../../Components/ReduxProvider';
import Store from './index';
import Styles from './index.module.css';

test('teste a pagina  "./Employees/Store', async () => {
  const utils = render(<ReduxProvider> <Router><Store /></Router> </ReduxProvider>);
  const { container } = utils;
  const button = screen.getByText('Salvar');
  const inputs = {
    nome: utils.getByLabelText('Nome'),
    cpf: utils.getByLabelText('Cpf'),
    salario: utils.getByLabelText('Salário'),
    desconto: utils.getByLabelText('Desconto'),
    dependentes: utils.getByLabelText('Dependentes'),
  }
  const inputsValueToTest={
    nome: faker.name.firstName(),
    cpf: '41414714741',
    salario: faker.finance.amount(),
    desconto: faker.finance.amount(),
    dependentes: faker.datatype.number(),
  }
  expect(container.getElementsByTagName('form')).toHaveLength(1);
  fireEvent.change(inputs.nome, { target: { value: inputsValueToTest.nome }} )
  fireEvent.change(inputs.cpf, { target: { value: '414.147.147-412' } })
  fireEvent.change(inputs.salario, { target: { value: inputsValueToTest.salario } })
  fireEvent.change(inputs.desconto, { target: { value: inputsValueToTest.desconto } })
  fireEvent.change(inputs.dependentes, { target: { value: inputsValueToTest.dependentes} })

  expect(button).toHaveTextContent('Salvar')


});
