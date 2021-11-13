import React from 'react';
import Styles from './index.module.css';
const IsEmpty = (props) => {
  const { title, visible } = props;
  if (!visible) return null;
  return (
    <div className={Styles.containerIsEmpty}>
      <h4>{title || 'Sua lista está vazia'}</h4>
    </div>
  )
}
export default IsEmpty;
