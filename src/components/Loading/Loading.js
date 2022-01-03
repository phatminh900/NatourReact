import React from 'react'
import LoadingIcon from '../Icon/LoadingIcon'
import Modal from '../UI/Modal'
import styles from './Loading.module.css'
const Loading = () => {
    return (
        <Modal >
            <div className={styles.loading}>
            <LoadingIcon  />
            </div>
        </Modal>
    )
}

export default Loading
