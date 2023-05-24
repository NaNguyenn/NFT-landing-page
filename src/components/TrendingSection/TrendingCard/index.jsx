import React from 'react'
import testingImage from '../../../assets/images/testingImage.png'
import verifiedIcon from '../../../assets/icons/verifiedIcon.svg'
import './trendingCard.scss'

const TrendingCard = ({ title, subtitle, detail }) => {
    return (
        <div className='trendingCard roundedBorder'>
            <img src={testingImage} alt="" className="trendingCardImage" />
            <div className="trendingCardContent">
                <img src={testingImage} alt="" className="trendingCardLogo" />
                <div className="trendingCardHeader flex">
                    <span className="trendingCardTitle">{title}</span>
                    <span className="trendingCardSubtitle">{subtitle}</span>
                    <img src={verifiedIcon} alt="" className="verifiedIcon" />
                </div>
                <div className="trendingCardDetail">{detail}</div>
            </div>
        </div>
    )
}

export default TrendingCard