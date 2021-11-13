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
    fullWidth,
    messageError,
    value,
  } = props;

  const masks = {
    cpf: (event) => onChange(maskEventInputCpf(event)),
    currency: (event) => onChange(maskEventInputCurrency(event)),
    number: (event) => onChange(maskEventInputNumberOnly(event))
  }

  return (
    <div className={
      classNames(Styles.container)
    }>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      <div>
        <input
          className={
            classNames(
              fullWidth && Styles.fullWidth
            )
          }
          id={id}
          autoComplete='off'
          name={name}
          value={value}
          onChange={masks[mask] || onChange}
          onKeyUp={masks[mask]}
          onKeyDown={masks[mask]}

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
