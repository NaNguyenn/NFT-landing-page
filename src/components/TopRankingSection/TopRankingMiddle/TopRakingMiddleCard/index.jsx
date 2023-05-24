import React from 'react'
import testingImage from '../../../../assets/images/testingImage.png'
import verifiedIcon from '../../../../assets/icons/verifiedIcon.svg'
import ethIcon from '../../../../assets/icons/ethIcon.svg'
import './topRankingMiddleCard.scss'

const TopRankingMiddleCard = ({ title, verified }) => {
    return (
        <div className='topRankingMiddleCard flex'>
            <img src={testingImage} alt="" className="topRankingMiddleCardImageLarge roundedBorder" />
            <div className="topRankingMiddleCardContent flexCol">
                <div className="topRankingMiddleCardTitle flex">
                    <span>{title}</span>
                    <img src={verifiedIcon} alt="" className={`${verified} verifiedIcon`} />
                </div>
                <div className="topRankingMiddleCardInfo flex">
                    <img src={testingImage} alt="" className="topRankingMiddleCardImageSmall" />
                    <div className="topRankingMiddleCardInfoLeft flex">
                        <img src={ethIcon} alt="" className="ethIcon" />
                        <span>0.25 ETH</span>
                    </div>
                    <span className="topRankingMiddleCardInfoRight">
                        1 of 8
                    </span>
                </div>
                <span className="topRankingMiddleCardButton">
                    Place a bid
                </span>
            </div>
        </div>
    )
}

export default TopRankingMiddleCard