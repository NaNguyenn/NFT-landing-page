import React from 'react'
import './heroSection.scss'
import testingImage from '../../assets/images/testingImage.png'

const Hero = () => {
    return (
        <section className="heroSection flexCol">
            {/* Page titles  */}
            <h1 className="mainTitle">Collect digital art</h1>
            <span className="subTitle">Buy and sell NFTs from the world's top artists</span>
            {/* Hero Showcase  */}
            <div className="heroShowcase flex">
                <div className="columnLeft flexCol">
                    <span className="heroText" id='heroText1'>
                        Swap, earn, and build on the leading decentralized crypto trading protocol
                    </span>
                    <div className="verticalLarge">
                        <img src={testingImage} className='roundedBorder testingImage' alt="" />
                    </div>
                </div>

                <div className="columnRight flexCol">
                    <div className="rowUpper flex">
                        <div className="horizontalLarge">
                            <img src={testingImage} className='roundedBorder testingImage' alt="" />
                        </div>
                        <div className="rowUpperColumnRight flexcol">
                            <span className="heroText" id='heroText2'>
                                Developers, traders, and liquidity providers participate together in a financial marketplace that is open
                            </span>
                            <div className="rowUpperRowRight flex">
                                <div className="verticalSmall" id='verticalSmall1'>
                                    <img src={testingImage} className='roundedBorder testingImage' alt="" />
                                </div>
                                <div className="verticalSmall" id='verticalSmall2'>
                                    <img src={testingImage} className='roundedBorder testingImage' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rowLower flex">
                        <div className="squareSmall">
                            <img src={testingImage} className='roundedBorder testingImage' alt="" />
                        </div>
                        <div className="squareLarge">
                            <img src={testingImage} className='roundedBorder testingImage' alt="" />
                        </div>
                        <div className="verticalSmall" id='verticalSmall3'>
                            <img src={testingImage} className='roundedBorder testingImage' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero