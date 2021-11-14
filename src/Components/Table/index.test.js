import { render, screen, fireEvent, } from '@testing-library/react';

import faker from 'faker'
import Table from './index';
import Styles from './index.module.css';
describe('teste componente Table', () => {
  const { container, rerender, getByTestId } = render(<Table visible={false} />);

  test('quando visible=false', () => {
    expect(container).toBeEmptyDOMElement();
  });

  test('quando visible=true com  columns e dataSource', () => {
    const titleColumn = [faker.lorem.word(), ''];
    const arrayWord = [faker.lorem.word(), faker.lorem.word()];
    const textToRendeComponent = faker.lorem.words()
    const columns = [
      {
        title: titleColumn[0],
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: titleColumn[1],
        dataIndex: 'id',
        key: 'id',
        render: (props) => <div >{props.textToRendeComponent} </div>
      }
    ];

    const dataSource = [
      {
        key: '1',
        id: 1,
        nome: arrayWord[0],
        textToRendeComponent
      },
      {
        key: '2',
        id: 2,
        nome: arrayWord[1],
        textToRendeComponent

      },
    ];
    rerender(<Table visible={true} columns={columns} dataSource={dataSource} />)
    //quantidade de linha incluindo o header da tabela
    expect(container.getElementsByTagName('tr')).toHaveLength(dataSource.length + 1);
    //quantidade de colunas
    expect(container.getElementsByTagName('th')).toHaveLength(columns.length);
    //texto da coluna 0
    expect(container.getElementsByTagName('th')[0]).toHaveTextContent(titleColumn[0]);
    //texto da coluna 1
    expect(container.getElementsByTagName('th')[1]).toHaveTextContent(titleColumn[1]);
    //texto que do parametro render
    expect(container).toHaveTextContent(textToRendeComponent);
  });
})


