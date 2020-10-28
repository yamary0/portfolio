import React from 'react'
// eslint-disable-next-line
import styles from './Card.module.scss'

const Card = (props) => {
    const imgPath = "/img/"+props.screenshot

    return (
        <div className={styles.wrapper}>
            <p>{props.title}</p>
            <a href={props.siteUrl} className={styles.ss}>
                <img src={imgPath} 
                 alt='img'
                />
            </a>
            <p>{props.description}</p>
            <p>{props.technique}</p>
        </div>
    )
}

export default Card
