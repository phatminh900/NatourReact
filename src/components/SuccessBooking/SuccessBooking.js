import React from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from "./SuccessBooking.module.css";
const SuccessBooking = ({ title = "tour" }) => {
  return (
    <Modal>
      <Card className={styles.success}>
        <p>
          Yeah. You booked {title} successfully.Check the email for the ticket.
        </p>
        <p className={styles.congratulation}>Have a great trip!❤️</p>
      </Card>
    </Modal>
  );
};

export default SuccessBooking;
