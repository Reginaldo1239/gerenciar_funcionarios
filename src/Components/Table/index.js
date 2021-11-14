import React, { useMemo } from "react";

import Styles from './index.module.css';

const Employees = (props) => {
  const { columns, dataSource, visible } = props;

  /*
  Exemplo de como os dados devem ser passados para montar a tabela
  Se em alguma celula você precisar de algo diferente de um texto,basta adicionar um render conforme o exemplo abaixo

  const columns = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome',
      },
      {
        title: '',
        dataIndex: 'cpf',
        key: 'cpf',
        render: (props) => <button>{'props.nome'}</button>
      },

    ];
    const dataSource = [
      {
        key: '1',
        id: 1,
        nome: 'Reginaldo',
        cpf: '442.500.608-96',
      },
      {
        key: '2',
        id: 2,
        nome: 'Reginaldo2',
        cpf: '442.500.608-96',
      },
    ]; */

  if (visible===false) return null;


  return (
    <div className={Styles.container} >
      <table>
        <tbody>
          <tr>
            {columns?.map(({ key, title }) =>
              <th key={key}>{title}</th>
            )}
          </tr>
          {dataSource?.map((data, index) => {
            let cell = -1;
            return (
              <tr key={index}>
                {[...Array(Object.keys(data)?.length)].map((dataAux, index) => {
                  cell++
                  if (columns[cell]?.render || data[columns[cell]?.dataIndex]) {
                    return (
                      <td key={index}> {columns[cell]?.render
                        ? columns[cell]?.render(data)
                        : data[columns[cell]?.dataIndex]}
                      </td>)
                  }
                  return <td key={index}> </td>
                }
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  )
}

export default Employees;
