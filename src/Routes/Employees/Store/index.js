import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Input } from '../../../Components/Inputs';
import { Button } from '../../../Components/Buttons';
import BoxTitle from '../../../Components/BoxTitle';
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

  const onHandelerFormData = (event) => {
    let { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const onSubmitForm = () => {

    history.replace({ pathname: `/employees/store/${1}`, state: { isActive: true } });

  }

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
          value={formData.name}
          messageError={formDataError.name}
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
