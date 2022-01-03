import React from "react";
import styles from "./TourImgBox.module.css";
const TourImgBox = ({ tourId }) => {
  return (
    <div className={`${styles["tour-img-box"]} `}>
      <img
        alt="Img box"
        src={require(`../img/tours/timg${+tourId.slice(1)}.jpg`)}
      />
      <img
        alt="Img box"
        src={require(`../img/tours/timg${+tourId.slice(1) + 1}.jpg`)}
      />
      <img
        alt="Img box"
        src={require(`../img/tours/timg${+tourId.slice(1) + 2}.jpg`)}
      />
    </div>
  );
};

export default TourImgBox;
