import React from 'react';
import Styles from './index.module.css';
const Content = (props)=>{
  const {children} = props;
  return(
    <div className={Styles.content}>
        {children}
    </div>
  )
}
export default Content;
