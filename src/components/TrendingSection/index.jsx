import React from 'react'
import "./trendingSection.scss"
import dropdownIcon from '../../assets/icons/headerDropDownIcon.svg'
import TrendingCard from './TrendingCard'

const TrendingSection = () => {
    const trendingCardData = [
        { title: 'ETHEREALS WTF', subtitle: 'by  Souravwpap', detail: 'ETHEREALS are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulle...' },
        { title: 'ETHEREALS WTF', subtitle: 'by  Souravwpap', detail: 'ETHEREALS are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulle...' },
        { title: 'ETHEREALS WTF', subtitle: 'by  Souravwpap', detail: 'ETHEREALS are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulle...' }
    ]

    return (
        <div className='trendingSection'>
            <h2 className="trendingSectionTitle">
                Trending in <em>all categories</em>
                <img src={dropdownIcon} alt="" className="dropdownIcon" />
            </h2>
            <div className="trendingSectionShowcase flex">
                {trendingCardData.map((data) => (
                    <TrendingCard
                        title={data.title}
                        subtitle={data.subtitle}
                        detail={data.detail}
                    />
                ))}
            </div>
        </div>
    )
}

export default TrendingSection