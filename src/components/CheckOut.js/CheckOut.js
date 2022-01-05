import React from "react";
import {  useSelector } from "react-redux";
import styles from "./CheckOut.module.scss";
import ProductItem from "./ProductItem";
import TotalOrder from "./TotalOrder";
import TourItem from "./TourItem";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart);
  const { products } = cart;
  const { tours } = cart;
  const toalPriceTours = tours.reduce((total, tour) => total + tour.price, 0);
  const totalPriceProducts = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const toursItem = tours.map((tour) => (
    <TourItem
      key={tour.id}
      id={tour.id}
      title={tour.title}
      price={tour.price}
    />
  ));
  const productsItem = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      quantity={product.quantity}
      price={product.price}
    />
  ));
  return (
    <section className={styles["checkout-box"]}>
      <h2 className="heading-secondary">Your Cart</h2>
      <div className={styles.checkout}>
        <ul className={styles.cart}>
          {products.length || tours.length ? (
            <>
              {toursItem}
              {productsItem}
            </>
          ) : (
            <p className={styles["notification"]}>
              Nothing in cart. Shopping Now.!
            </p>
          )}
        </ul>

        <TotalOrder
          productsPrice={totalPriceProducts}
          toursPrice={toalPriceTours}
        />
      </div>
    </section>
  );
};

export default CheckOut;
