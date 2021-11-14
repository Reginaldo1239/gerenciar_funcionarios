import { render, rerender, screen, fireEvent, } from '@testing-library/react';
import faker from 'faker'
import Styles from './index.module.css';
import BoxTitle from './index';




  test('Testa se existe o title e o ComponentRight', () => {
    const title = faker.lorem.words();
    const textComponentRight = faker.lorem.words();
    const { container } = render(<BoxTitle title={title} componentRight={<div>{textComponentRight}</div>}  />);
    expect(container.getElementsByClassName(Styles.boxTitle)[0]).toHaveTextContent(title);
    expect(container.getElementsByClassName(Styles.boxTitle)[0]).toHaveTextContent(textComponentRight);
  });

