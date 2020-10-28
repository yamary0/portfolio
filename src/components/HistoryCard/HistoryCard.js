import React from 'react'
import styles from './HistoryCard.module.scss'

const HistoryCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2>
                <span>{props.name}</span>
                <span>{props.major}</span>
                <small>{props.entranceYear} - {props.leaveYear}</small>
            </h2>
            {props.outcomes.map((outcome,key)=>(
                <p key={key}>{outcome}</p>
            ))}
            {props.failures.map((failure,key)=>(
                <p key={key}>{failure}</p>
            ))}
        </div>
    )
}

export default HistoryCard