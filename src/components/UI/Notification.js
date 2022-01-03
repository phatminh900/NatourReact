import React from "react";
import ReactDOM from "react-dom";
import styles from "./Notification.module.css";
const Notification = props => {
  const NotificationEl = () => {
    return (
      <div className={styles.notification}>
        <p>{props.message}</p>
      </div>
    );
  };
  return ReactDOM.createPortal(<NotificationEl/>,document.querySelector('#notification'));
};

export default Notification;
