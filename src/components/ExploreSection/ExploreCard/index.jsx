import React from 'react'
import './exploreCard.scss'
import testingImage from '../../../assets/images/testingImage.png'
import verifiedIcon from '../../../assets/icons/verifiedIcon.svg'

const ExploreCard = ({ header, title, index, value, date }) => {
    return (
        <div className='exploreCard'>
            <div className="exploreCardHeader flex">
                <img src={testingImage} alt="" className="exploreCardImageSmall" />
                <span className="exploreCardHeaderText">by {header}</span>
                <img src={verifiedIcon} alt="" className="verifiedIcon" />
            </div>
            <img src={testingImage} alt="" className="exploreCardImageLarge" />
            <div className="exploreCardContent flexCol">
                <span className="exploreCardContentTitle">{title} #{index}</span>
                <span className="exploreCardContentSubtitle">From <em>{value}ETH</em> {date}</span>
                <span className="exploreCardContentButton">Buy Now</span>
            </div>
        </div>
    )
}

export default ExploreCard