import React from 'react'
import Card from '../../components/Card/Card'
import { Works } from './WorkList'
import Style from './Work.module.scss'

const Work = () => {
    return (
        <div className={Style.wrapper}>
            {Works.map((work,key) => (
                <Card 
                    title={work.title}
                    siteUrl={work.siteUrl}
                    screenshot={work.screenshot}
                    description={work.description}
                    technique={work.technique}
                    key={key}
                />
            ))}
        </div>
    )
}

export default Work
