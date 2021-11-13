import React, { useMemo } from "react";
import { Button } from "../../Components/Buttons";
import BoxTitle from "../../Components/BoxTitle";
import Table from '../../Components/Table';
import Styles from './index.module.css'

const Employees = (props) => {
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Cpf',
      dataIndex: 'cpf',
      key: 'cpf',
      render: (props) => <div>{'props.nome'}</div>
    },
    {
      title: 'Salário',
      dataIndex: 'salario',
      key: 'salario',
    },
    {
      title: 'Desconto',
      dataIndex: 'desconto',
      key: 'desconto',
    },
    {
      title: 'Dependentes',
      dataIndex: 'dependentes',
      key: 'dependentes',
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (props) => <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '8px' }}><Button to={`/employees/store/${props?.id}`} >Editar</Button>
        </div> <Button typeStyleButton='red'>deletar</Button></div>
    }

  ];
  const dataSource = [
    {
      key: '1',
      id: 1,
      nome: 'Reginaldo',
      cpf: '442.500.608-96',
      salario: '100',
      desconto: '100',
      dependentes: '2'
    },
    {
      key: '2',
      id: 2,
      nome: 'Reginaldo2',
      cpf: '442.500.608-96',
      salario: '100',
      desconto: '100',
      dependentes: '2'
    },
  ];


  return (
    <div className={Styles.container}>

      <div className={Styles.containerTable}>
        <BoxTitle
          title='Funcionários'
          componentRight={<div><Button to='/employees/store'>Novo</Button></div>}
        />
        <Table
          maxWidth='900px'
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </div>
  )
}

export default Employees;
