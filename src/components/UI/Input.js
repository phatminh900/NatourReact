import React, { forwardRef, useState } from "react";
import EyeIcon from "../Icon/EyeIcon";
import CloseEye from "../Icon/CloseEye";
import styles from "./Input.module.css";
const Input = forwardRef((props, ref) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const { id } = props;
  const { isValid } = props;
  if (!props.input) return <></>;
  const { type } = props.input;
  const toggleShowPasswordHanlder = () => {
    setIsShowPass((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles["form-row"]}>
        <label htmlFor={id}>{props.label}</label>
        <input
          ref={ref}
          id={id}
          required
          className={`${styles.input} ${isValid ? "valid" : "invalid"}`}
          {...props.input}
          type={isShowPass ? "text" : type}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={toggleShowPasswordHanlder}
            className={styles.eye}
          >
           {isShowPass?<EyeIcon/>:<CloseEye/>}
          </button>
        )}
      </div>
    </>
  );
});

export default Input;
