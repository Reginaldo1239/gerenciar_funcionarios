import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchEmployee, saveEmployee } from '../../../Redux/Actions/EmployeeAction';
import { toogleLoading } from '../../../Redux/Actions/LoadingAction';
import { Input } from '../../../Components/Inputs';
import { Button } from '../../../Components/Buttons';
import BoxTitle from '../../../Components/BoxTitle';
import { DEPENDENT_TO_DISCOUNT } from '../../../Constants/Common'
import Styles from './index.module.css';
export const Store = (props) => {
  const initialParamsFormData = {
    nome: '',
    cpf: '',
    salario: '',
    desconto: '',
    dependentes: '',
  }
  const history = useHistory();
  const routeParams = useParams();
  const [formData, setFormData] = useState(initialParamsFormData);
  const [formDataError, setFormDataError] = useState(initialParamsFormData);
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
    if (validationForm()) {
      dispatch(toogleLoading(true));
      let formDataAux = formData;
      if (routeParams?.id) {
        formDataAux['id'] = routeParams?.id;
      }
      formDataAux['salario_base'] = calcSalaryBase(formDataAux);
      dispatch(saveEmployee(formData, {
        callback: (data) => setTimeout(() => {
          dispatch(toogleLoading(false))
          if (!routeParams?.id) {
            setFormData((prevState) => ({ ...initialParamsFormData }))
          }
        }, 2000),
        fallback: () => dispatch(toogleLoading(false)),
      }))
    }
  }
  const calcSalaryBase = (data) => {
    let { salario, desconto, dependentes, } = data;
    return (salario - desconto) - (dependentes * DEPENDENT_TO_DISCOUNT);
  }

  const validationForm = () => {
    let formValid = true;
    setFormDataError((prevState) => ({ ...initialParamsFormData }));
    for (let name in formData) {
      if (!formData[name]?.length === 0 || !formData[name]) {
        setFormDataError((prevState) => ({ ...prevState, [name]: "Campo obrigatório" }));
        formValid = false;
      }
    }
    return formValid;
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
