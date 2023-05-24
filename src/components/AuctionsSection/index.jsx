import React from 'react'
import "./auctionsSection.scss"
import AuctionCard from './AuctionCard'

const AuctionsSection = () => {
    return (
        <section className="auctionsSection">
            <h2 className="auctionsSectionTitle">Live Auctions</h2>
            <div className="auctionsContainer flex roundedBorder">
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
            </div>
        </section>
    )
}

export default AuctionsSection