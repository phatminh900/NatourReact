import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './NotFound.module.css'
const NotFound = () => {
    const params=useParams()

    return (
        <section className={`${styles['not-found-box']} flex-align-ct`}>
            <p className={styles.waring}>UH OH! SOMETHING WENT WRONG!</p>
            <p>{`Can't find (${params['*']}) on this server!`}</p>
        </section>
    )
}

export default NotFound
