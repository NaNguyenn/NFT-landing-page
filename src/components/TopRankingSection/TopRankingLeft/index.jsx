import React from 'react'
import testingImage from '../../../assets/images/testingImage.png'
import verifiedIcon from '../../../assets/icons/verifiedIcon.svg'
import ethIcon from '../../../assets/icons/ethIcon.svg'
import "./topRankingLeft.scss"

const TopRankingLeft = () => {
    return (
        <div className='topRankingLeft'>
            <img src={testingImage} alt="" className="topRankingLeftImageLarge roundedBorder" />
            <div className="topRankingLeftInfo flex">
                <div className="topRankingLeftInfoLeft flex">
                    <img src={testingImage} alt="" className="topRankingLeftImageSmall" />
                    <div className="topRankingLeftInfoLeftContent">
                        <div className="topRankingLeftInfoLeftTitle flex">
                            <span>Frensware</span>
                            <img src={verifiedIcon} alt="" className="verifiedIcon" />
                        </div>
                        <span className="topRankingLeftInfoLeftSubtitle">10 in the stock</span>
                    </div>
                </div>
                <div className="topRankingLeftInfoRight">
                    <span className="topRankingLeftInfoRightTitle">Highest Bid</span>
                    <div className="topRankingLeftInfoRightContent flex">
                        <img src={ethIcon} alt="" className="ethIcon" />
                        <span>0.25 ETH</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRankingLeft