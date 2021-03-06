import React, { useCallback, useMemo } from "react";
import Modal from "../UI/Modal";
import styles from "./Payment.module.css";
import Logo from "../img/logo-white.jpg";
import Card from "../UI/Card";
import { cartSliceActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import Notification from "../UI/Notification";
import Loading from "../Loading/Loading";
import SuccessBooking from "../SuccessBooking/SuccessBooking";
import useBooking from "../../hooks/useBooking";
import { bookItem } from "../../store/user-slice";


const Payment = ({ isAlreadyAdded, title, onCloseModalHandler, tour }) => {
  const dispatch = useDispatch();

  const {
    showRemindLogin,
    setShowRemindLogin,
    isLogin,
    isLoading,
    isSuccess,
    setIsLoading,
  } = useBooking(tour.id);
  const bookingTour = useMemo(
    ()=>{

      return{
        id: tour.id,
        title: tour.title,
        price: tour.price,
      }
  },[tour.id,tour.title,tour.price]);
  const addTourToCartHandler = useCallback(() => {
   
    onCloseModalHandler();
    dispatch(cartSliceActions.addTourToCart(bookingTour));
  
    setShowRemindLogin(false);
  }, [
  
    dispatch,
    onCloseModalHandler,
    setShowRemindLogin,
    bookingTour
  ]);
  const payHandler = () => {
    if (!isLogin) setShowRemindLogin(true);
    if (isLogin) {
      setIsLoading(true);
      dispatch(bookItem([bookingTour]))
    }
  };
  let content = (
    <Modal>
      <Card className={`${styles.payment}`}>
        <div className={styles["payment-heading"]}>
          <div className={`${styles["logo-box"]} flex-align-ct`}>
            <img src={Logo} alt="Logo" />
          </div>
          <h2 className={`${styles["heading"]} heading-secondary`}>Natours</h2>
          <p>{title} Tour</p>
          <div onClick={onCloseModalHandler} className={styles["close-btn"]}>
            &times;
          </div>
        </div>
        <div className={styles["actions"]}>
          <button
            onClick={addTourToCartHandler}
            className={`${styles["add-to-cart"]} btn`}
          >
            Add To Cart
          </button>
          <button onClick={payHandler} className={`${styles["pay-now"]} btn`}>
            Pay 499 USD
          </button>
        </div>
        {isAlreadyAdded && (
          <Notification message="You're aleady added to cart." />
        )}
        {showRemindLogin && <Notification message="Please login first." />}
      </Card>
    </Modal>
  );
  // useEffect(()=>{
  //   let timer1
  //   let timer2
  //   if(isLoading){
  //     timer1=setTimeout(() => {
  //       setIsLoading(false)
  //       setIsSuccess(true)
  //     }, 1000);
  //   }
  //   if(isSuccess){
  //     timer2=setTimeout(() => {
  //       setIsSuccess(false)
  //   onCloseModalHandler();
  //   dispatch(cartSliceActions.removeTourFromCart(tour.id))

  //     }, 2000);
  //   }
  //   return ()=>{
  //     clearTimeout(timer1)
  //     clearTimeout(timer2)
  //   }
  // },[isLoading,isSuccess,onCloseModalHandler])
  if (isLoading) content = <Loading />;
  if (isSuccess) content = <SuccessBooking />;
  return content;
};

export default Payment;
