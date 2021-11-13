
export const maskEventInputCpf = (event) => {
  let value = event.currentTarget.value;
  console.log(event)
  if (event.key == 'Backspace' || event.nativeEvent.inputType === 'deleteContentBackward') {
    return event;
  }


  if (event.type == 'change') {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})/, '$1.');
    value = value.replace(/(\d{3})\.(\d{3})/, '$1.$2.');
    value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-');
    event.currentTarget.value = value.slice(0, 14);
    return event
  }
  return event
}


export const maskEventInputCurrency = (event) => {
  let value = event.currentTarget.value;
  if (event.key == 'Backspace' || event.nativeEvent.inputType === 'deleteContentBackward') {
    return event;
  }
  if (event?.type === 'change') {
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) + '';
    value = value.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3.");
    value = value.replace(/(\d)(\d{3}),/g, "$1.$2.");
    event.currentTarget.value = value;
    return event
  }
  return event;
}


export const maskEventInputNumberOnly = (event) => {
  let value = event.currentTarget.value;
  if (event.key == 'Backspace' || event.nativeEvent.inputType === 'deleteContentBackward') {
    return event;
  }
  if (event?.type === 'change') {
    value = value.replace(/\D/g, '');
    event.currentTarget.value = value;
  }
  return event;
}
