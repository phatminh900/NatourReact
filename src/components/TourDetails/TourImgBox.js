import React from 'react'
import styles from './TourImgBox.module.css'
const TourImgBox = ({tourId}) => {
    return (
        <div className={`${styles['tour-img-box']} `}>
          <img src={require(`../img/tours/timg${+tourId.slice(1)}.jpg`)} />
          <img src={require(`../img/tours/timg${+tourId.slice(1)+1}.jpg`)} />
          <img src={require(`../img/tours/timg${+tourId.slice(1)+2}.jpg`)} />
      </div>
    )
}

export default TourImgBox
