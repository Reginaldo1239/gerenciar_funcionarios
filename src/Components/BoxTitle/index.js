import React from 'react';
import Styles from './index.module.css';
const BoxTitle = (props) => {
  const {
    title,
    componentRight = null,
  } = props;
  return (
    <div className={Styles.boxTitle}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {componentRight}
      </div>
    </div>
  )
}
export default BoxTitle;
