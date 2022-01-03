import React, { forwardRef } from "react";
import styles from "./Input.module.css";
const Input = forwardRef((props, ref) => {
  const { id } = props;
  const {isValid}=props
  return (
    <>
      <div className={styles["form-row"]}>
        <label htmlFor={id}>{props.label}</label>
        <input
          ref={ref}
          id={id}
          required
          className={`${styles.input} ${isValid?'valid':'invalid'}`}
          {...props.input}
        />
      </div>
    </>
  );
});

export default Input;
