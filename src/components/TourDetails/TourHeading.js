import React from 'react'
import { splitTitle } from '../../helper/helper'
import styles from './TourHeading.module.css'
import ClockIcon from '../Icon/ClockIcon'
import LocationIcon from '../Icon/LocationIcon'
const TourHeading = ({title,tourId,location}) => {
    return (
        <div className={styles["tour-heading"]}>
        <img src={require(`../img/tours/${tourId}.jpg`)} />
        <div className={`${styles["tour-title"]} flex-align-ct`}>
          <span className={styles["tour-title-top"]}>
            {splitTitle(title, 0, 2)}
          </span>
          <span className={styles["tour-title-bottom"]}>
            {splitTitle(title, 2)} tour
          </span>
        <p className={`${styles['tour-icon-box']} `}>
          <span className="flex-align-ct"><ClockIcon/>10 days</span>
          <span className="flex-align-ct"><LocationIcon />{location}</span>
        </p>
        </div>
      </div>
    )
}

export default TourHeading
