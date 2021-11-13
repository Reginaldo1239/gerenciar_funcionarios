import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Styles from './index.module.css';
const Loading = (props) => {
  const showLoading = useSelector((state) => state.Loading);
  useEffect(()=>{
    console.log(showLoading)
  },[showLoading])
  if (!showLoading.show) return null;
  return (
    <div className={Styles.containerLoading}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
export default Loading;
