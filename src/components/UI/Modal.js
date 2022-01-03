import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
const Modal = (props) => {
    
    const ModalEl=()=>{
        return  <section className={`${styles.modal} ${props.className} `}>
        {props.children}
    </section>
    }
    return ReactDOM.createPortal(<ModalEl />,document.getElementById('modal'))
}

export default Modal
