import React from "react";
import styles from "./TourDetails.module.css";
import CalendarIcon from "../Icon/CalendarIcon";
import TrendIcon from "../Icon/TrendIcon";
import PeopleIcon from "../Icon/PeopleIcon";
import StarIcon from "../Icon/StarIcon";
const TourDetails = ({
  title,
  date,
  difficulty,
  possiblePeople,
  rating,
  tourId,
  tourGuides,
}) => {
  return (
    <div className={styles["tour-details"]}>
      <div className={styles["tour-guide-box"]}>
        <div className={styles["tour-facts"]}>
          <h2 className="heading-secondary">Quick facts</h2>
          <p className="flex-align-ct">
            <CalendarIcon />{" "}
            <span className={styles["fact-title"]}>next date</span>{" "}
            <span className={styles["fact-detail"]}>{date}</span>
          </p>
          <p className="flex-align-ct">
            <TrendIcon />{" "}
            <span className={styles["fact-title"]}>Difficulty</span>{" "}
            <span className={styles["fact-detail"]}>{difficulty}</span>
          </p>
          <p className="flex-align-ct">
            <PeopleIcon />{" "}
            <span className={styles["fact-title"]}>Participants</span>{" "}
            <span className={styles["fact-detail"]}>{possiblePeople}</span>
          </p>
          <p className="flex-align-ct">
            <StarIcon /> <span className={styles["fact-title"]}>Rating</span>{" "}
            <span className={styles["fact-detail"]}>{rating} /5</span>
          </p>
        </div>
        <div className={styles["tour-guide"]}>
          <h2 className="heading-secondary">Your tour guides</h2>
          <figure>
            <div className={`${styles["tour-guide-box"]} flex-align-ct`}>
              <img
                alt="Tour img"
                src={require(`../img/users/t${tourId.slice(1)}.jpg`)}
              />
              <figcaption className={styles["tour-position"]}>
                Lead guide
              </figcaption>
              <span className={styles["tour-guide-name"]}>
                {tourGuides.leader}
              </span>
            </div>
            <div className={`${styles["tour-guide-box"]} flex-align-ct`}>
              <img
                alt="Tour img"
                src={require(`../img/users/t${+tourId.slice(1) + 1}.jpg`)}
              />
              <figcaption className={styles["tour-position"]}>
                Tour guide
              </figcaption>
              <span className={styles["tour-guide-name"]}>
                {tourGuides.tour1}
              </span>
            </div>
            <div className={`${styles["tour-guide-box"]} flex-align-ct`}>
              <img
                alt="Tour img"
                src={require(`../img/users/t${+tourId.slice(1) + 2}.jpg`)}
              />
              <figcaption className={styles["tour-position"]}>
                Tour guide
              </figcaption>
              <span className={styles["tour-guide-name"]}>
                {tourGuides.tour2}
              </span>
            </div>
          </figure>
        </div>
      </div>
      <div className={styles["tour-about"]}>
        <h2 className="heading-secondary">About {title} Tour</h2>
        <p>
          {" "}
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?"
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          laborum, facere explicabo ipsam quidem eos cumque non provident, quia
          expedita exercitationem alias? Voluptas, quis quidem? Quae ullam
          suscipit quis explicabo.
        </p>
      </div>
    </div>
  );
};

export default TourDetails;
