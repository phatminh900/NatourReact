import React, { useEffect, useState } from "react";
import styles from "./ShoppingCart.module.scss";
import ShoppingCartIcon from "../Icon/ShoppingCart";
import { useSelector } from "react-redux";
const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const [added, setAdded] = useState(false);
  const quantityProducts = cart.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const cartQuantity = cart.tours.length + quantityProducts;

  useEffect(() => {
    if (!cartQuantity) return;
    setAdded(true);
    const timer = setTimeout(() => {
      setAdded(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);
  return (
    <div className={`${styles["cart"]} ${added ? styles.bump : ""}`}>
      <div className={`${styles["cart-quantity"]} flex-align-ct`}>
        {cartQuantity}
      </div>
      <ShoppingCartIcon />
    </div>
  );
};

export default ShoppingCart;
