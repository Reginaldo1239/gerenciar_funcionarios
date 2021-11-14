import { render, rerender, screen, fireEvent, } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import faker from 'faker'
import Header from './index';
import Styles from './index.module.css';

test('render componente Header e verifica o titulo e link', () => {
  const { container } = render(<Router><Header /></Router>);


  expect(container.getElementsByClassName(Styles.header)[0]).toHaveTextContent('Inicio');
  expect(container.getElementsByTagName('a')[0]).toHaveTextContent('Inicio');
  expect(container.getElementsByTagName('a')[0]).toHaveAttribute('href','/employees')
  expect(container.getElementsByClassName(Styles.header)[0]).toHaveTextContent('Gerenciar Funcionários');
});

