
export const maskEventInputCpf = (event) => {
  let value = event.currentTarget.value;
  if (event.type == 'keyup' && event.key !== 'Backspace') {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})/, '$1.');
    value = value.replace(/(\d{3})\.(\d{3})/, '$1.$2.');
    value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-');
  }
  event.currentTarget.value = value.slice(0, 14);
  return event
}

export const maskEventInputCurrency = (event) => {
  let value = event.currentTarget.value;
  if (event?.type === 'keyup' && event?.key != 'Backspace') {
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) + '';
    // pra ficar no Padrão monetário  BRL basta  ativar as proximas 3 linhas
    // value = value.replace(".", ",");
    // value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    //   event.currentTarget.value = 'R$ ' + value.replace(/(\d)(\d{3}),/g, "$1.$2,");
    event.currentTarget.value = value.replace(/(\d)(\d{3}),/g, "$1.$2,");
  }
  return event;
}

export const maskEventInputNumberOnly = (event) => {
  let value = event.currentTarget.value;
  if (event?.type === 'keyup' && event?.key != 'Backspace') {
    value = value.replace(/\D/g, '');
    event.currentTarget.value = value;
  }
  return event;
}
