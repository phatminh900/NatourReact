import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import MenuIcon from "../Icon/MenuIcon";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CloseIcon from "../Icon/CloseIcon";
import logoWhite from "../img/logo-white.jpg";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const headerRef = useRef();
  const callBack = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersection) {
      setIsVisible(false);
    }
  };

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(headerEl);
    return () => {
      observer.unobserve(headerEl);
    };
  }, [options]);
  const toggleOpenNavHandler = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const closeNavHandler = () => {
    setIsNavOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} 
      ${isNavOpen ? styles["open-nav"] : ""}
       ${!isVisible ? styles.sticky : ""} flex-align-ct`}
    >
      <Navigation onCloseNavHandler={closeNavHandler} />
      <button
        onClick={toggleOpenNavHandler}
        className={`${styles["btn-mobile"]} ${styles.menu}`}
      >
        <MenuIcon />
      </button>
      <button
        onClick={toggleOpenNavHandler}
        className={`${styles["btn-mobile"]} ${styles.close}`}
      >
        <CloseIcon />
      </button>
      <img alt="Logo Natour" className={styles.logo} src={logoWhite} />
      <Link className={styles["shopping-cart"]} to="/check-out">
        <ShoppingCart />
      </Link>
    </header>
  );
};

export default Header;
