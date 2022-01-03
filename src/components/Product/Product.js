import React, { useCallback } from "react";
import Card from "../UI/Card";
import { cartSliceActions } from "../../store/Cart-slice";
import styles from "../utilitiesClassess/FullCard.module.css";
import ProductFeatures from "./ProductFeatures";
import { useDispatch } from "react-redux";
const Product = ({ id, description, title, price, features }) => {
  const dispatch = useDispatch();
  const productFeatures = features.map((feature) => (
    <ProductFeatures key={Math.random()} content={feature} />
  ));
  const addProductToCartHandler = useCallback(() => {
    const product = {
      id,
      title,
      price,
      quantity: 1,
    };
    dispatch(cartSliceActions.addProductToCart(product));
  }, [id, title, price,dispatch]);
  return (
    <Card className={styles["card"]}>
      <div className={styles["card-img-box"]}>
        <img src={require(`../Product/Img/${"p1"}.jpg`)} alt={`Tour ${id}`} />
        <p className={styles["card-title"]}>
          <span className={styles["card-title-top"]}>{title}</span>
          {/* <span className={styles["card-title-bottom"]}>
      
          </span> */}
        </p>
      </div>
      <div className={styles["card-details-box"]}>
        <h3>{`Natour ${title}`}</h3>
        <p
          className={`${styles["card-description"]} ${styles["product-description"]}`}
        >{`${description}`}</p>
        <div className={styles["card-details"]}>{productFeatures}</div>
      </div>
      <div className={`${styles["card-overview"]} flex-align-ct`}>
        <div>
          <p>
            <span className={styles["product-price"]}>{`$${price}`}</span>
          </p>
        </div>
        {/* <Link to={`products/${tourSegment}`} className="btn">
          Details
        </Link> */}
        <button onClick={addProductToCartHandler} className="btn">
          Buy Now!
        </button>
      </div>
    </Card>
  );
};

export default Product;
