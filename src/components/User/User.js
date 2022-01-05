import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SettingIcon from "../Icon/IdentificationIcon";
import Card from "../UI/Card";
import styles from "./User.module.css";
import BookingIcon from "../Icon/BookingIcon";
import StartIcon from "../Icon/StarIcon";
import Input from "../UI/Input";
import useForm from "../../hooks/useForm";
import useHttp from "../../hooks/useHttp";
import Notification from "../UI/Notification";
import { useSelector } from "react-redux";
import ExclamationIcon from "../Icon/ExclamationIcon";
const User = () => {
  const { sendRequest, error, isLoading, isSuccess } = useHttp();
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const currentUser = useSelector((state) => state.user);
  const inputNewPasswordRef = useRef();
  const { isFormValidState, inputPasswordRef } = useForm();
  const changePasswordHandler = (e) => {
    e.preventDefault();
    const account = {
      idToken: currentUser.idToken,
      password: inputNewPasswordRef.current.value,
      returnSecureToken: true,
    };
    if (currentUser.password !== inputPasswordRef.current.value) {
      setIsPasswordMatch(false);
      return;
    }
    sendRequest(
      "https://identitytoolkit.googleapis.com/v1/accounts:update",
      account
    );
    setIsPasswordMatch(true);
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
            {/* <h2 className="heading-secondary">Create your account!</h2>
            <p className={styles.name}>Name</p>
            <div className={styles["name-box"]}>{currentUser.name}</div> */}
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
            <div
              className={`confirm-password ${
                isPasswordMatch ? "hidden" : "open"
              } ${styles["confirm-box"]} ${
                isPasswordMatch ? "" : "open"
              } flex-align-ct`}
            >
              <ExclamationIcon />
              <span>
                Please make sure you're entered correct current password.
              </span>
            </div>
            <Input
              isValid={isFormValidState.isPasswordValid}
              ref={inputNewPasswordRef}
              id="new-password"
              label="New password"
              input={{ type: "password", placeholder: "••••••••" }}
            />

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
