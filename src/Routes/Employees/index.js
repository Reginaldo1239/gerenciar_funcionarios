import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, fetchEmployees } from '../../Redux/Actions/EmployeeAction';
import { toogleLoading } from "../../Redux/Actions/LoadingAction";
import { Button } from "../../Components/Buttons";
import BoxTitle from "../../Components/BoxTitle";
import IsEmpty from "../../Components/IsEmpty";
import Table from '../../Components/Table';
import Styles from './index.module.css'

const Employees = (props) => {
  const employees = useSelector((state) => state.Employee);
  const dispatch = useDispatch();
  const employeesArray = useMemo(()=>Object.values(employees),[employees]);

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

    },
    {
      title: 'Salário',
      dataIndex: 'salario',
      key: 'salario',
    },
    {
      title: 'Salário base',
      dataIndex: 'salario_base',
      key: 'salario_base'
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
      render: (props) =>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '8px' }}>
            <Button to={`/employees/store/${props?.id}`} >
              Editar
            </Button>
          </div>
          <Button typeStyleButton='red'
            onClick={() => _deleteEmployee(props?.id)}>
            deletar
          </Button>
        </div>
    }

  ];

  const _fetchEmployees = () => {
    toogleLoading(true);
    dispatch(fetchEmployees({}, {
      callback: () => setTimeout(() => { dispatch(toogleLoading(false)) }, 2000),
      fallback: () => dispatch(toogleLoading(false))
    }))
  }

  const _deleteEmployee = (id) => {
    dispatch(toogleLoading(true));
    dispatch(deleteEmployee({ id }, {
      callback: () => dispatch(toogleLoading(false)),
      fallback: () => dispatch(toogleLoading(false)),
    }))
  }

  useEffect(() => {
    _fetchEmployees()
  }, [])

  return (
    <div className={Styles.container}>

      <div className={Styles.containerTable}>
        <BoxTitle
          title='Funcionários'
          componentRight={<div><Button to='/employees/store'>Novo</Button></div>}
        />

        <Table
          columns={columns}
          dataSource={employeesArray}
          visible={employeesArray?.length>0}
        />

        <IsEmpty visible={employeesArray?.length===0} title='Nenhum funcionário encontrado' />
      </div>
    </div>
  )
}

export default Employees;
