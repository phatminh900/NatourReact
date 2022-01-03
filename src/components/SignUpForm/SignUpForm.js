import React, { useRef } from "react";
import useForm from "../../hooks/useForm";
import useHttp from "../../hooks/useHttp";
import ExclamationIcon from "../Icon/ExclamationIcon";
import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./SignUpForm.module.css";
import { checkAllEntered } from "../../helper/helper";

import Notification from "../UI/Notification";
import useCheckConfirmPass from "../../hooks/useCheckConfirmPass";
const SignUpForm = () => {
  const { sendRequest, isLoading, error, isSuccess } = useHttp();
  // const inputNameRef = useRef();
  const inputConfirmPasswordRef = useRef();
  const { isPasswordMatch, setIsPasswordMatch } = useCheckConfirmPass();
  const { inputEmailRef, inputPasswordRef, isFormValidState } = useForm();
  const signUpHandler = (e) => {
    e.preventDefault();
    const inputConfirmPassword = inputConfirmPasswordRef.current.value;
    const account = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      returnSecureToken: true,
    };

    //prettier-ignore
    if ( !checkAllEntered(  inputConfirmPassword, account.email, account.password) ) return;

    if (account.password !== inputConfirmPassword) {
      setIsPasswordMatch(false);
      return;
    }

    if (account.password === inputConfirmPassword) setIsPasswordMatch(true);
    sendRequest(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp",
      account
    );
  };
  return (
    <Card className="login-form-box">
      <form onSubmit={signUpHandler}>
        <h2 className="heading-secondary">Create your account!</h2>
        {/* <Input ref={inputNameRef} id="name" label="Your Name" /> */}
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
          input={{ type: "password", placeholder: "••••••••" }}
        />
        <Input
          ref={inputConfirmPasswordRef}
          isValid={isFormValidState.isPasswordValid}
          id="confim-password"
          label="Confim Password"
          input={{ type: "password", placeholder: "••••••••" }}
        />
        <div
          className={`confirm-password ${isPasswordMatch ? "hidden" : "open"} ${
            styles["confirm-box"]
          } ${isPasswordMatch ? "" : "open"} flex-align-ct`}
        >
          <ExclamationIcon />
          <span>The entered password do not match.Let's try again.</span>
        </div>
        <button className="btn">Sign Up</button>
      </form>
      {isLoading && <Notification message="Registering..." />}
      {!isLoading && isSuccess && (
        <Notification message="Register Successfully.!" />
      )}
      {error && <Notification message={error} />}
    </Card>
  );
};

export default SignUpForm;
