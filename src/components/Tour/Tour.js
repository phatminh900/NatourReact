import React from "react";
import Card from "../UI/Card";
import LocationIcon from "../Icon/LocationIcon";
import CalendarIcon from "../Icon/CalendarIcon";
import FlagIcon from "../Icon/FlagIcon";
import PeopleIcon from "../Icon/PeopleIcon";
import { Link } from "react-router-dom";
import styles from '../utilitiesClassess/FullCard.module.css';
import { splitTitle } from "../../helper/helper";
const Tour = ({
  date,
  days,
  description,
  price,
  difficulty,
  rating,
  location,
  possiblePeople,
  stops,
  title,
  id,
  ratingQuantity,
}) => {
  const tourSegment=title.toLowerCase().split(' ').join('-')
  return (
    <Card className={styles.card}>
      <div className={styles["card-img-box"]}>
        <img src={require(`../img/tours/${id}.jpg`)} alt={`Tour ${id}`} />
        <p className={styles["card-title"]}>
          <span className={styles["card-title-top"]}>
            {splitTitle(title, 0, 2)}
          </span>
          <span className={styles["card-title-bottom"]}>
            {splitTitle(title, 2)}
          </span>
        </p>
      </div>
      <div className={styles["card-details-box"]}>
        <h3>{`${difficulty} ${days}-day tour`}</h3>
        <p className={styles["card-description"]}>{`${description}`}</p>
        <div className={styles["card-details"]}>
          <p>
            <LocationIcon />
            <span>{location}</span>{" "}
          </p>
          <p>
            <CalendarIcon />
            <span>{date}</span>{" "}
          </p>
          <p>
            <FlagIcon />
            <span>{stops} stops</span>{" "}
          </p>
          <p>
            <PeopleIcon />
            <span>{possiblePeople} people</span>{" "}
          </p>
        </div>
      </div>
      <div className={`${styles["card-overview"]} flex-align-ct`}>
        <div>
          <p>
            <span className={styles.price}>{`$${price}`}</span> per person
          </p>
          <p>
            <span className={styles.rating}>{rating}</span> rating (
            {ratingQuantity})
          </p>
        </div>
        <Link to={`tours/${tourSegment}`} className="btn">
          Details
        </Link>
      </div>
    </Card>
  );
};

export default Tour;
