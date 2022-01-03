import React from 'react'
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../store/Cart-slice';
import styles from "./CheckOut.module.scss";
const TourItem = ({id,title,price}) => {
    const dispatch=useDispatch()
    const removeItemHandler=()=>{
        dispatch(cartSliceActions.removeTourFromCart(id));
  
      }
    return (
        <li className={styles["details-box"]}>
            <div className={styles['img-box']}>
          <img src={require(`../img/tours/${id}.jpg`)} alt="Product" />
            </div>
          <p className={styles.type}>Tour: {title}</p>
          <div className={styles["price-quantity"]}>
            <div>
              <p className={styles['tour-quantity']}>1</p>
            </div>
            <div className={styles.price}>$ {price}</div>
          </div>
          <button onClick={removeItemHandler}  className={styles['remove-item']}>&times;</button>
        </li>
        
    )
}

export default TourItem
