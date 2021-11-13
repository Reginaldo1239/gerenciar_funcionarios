import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchEmployee, saveEmployee } from '../../../Redux/Actions/EmployeeAction';
import { toogleLoading } from '../../../Redux/Actions/LoadingAction';
import { Input } from '../../../Components/Inputs';
import { Button } from '../../../Components/Buttons';
import BoxTitle from '../../../Components/BoxTitle';
import {DEPENDENT_TO_DISCOUNT} from '../../../Constants/Common'
import Styles from './index.module.css';
export const Store = (props) => {
  const paramsFormData = {
    nome: '',
    cpf: '',
    salario: '',
    desconto: '',
    dependentes: '',
  }
  const history = useHistory();
  const routeParams = useParams();
  const [formData, setFormData] = useState(paramsFormData);
  const [formDataError, setFormDataError] = useState(paramsFormData);
  const [error, setError] = useState('');
  const employee = useSelector((state) => state.Employee[routeParams?.id]);
  const dispatch = useDispatch();


  const onHandelerFormData = (event) => {
    let { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }


  const _fetchEmployee = () => {
    fetchEmployee({ id: routeParams?.id }, {
      callback: () => null,
      fallback: () => null
    })
  }


  const onSubmitForm = () => {
    dispatch(toogleLoading(true));
    let formDataAux = formData;
    if (routeParams?.id) {
      formDataAux['id'] = routeParams?.id;
    }
    formDataAux['salario_base'] = calcSalaryBase(formDataAux);
    dispatch(saveEmployee(formData, {
      callback: (data) => setTimeout(() => {
         dispatch(toogleLoading(false))
         history.replace({ pathname: `/employees/store/${data.id}`, state: { isActive: true } });

        }, 2000),
      fallback: () => setTimeout(() => { dispatch(toogleLoading(false)) }, 2000),
    }))

  }
  const calcSalaryBase = (data) => {
    let { salario, desconto, dependentes, } = data;
    return (salario - desconto) - (dependentes * DEPENDENT_TO_DISCOUNT);
  }

  useEffect(() => {
    if (employee) {
      setFormData((prevState) => ({
        ...employee,
      }));
    }
  }, [employee?.id]);


  useEffect(() => {
    !employee && _fetchEmployee();
  }, [routeParams?.id])


  return (
    <div className={Styles.container}>
      <form>
        <BoxTitle title={routeParams?.id ? 'Editar funcionário' : 'Cadastrar funcionário'} />
        <Input
          fullWidth
          label='Nome'
          id='inputNome'
          name='nome'
          onChange={onHandelerFormData}
          value={formData.nome}
          messageError={formDataError.nome}
        />
        <Input
          fullWidth
          mask='cpf'
          label='Cpf'
          id='inputCpf'
          name='cpf'
          onChange={onHandelerFormData}
          value={formData.cpf}
          messageError={formDataError.cpf}

        />
        <Input
          fullWidth
          mask='currency'
          label='Salário'
          id='inputSalario'
          name='salario'
          onChange={onHandelerFormData}
          value={formData.salario}
          messageError={formDataError.salario}

        />
        <Input
          fullWidth
          mask='currency'
          label='Desconto'
          id='inputDesconto'
          name='desconto'
          onChange={onHandelerFormData}
          value={formData.desconto}
          messageError={formDataError.desconto}
        />
        <Input
          fullWidth
          mask='number'
          label='Dependentes'
          id='inputDependentes'
          name='dependentes'
          onChange={onHandelerFormData}
          value={formData.dependentes}
          messageError={formDataError.dependentes}
        />
        <Button onClick={onSubmitForm} >Salvar</Button>
      </form>
    </div>
  )
}
export default Store;
