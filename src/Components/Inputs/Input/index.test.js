import { render, screen, fireEvent } from '@testing-library/react';
import Styles from './index.module.css';
import { Input } from '../index';



describe('teste de atributos comuns', () => {
  const id='inputNome';
  const name='nome';
  const label='Nome';
  const setup = () => {
    const utils = render(<Input label={label} name={name}  onChange={() => null} id={id} />)
    const input = utils.getByLabelText(label)
    return {
      input,
      ...utils,
    }
  }
  test('esta tudo ok', () => {
    const { input,container } = setup()
    expect(container.getElementsByClassName(Styles.container).length).toBe(1);
    expect(container.getElementsByClassName(Styles.fullWidth).length).toBe(0);
    expect(input).toHaveAttribute('id',id);
    expect(input).toHaveAttribute('name',name);
  });
})

describe('teste de atributos comuns com classe fullWidth,e com boxMessageError', () => {
  const id='inputNome';
  const name='nome';
  const label='Nome';
  const messageError='Campo obrigatório'
  const setup = () => {
    const utils = render(<Input label={label} name={name} messageError={messageError} fullWidth  onChange={() => null} id={id} />)
    const input = utils.getByLabelText(label)
    return {
      input,
      ...utils,
    }
  }
  test('esta tudo ok', () => {
    const { input,container } = setup()
    expect(container.getElementsByClassName(Styles.boxMessageError)[0]).toHaveTextContent(messageError);
    expect(container.getElementsByClassName(Styles.container).length).toBe(1);
    expect(container.getElementsByClassName(Styles.fullWidth).length).toBe(1);
    expect(container.getElementsByClassName(Styles.boxMessageError).length).toBe(1);
    expect(input).toHaveAttribute('id',id);
    expect(input).toHaveAttribute('name',name);
  });
})

describe('teste do componente Input com mask="cpf"', () => {
  const setup = () => {
    const utils = render(<Input label='cpf' name='cpf' onChange={() => null} mask='cpf' id='inputCpf' />)
    const input = utils.getByLabelText('cpf')
    return {
      input,
      ...utils,
    }
  }

  test('testa com  numeros é esperado que retorne  numeros com pontos e hifen em locais determinados', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '44211111114' } })
    expect(input.value).toBe('442.111.111-14');
  });

  test('testa com letras e esperado que retorne uma string vazia ', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'aaaaaaaaaaaaaaaaaaaaa' } })
    expect(input.value).toBe('');
  });

  test('testa com letras e numeros é esperado que retorne numeros com pontos e hifen em locais determinados ', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '442d111a111a14' } })
    expect(input.value).toBe('442.111.111-14');
  });
})


describe('teste do componente Input com mask="number"', () => {
  const setup = () => {
    const utils = render(<Input label='Numero' name='number' onChange={() => null} mask='number' id='inputNumber' />)
    const input = utils.getByLabelText('Numero')
    return {
      input,
      ...utils,
    }
  }

  test('testa com apenas   numeros e é esperado que retorne todos os numeros digitados', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '1111111111111111' } })
    expect(input.value).toBe('1111111111111111');
  });

  test('testa com letras e é esperado que retorne uma string vazia ', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'aaaaaaaaaaaaaaaaaaaaa' } })
    expect(input.value).toBe('');
  });

  test('testa com letras e numeros é esperado que retorne  apenas os numeros ', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '442d111a111a14' } })
    expect(input.value).toBe('44211111114');
  });
});

describe('teste do componente Input com mask="currency"', () => {
  const setup = () => {
    const utils = render(<Input label='Moeda' name='currency' onChange={() => null} mask='currency' id='inputCurrency' />)
    const input = utils.getByLabelText('Moeda')
    return {
      input,
      ...utils,
    }
  }

  test('testa com apenas 1 numero digitado', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '1' } })
    expect(input.value).toBe('0.01');
  });

  test('testa com apenas 3 numeros digitados', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '123' } })
    expect(input.value).toBe('1.23');
  });

  test('testa com apenas 8 numeros digitados', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '10000000' } })
    expect(input.value).toBe('100000.00');
  });

  test('testa com letras é esquerado que retorne 0.00 ', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'aaaa' } })
    expect(input.value).toBe('0.00');
  });


});
