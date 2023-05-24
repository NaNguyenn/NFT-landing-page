import React from 'react'
import "./topRankingSection.scss"
import TopRankingLeft from './TopRankingLeft'
import TopRankingMiddle from './TopRankingMiddle'
import TopRankingRight from './TopRankingRight'

const TopRankingSection = () => {
    return (
        <section className="topRankingSection">
            <h2 className="topRankingTitle">Top collections over last 7 days</h2>
            <div className="topRankingShowcase flex">
                <TopRankingLeft />
                <TopRankingMiddle />
                <TopRankingRight />
            </div>
            <button className="topRankingButton">
                Go to Rankings
            </button>
        </section>
    )
}

export default TopRankingSection