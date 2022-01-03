import React, { useReducer, useRef, useState } from "react";
import useForm from "../../hooks/useForm";
import useHttp from "../../hooks/useHttp";
import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./LoginForm.module.css";
import { checkAllEntered } from "../../helper/helper";
import Notification from "../UI/Notification";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/user-slice";
const LoginForm = () => {
  const dispatch=useDispatch()
  const {
    dispatchIsFormValid,
    ACTIONS,
    inputEmailRef,
    inputPasswordRef,
    isFormValidState,
  } = useForm();
  const { sendRequest, isLoading, error, isSuccess } = useHttp();
  const submitRegisterAccountHandler = (e) => {
    e.preventDefault();

    const account = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      returnSecureToken: true,
    };
    if (!checkAllEntered(account.email, account.password)) return;
    dispatchIsFormValid({ type: ACTIONS.emailInput, value: account.email });
    dispatchIsFormValid({
      type: ACTIONS.passwordInput,
      value: account.password,
    });
    (async ()=>{
      const data=await sendRequest(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
        account
      );
      dispatch(userSliceActions.login({idToken:data.idToken,email:account.email}))
    })()
  };

  return (
    <Card className="login-form-box">
      <form
        className={styles["login-form"]}
        onSubmit={submitRegisterAccountHandler}
      >
        <h2 className="heading-secondary">Log into your account</h2>
        <Input
          ref={inputEmailRef}
          isValid={isFormValidState.isEmailValid}
          id="email"
          label="Email address"
          input={{ type: "email", placeholder: "yourEmail@gmail.com" }}
        />
        <Input
          ref={inputPasswordRef}
          isValid={isFormValidState.isPasswordValid}
          id="password"
          label="Password"
          input={{ type: "password", placeholder: "••••••", minLength: 6 }}
        />
        <button className="btn">Login</button>
      </form>
      {isLoading && <Notification message="Login..." />}
      {error && <Notification message={error} />}
      {isSuccess && <Notification message="Login successfully.!" />}
    </Card>
  );
};

export default LoginForm;
