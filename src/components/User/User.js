import React from "react";
import { Link } from "react-router-dom";
import SettingIcon from "../Icon/IdentificationIcon";
import Card from "../UI/Card";
import styles from "./User.module.css";
import BookingIcon from "../Icon/BookingIcon";
import StartIcon from "../Icon/StarIcon";
import Input from "../UI/Input";
import useForm from "../../hooks/useForm";
import ExclamationIcon from "../Icon/ExclamationIcon";
import useCheckConfirmPass from "../../hooks/useCheckConfirmPass";
import useHttp from "../../hooks/useHttp";
import Notification from "../UI/Notification";
import { useSelector } from "react-redux";
const User = () => {
  const { sendRequest, error, isLoading, isSuccess } = useHttp();
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser);
  const { isFormValidState, inputPasswordRef } =
    useForm();
  const {
    isPasswordMatch,
    setIsPasswordMatch,
    inputConfirmPassword,
    inputConfirmPasswordRef,
  } = useCheckConfirmPass();
  const changePasswordHandler = (e) => {
    e.preventDefault();

    const account = {
      idToken: currentUser.idToken,
      password: inputPasswordRef.current.value,
      returnSecureToken: true,
    };

    if (account.password !== inputConfirmPassword) {
      setIsPasswordMatch(false);
      return;
    }
    if (account.password === inputConfirmPassword) setIsPasswordMatch(true);
    sendRequest(
      "https://identitytoolkit.googleapis.com/v1/accounts:update",
      account
    );
  };
  return (
    <Card className={styles.user}>
      <ul className={styles.activity}>
        <li className={`${styles["link-box"]} ${styles.active} flex-align-ct`}>
          <SettingIcon />
          <Link className={`${styles.btn} btn`} to="/user-info">
            Info
          </Link>
        </li>
        <li className={`${styles["link-box"]} flex-align-ct`}>
          <BookingIcon />
          <Link className={`${styles.btn} btn`} to="/bookings">
            My Bookings
          </Link>
        </li>
        <li className={`${styles["link-box"]} flex-align-ct`}>
          <StartIcon />
          <Link className={`${styles.btn} btn`} to="/user-info">
            My Reviews
          </Link>
        </li>
      </ul>
      <div className={styles["about-box"]}>
        <div className={styles["about-user"]}>
          <form>
            <h2 className="heading-secondary">Create your account!</h2>
            <p className={styles.name}>Name</p>
            <div className={styles["name-box"]}>{currentUser.name}</div>
            <p className={styles.name}>Email Address</p>
            <div className={styles["name-box"]}>{currentUser.email}</div>
          </form>
        </div>
        <div className={styles["about-password"]}>
          <form onSubmit={changePasswordHandler}>
            <h2 className="heading-form">Change your password</h2>
            <Input
              isValid={isFormValidState.isPasswordValid}
              ref={inputPasswordRef}
              id="current-password"
              label="Current password"
              input={{ type: "password", placeholder: "••••••••" }}
            />
            <Input
              isValid={inputConfirmPassword.length >= 6}
              ref={inputConfirmPasswordRef}
              id="new-password"
              label="New password"
              input={{ type: "password", placeholder: "••••••••" }}
            />
            <div
              className={` ${
                isPasswordMatch ? "hidden" : "open"
              } confirm-password ${
                isPasswordMatch ? "" : "open"
              } flex-align-ct`}
            >
              <ExclamationIcon />
              <span>The entered password do not match.Let's try again.</span>
            </div>
            <div className={styles.action}>
              <button className="btn">Change password</button>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <Notification message="Changing password..." />}
      {!isLoading && isSuccess && (
        <Notification message="Change Password Successfully.!" />
      )}
      {error && (
        <Notification
          message={
            error === "TOKEN_EXPIRED" && "You need to Login and try again."
          }
        />
      )}
    </Card>
  );
};

export default User;
