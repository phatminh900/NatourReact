import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import useOpenModal from "../../hooks/useOpenModal";
import Payment from "../Payment/Payment";
import Card from "../UI/Card";
import styles from "./TourBooking.module.css";
const TourBooking = ({ days, title, tour }) => {
  const { tours } = useSelector((state) => state.cart);
  const { isOpenModal, toggleModalState, setIsOpenModal } = useOpenModal();
  const [isAlreadyAdded, setIsAlreadyAdded] = useState(false);
  const checkIsAdded = tours.some((tourBooking) => tourBooking.id === tour.id);
  if (isOpenModal)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setIsOpenModal(false);
    });
  const closeModalHandler = useCallback(() => {
    setIsOpenModal(false);
    setIsAlreadyAdded(checkIsAdded);
  }, [checkIsAdded,setIsOpenModal]);
  return (
    <div className={styles["tour-booking-box"]}>
      <Card className={styles["tour-booking"]}>
        <h2 className="heading-secondary">What are you waiting for.?</h2>
        <p>{days} days. 1 adventure. Infinite memories. Make it yours today!</p>
        <button onClick={toggleModalState} className="btn">
          Book Tour Now!
        </button>
      </Card>
      {isOpenModal && (
        <Payment
          onCloseModalHandler={closeModalHandler}
          tour={tour}
          title={title}
          isAlreadyAdded={isAlreadyAdded}
        />
      )}
    </div>
  );
};

export default TourBooking;
