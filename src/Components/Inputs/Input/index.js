import React, { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';
import {
  formatCpf,
  formatCurrency,
  formatNumberOnly
} from '../../../Utils/Format';
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
    cpf: (e) => {
      e.currentTarget.maxLength = 14;
      e.currentTarget.value = formatCpf(e.currentTarget.value);
      return e;
    },
    currency: (e) => {
      e.currentTarget.value = formatCurrency(e.currentTarget.value);
      return e;
    },
    number: (e) => {
      e.currentTarget.value = formatNumberOnly(e.currentTarget.value);
      return e;
    }
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
          autocomplete={autocomplete||'off'}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          onKeyUp={masks[mask] || null} />
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
