import React from "react";
import Loading from "../Loading/Loading";
import SuccessBooking from "../SuccessBooking/SuccessBooking";
import useBooking from "../../hooks/useBooking";
import styles from "./CheckOut.module.scss";
import Notification from "../UI/Notification";
const TotalOrder = ({ productsPrice, toursPrice }) => {
  const {
    showRemindLogin,
    setShowRemindLogin,
    isLoggin,
    isLoading,
    isSuccess,
    setIsLoading,
  } = useBooking(undefined);

  const totalPrice = toursPrice + productsPrice;
  // const {isLoading,isSuccess}
  const checkoutHandler = () => {
    if (!isLoggin) setShowRemindLogin(true);

    if (isLoggin && toursPrice) {
      setIsLoading(true);
    }
  };
  let content = (
    <div className={styles["total-order"]}>
      <h3>Order summary</h3>
      <p>
        <span>Tours Price :</span>
        <span>$ {toursPrice}</span>
      </p>
      <p>
        <span>Products Price :</span>
        <span>$ {productsPrice}</span>
      </p>
      <p>
        <span>Discount :</span>
        <span>$ 0</span>
      </p>
      <p>
        <span className={styles.total}>Total :</span>
        <span>$ {totalPrice}</span>
      </p>
      <button
        onClick={checkoutHandler}
        className={`${styles["checkout-btn"]} ${
          !totalPrice ? styles.disable : ""
        } btn `}
      >
        Check Out Now
      </button>
      {showRemindLogin && <Notification message="Please login first." />}
    </div>
  );
  if (isLoading) content = <Loading />;
  if (isSuccess) content = <SuccessBooking />;
  return content;
};

export default TotalOrder;
