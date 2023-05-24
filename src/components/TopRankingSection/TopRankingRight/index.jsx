import React from 'react'
import './topRankingRight.scss'
import TopRankingRightCard from './TopRankingRightCard'

const TopRankingRight = () => {
    const topRankingData = [
        { index: '1', title: 'CryptoFunks', verified: '', leftValue: '19,769.39', rightValue: '+26.52', color: 'green' },
        { index: '2', title: 'Cryptix', verified: 'hidden', leftValue: '2,769.39', rightValue: '+10.52', color: 'red' },
        { index: '3', title: 'Frensware', verified: 'hidden', leftValue: '9,232.39', rightValue: '+2.52', color: 'green' },
        { index: '4', title: 'PunkArt', verified: '', leftValue: '3,769.39', rightValue: '+1.52', color: 'green' },
        { index: '5', title: 'Art Crypto', verified: 'hidden', leftValue: '10,769.39', rightValue: '+2.52', color: 'red' }
    ]

    return (
        <div className='topRankingRight flexCol'>
            <span className="topRankingRightTitle">
                Top Collections over
            </span>
            <span className="topRankingRightSubtitle">
                Last 7 days
            </span>
            <div className="topRankingRightList flexCol">
                {topRankingData.map((data) => (
                    <TopRankingRightCard
                        index={data.index}
                        title={data.title}
                        verified={data.verified}
                        leftValue={data.leftValue}
                        rightValue={data.rightValue}
                        color={data.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default TopRankingRight