import React from 'react'
import styles from './History.module.scss'
import Card from '../../components/HistoryCard/HistoryCard'
import { Schools } from './HistoryList'

const History = () => {
    return (
        <div className={styles.wrapper}>
            {
                Schools.map((school,key)=>(
                    <Card 
                        name={school.name}
                        major={school.major}
                        entranceYear={school.entranceYear}
                        leaveYear={school.leaveYear}
                        outcomes={school.outcomes}
                        failures={school.failures}
                        key={key}
                    />
                ))
            }
        </div>
    )
}

export default History
