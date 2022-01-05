
import { useSelector } from 'react-redux'
import styles from './BookingList.module.css'
const BookingList = () => {
    const {cart}=useSelector(state=>state)
    if(!cart.length) return   <p className={styles["notification"]}>
    You have not booked any items yet.
  </p>
    const totalPriceProducts=cart.products.reduce((total,product)=>total+(product.quantity*product.price),0)
    const totalPriceTours=cart.tours.reduce((total,product)=>total+product.price,0)

    const allProducts=[...cart.products,...cart.tours].map(item=>item.title).join(' ,')

    return (
    <div className={styles['booking-list']}>
        <div className={styles.heading}>
        <span>Name</span>
        <span>Time</span>
        <span>Total</span>
        </div>
        <ul>
            <li className={styles.product}>
                <p>{allProducts}</p>
                <p>{new Date().toLocaleDateString('vi')}</p>
                <p>$ {totalPriceProducts+totalPriceTours}</p>
            </li>
        </ul>
    </div>
    )
}

export default BookingList
