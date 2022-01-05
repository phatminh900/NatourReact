import { useSelector } from "react-redux";
import styles from "./BookingList.module.css";
const BookingList = () => {
  const { booked: bookedItems } = useSelector((state) => state.user);

  if (!bookedItems.length)
    return (
      <p className={styles["notification"]}>
        You have not booked any items yet.
      </p>
    );

  const allBookedItems = bookedItems.map((item) => item.title).join(" ,");
  const totalPrice = bookedItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles["booking-list"]}>
      <div className={styles.heading}>
        <span>Name</span>
        <span>Total</span>
      </div>
      <ul>
        <li className={styles.product}>
          <p>{allBookedItems}</p>
          <p>$ {totalPrice}</p>
        </li>
      </ul>
    </div>
  );
};

export default BookingList;
