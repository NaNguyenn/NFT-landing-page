import React from 'react'
import './infoCard.scss'

const InfoCard = ({ icon, title, detail }) => {
    return (
        <div className="infoCard flexCol">
            <img src={icon} alt="" className="infoCardIcon" />
            <span className="infoCardTitle">{title}</span>
            <span className="infoCardDetail">{detail}</span>
        </div>
    )
}

export default InfoCard