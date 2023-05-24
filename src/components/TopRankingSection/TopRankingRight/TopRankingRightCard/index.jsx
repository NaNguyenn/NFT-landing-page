import React from 'react'
import testingImage from '../../../../assets/images/testingImage.png'
import verifiedIcon from '../../../../assets/icons/verifiedIcon.svg'
import ethIcon from '../../../../assets/icons/ethIcon.svg'
import './topRankingRightCard.scss'

const TopRankingRightCard = ({ index, title, verified, leftValue, rightValue, color }) => {
    return (
        <div className='topRankingRightCard flex'>
            <span className="topRankingRightCardIndex">{index}</span>
            <img src={testingImage} alt="" className="topRankingRightCardImage" />
            <div className="topRankingRightCardContent">
                <div className="topRankingRightCardTitle flex">
                    <span>{title}</span>
                    <img src={verifiedIcon} alt="" className={`verifiedIcon ${verified}`} />
                </div>
                <div className="topRankingRightCardSubtitle flex">
                    <div className="topRankingRightCardSubtitleLeft flex">
                        <img src={ethIcon} alt="" className="ethIcon" />
                        <span>{leftValue}</span>
                    </div>
                    <span className={`topRankingRightCardSubtitleRight ${color}`}>
                        {rightValue}%
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TopRankingRightCard