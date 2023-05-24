import React from 'react'
import "./exploreSection.scss"
import ExploreCard from './ExploreCard'

const ExploreSection = () => {
    const exploreCardData = [
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'PunkArt', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Frensware', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'CryptoFunks', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' },
        { header: 'Sourawvpap', title: 'Manneko', index: '002', value: '0.018ETH', date: '15/22' }
    ]

    return (
        <div className="exploreSection">
            <h2 className="exploreSectionTitle">Explore</h2>
            <div className="exploreSectionShowcase flex">
                {exploreCardData.map((data) => (
                    <ExploreCard
                        header={data.header}
                        title={data.title}
                        index={data.index}
                        value={data.value}
                        date={data.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExploreSection