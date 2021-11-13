import React, { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';
import {
  maskEventInputCpf,
  maskEventInputCurrency,
  maskEventInputNumberOnly
} from '../../../Utils/MaskInput';
import Styles from './index.module.css';
export default function Input(props) {
  const {
    mask,
    id,
    name,
    label,
    onChange,
    placeholder,
    fullWidth,
    messageError,
    autocomplete,
    value,
  } = props;

  const masks = {
    cpf: (event) => maskEventInputCpf(event),
    currency: (event) => maskEventInputCurrency(event),
    number: (event) => maskEventInputNumberOnly(event)
  }



return (
  <div className={
    classNames(Styles.container)
  }>
    <div>
      <label for={id}>{label}</label>
    </div>
    <div>
      <input
        className={
          classNames(
            fullWidth && Styles.fullWidth
          )
        }
        id={id}
        autocomplete={autocomplete || 'off'}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={masks[mask] || null}
        onKeyDown={masks[mask] || null}

      />
    </div>
    <div className={
      classNames(
        Styles.boxMessageError,
        messageError && Styles.boxMessageErrorShow
      )
    }>
      <span>{messageError}</span>
    </div>
  </div>
)
}
