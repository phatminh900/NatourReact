import React from "react";
import FiveStars from "../FiveStars.js/FiveStars";
import styles from "./TourTestimonial.module.css";

const TourTestimonial = () => {
  return (
    <div className={styles["tour-testimonial"]}>
      <div className={styles["tour-wrapper"]}>
        <div className={styles["testimonial-box"]}>
          <figure className="flex-align-ct">
            <img src={require("../img/users/user-2.jpg")} alt='user Img' />
            <span className={styles["user"]}>Jim borwn</span>
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dignissimos sint quo commodi corrupti accusantium veniam saepe
            numquam.
          </p>
          <div className={styles['testimonial-rating-box']}>
          <FiveStars />

          </div>
        </div>
        <div className={styles["testimonial-box"]}>
          <figure className="flex-align-ct">
            <img src={require("../img/users/user-3.jpg")}  alt='user Img'/>
            <span className={styles["user"]}>LAURA WILSON</span>
          </figure>
          <p>
            Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga
            reiciendis provident deleniti cumque similique itaque animi,
            sapiente obcaecati beatae accusantium.
          </p>
          <div className={styles['testimonial-rating-box']}>
          <FiveStars />

          </div>
        </div>
        <div className={styles["testimonial-box"]}>
          <figure className="flex-align-ct">
            <img src={require("../img/users/user-4.jpg")}  alt='user Img'/>
            <span className={styles["user"]}>BEN HADLEY</span>
          </figure>
          <p>
            Debitis, nesciunt itaque! At quis officia natus. Suscipit,
            reprehenderit blanditiis mollitia distinctio ducimus porro tempore
            perspiciatis sunt vel.
          </p>
          <div className={styles['testimonial-rating-box']}>
          <FiveStars />

          </div>
        </div>
        <div className={styles["testimonial-box"]}>
          <figure className="flex-align-ct">
            <img src={require("../img/users/user-5.jpg")}  alt='user Img'/>
            <span className={styles["user"]}>ALEXANDER JONES</span>
          </figure>
          <p>
            Quaerat laborum eveniet ut aut maiores doloribus mollitia aperiam
            quis praesentium sed inventore harum aliquam veritatis at adipisci
            ea assumenda!
          </p>
          <div className={styles['testimonial-rating-box']}>
          <FiveStars />

          </div>
        </div>
        <div className={styles["testimonial-box"]}>
          <figure className="flex-align-ct">
            <img src={require("../img/users/user-6.jpg")}  alt='user Img'/>
            <span className={styles["user"]}>AYLA CORNELL</span>
          </figure>
          <p>
            Perferendis quo aliquid iste quas laboriosam molestias illo est
            voluptatem odit ea. Vero placeat culpa provident dicta maiores!
          </p>
          <div className={styles['testimonial-rating-box']}>
          <FiveStars />

          </div>
        </div>
        <div className={styles["testimonial-box"]}>
          <figure className="flex-align-ct">
            <img src={require("../img/users/user-7.jpg")}  alt='user Img'/>
            <span className={styles["user"]}>Jimmy Laura</span>
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dignissimos sint quo commodi corrupti accusantium veniam saepe
            numquam.
          </p>
          <div className={styles['testimonial-rating-box']}>
          <FiveStars />

          </div>
        </div>
      </div>
    </div>
  );
};

export default TourTestimonial;
