import { render, rerender, screen, fireEvent, } from '@testing-library/react';
import faker from 'faker'
import Styles from './index.module.css';
import Footer from './index';

test('render componente footer e verifica o texto', () => {
  const { container } = render(<Footer />);
  expect(container.getElementsByClassName(Styles.footer)[0]).toHaveTextContent('todos os direitos reservados');

});

