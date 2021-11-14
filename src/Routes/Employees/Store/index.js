import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { fetchEmployee, saveEmployee } from '../../../Redux/Actions/EmployeeAction';
import { toogleLoading } from '../../../Redux/Actions/LoadingAction';
import { toogleNotification } from '../../../Redux/Actions/NotificationAction';
import { Input } from '../../../Components/Inputs';
import { Button } from '../../../Components/Buttons';
import BoxTitle from '../../../Components/BoxTitle';
import { DEPENDENT_TO_DISCOUNT } from '../../../Constants/Common'
import { calculateBaseSalary, calculateIncomeTax } from '../../../Utils/Calculate';
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
    dispatch(toogleLoading(true));
    fetchEmployee({ id: routeParams?.id }, {
      callback: () => dispatch(toogleLoading(false)),
      fallback: () => dispatch(toogleLoading(false)),
    })
  }

  const onSubmitForm = () => {
    let formDataAux = formData;
    if (validationForm(formDataAux)) {
      dispatch(toogleLoading(true));
      if (routeParams?.id) {
        formDataAux['id'] = routeParams?.id;
      }
      formDataAux['salario_base'] = calculateBaseSalary(formDataAux);
      formDataAux['desconto_imposto_renda'] = calculateIncomeTax(formDataAux.salario_base);
      dispatch(saveEmployee(formData, {
        callback: (data) => {
          setTimeout(() => {
            if (!routeParams?.id) {
              setFormData((prevState) => ({ ...initialParamsFormData }))
            }
            dispatch(toogleLoading(false));
            dispatch(toogleNotification({ show: true, title: 'Salvo' }))
          }, 2000)
        },
        fallback: () => dispatch(toogleLoading(false)),
      }))
    }
  }

  const validationForm = (data) => {
    let errors = []
    setFormDataError((prevState) => ({ ...initialParamsFormData }));
    console.log(data)
    for (let name in data) {
      if (!data[name]?.length === 0) {
        setFormDataError((prevState) => ({ ...prevState, [name]: "Campo obrigatório" }));
        errors.push({ name: 'Campo obrigátorio' })
      }
    }
    return errors.length === 0;
  }

  useEffect(() => {
    if (employee) {
      setFormData((prevState) => ({
        nome: employee.nome,
        cpf: employee.cpf,
        salario: employee.salario,
        desconto: employee.desconto,
        dependentes: employee.dependentes,
      }));
    }
  }, [employee?.id]);


  useEffect(() => {
    (!employee && routeParams?.id) && _fetchEmployee();
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
