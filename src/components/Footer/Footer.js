import React from "react";
import logo from "../img/logo-green.jpg";
import styles from "./Footer.module.css";
const Footer = () => {

  return (
    <footer className={`${styles.footer} flex-align-ct`}>
      <img src={logo} alt="logo" />
      <div className={styles.details}>
        <a href="/#">About us</a>
        <a href="/#">Download apps</a>
        <a href="/#">Become a guide</a>
        <a href="/#">Carrers</a>
        <a href="/#">Contact</a>
        <p className={styles.copyright}>
          &copy; by Jonas Schmedtmann.(I get inspiration from his project with
          some new features I evolve.)
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
