import React from "react";
import styles from "./CheckOut.module.scss";
import { cartSliceActions } from "../../store/Cart-slice";
import { useDispatch } from "react-redux";

const ProductItem = ({ title, id, price, quantity }) => {
    const dispatch=useDispatch()
    const removeItemHandler=()=>{
      dispatch(cartSliceActions.removeItemFromCart(id));

    }

    const addProductHandler=()=>{
        dispatch(cartSliceActions.increaseProductFromCart({id}))
    }
    const removeProductHandler=()=>{
        dispatch(cartSliceActions.decreaseProductFromCart({id}))

    }
  return (
    <li className={styles["details-box"]}>
      <div className={styles["img-box"]}>
        <img src={require(`../img/products/${id}.jpg`)} alt="Product" />
      </div>
      <p className={styles.type}>Product: {title}</p>
      <div className={styles["price-quantity"]}>
        <div>
          <button onClick={removeProductHandler}  className={styles["adjust-quantity-btn"]}>-</button>
          <p>{quantity}</p>
          <button  onClick={addProductHandler} className={styles["adjust-quantity-btn"]}>+</button>
        </div>
        <div className={styles.price}>$ {price * quantity}</div>
        <button onClick={removeItemHandler}  className={styles['remove-item']}>&times;</button>

      </div>
    </li>
  );
};

export default ProductItem;
