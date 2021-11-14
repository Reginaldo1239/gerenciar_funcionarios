import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { toogleNotification } from '../../Redux/Actions/NotificationAction';
import Styles from './index.module.css';
const Notification = (props) => {
  const notification = useSelector((state) => state.Notification);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (notification?.show) {
      setTimeout(() => {
        dispatch(toogleNotification({ show: false, title: '' }));
      }, 3000);
    }
  }, [notification]);

  useEffect(() => {
    dispatch(toogleNotification({ show: false, title: '' }));
  }, [location?.pathname])


  if (!notification?.show) return null;
  return (
    <div className={Styles.containerNotification}>
      {notification?.title}
    </div>
  )
}
export default Notification;
