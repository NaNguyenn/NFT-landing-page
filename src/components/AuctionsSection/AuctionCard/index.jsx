import React from 'react'
import "./auctionCard.scss"
// import testingImage from '../../../assets/images/testImage.webp'

const AuctionCard = () => {
    return (
        <div className='auctionCard flexCol roundedBorder'>
            {/* <img src={testingImage} alt="" className="auctionImage" /> */}
            <div className="auctionContentContainer center roundedBorder">
                <div className="auctionContent">
                    <span className="auctionTitle">Fallwoer's Bath Water</span>
                    <div className="auctionTimes flex">
                        <div className="auctionTime">
                            <span className="auctionTimeNumber">07</span>
                            <span className="auctionTimeText">hr</span>
                        </div>
                        <div className="auctionTime">
                            <span className="auctionTimeNumber">45</span>
                            <span className="auctionTimeText">mi</span>
                        </div>
                        <div className="auctionTime">
                            <span className="auctionTimeNumber">28</span>
                            <span className="auctionTimeText">sec</span>
                        </div>
                    </div>
                    <span className="auctionBid">current bid: $877.00</span>
                </div>
            </div>
        </div>
    )
}

export default AuctionCard