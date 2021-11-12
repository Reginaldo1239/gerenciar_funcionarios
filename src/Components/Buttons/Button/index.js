import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Styles from './index.module.css';
const Button = (props) => {
  const {
    title,
    type,
    to,
    onClick,
    children,
    fullWidth,
    typeStyleButton
  } = props;

  const typeStyle = {
    red: Styles.buttonRed
  }


  if (to) {
    return (
      <Link
        to={to} >
        <button className={
          classNames(
            Styles.button,
            fullWidth && Styles.fullWidth,
            typeStyle[typeStyleButton],
          )}>
          {title || children}
        </button>
      </Link >
    )
  }

  return (
    <button
      type={type || 'button'}
      className={
        classNames(
          Styles.button,
          fullWidth && Styles.fullWidth,
          typeStyle[typeStyleButton],
        )
      }
      onClick={onClick}
    >
      {title || children}
    </button>
  )
}
export default Button;
