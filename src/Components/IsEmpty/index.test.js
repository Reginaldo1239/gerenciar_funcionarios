import { render, screen, fireEvent, } from '@testing-library/react';

import faker from 'faker'
import IsEmpty from './index';
import Styles from './index.module.css';
describe('teste componente IsEmpty',()=>{
  const { container ,rerender} = render(<IsEmpty visible={false} />);

  test('quando visible=false', () => {
    expect(container).toBeEmptyDOMElement();
  });

  test('quando visible=true e title="com algum valor random"', () => {
    const title= faker.lorem.words();
    rerender(<IsEmpty visible={true} title={title}/>)
    expect(container.getElementsByClassName(Styles.containerIsEmpty)).toHaveLength(1);
    expect(container.getElementsByTagName('h4')[0]).toHaveTextContent(title);
  });
})


