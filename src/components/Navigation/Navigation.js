import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserIcon from "../Icon/UserIcon";
import styles from "./Navigation.module.css";
import { logout } from "../../store/user-slice";

const Navigation = ({ onCloseNavHandler }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logout());
  };
  let navLink = (
    <>
      <li>
        <Link
          className={`${styles["nav-btn"]} btn`}
          to="/login"
          onClick={onCloseNavHandler}
        >
          Log In
        </Link>

        <Link
          className={`${styles["nav-btn"]} ${styles["sign-up"]} btn`}
          to="/signup"
          onClick={onCloseNavHandler}
        >
          Sign Up
        </Link>
      </li>
    </>
  );
  if (currentUser.isLogin) {
    navLink = (
      <>
        <li>
          <Link
            onClick={logoutHandler}
            className={`${styles["nav-btn"]} btn`}
            to="/"
          >
            Log Out
          </Link>

          <Link
            onClick={onCloseNavHandler}
            className={`${styles["nav-btn"]} ${styles["user"]} flex-align-ct btn`}
            to="/user-info"
          >
            {/* <div className={styles['user-img-box']}> */}
            <UserIcon />
            {/* </div> */}
            <span className={styles["user-name"]}>User</span>
          </Link>
        </li>
      </>
    );
  }
  return (
    <nav className={styles.navigation}>
      <ul className={`${styles["nav-list"]} flex-align-ct`}>
        <li>
          <Link
            className={`${styles["header-link"]} btn`}
            to="/"
            onClick={onCloseNavHandler}
          >
            All Tours
          </Link>
          <Link
            className={`${styles["header-link"]} btn`}
            to="/products"
            onClick={onCloseNavHandler}
          >
            Products
          </Link>
        </li>

        {navLink}
      </ul>
    </nav>
  );
};

export default Navigation;
