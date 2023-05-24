import React from 'react'
import "./topRankingMiddle.scss"
import TopRankingMiddleCard from './TopRakingMiddleCard'


const TopRankingMiddle = () => {
    return (
        <div className='topRankingMiddle flexCol'>
            <TopRankingMiddleCard title='CryptoFunks' verified='' />
            <TopRankingMiddleCard title='Frensware' verified='' />
            <TopRankingMiddleCard title='PunkArt' verified='hidden' />
        </div>
    )
}

export default TopRankingMiddle