import React from 'react'
import './footerMiddle.scss'
import FooterMiddleColumn from './FooterMiddleColumn'

const FooterMiddle = () => {
    const footerMiddleColumnData = [
        { title: 'Resources', items: ['Explore', 'Help center', 'Jobs', 'Become a partner', 'Bug bounty'] },
        { title: 'The Loop', items: ['Explore', 'Help center', 'Jobs', 'Become a partner', 'Bug bounty'] },
        { title: 'My Account', items: ['Profile', 'Favourites', 'Watchlist', 'My Collections', 'Settings'] },
        { title: 'Company', items: ['Explore', 'Help center', 'Jobs', 'Become a partner', 'Bug bounty'] },
    ]

    return (
        <div className='footerMiddle flex'>
            {footerMiddleColumnData.map((data) => (
                <FooterMiddleColumn
                    title={data.title}
                    items={data.items}
                />
            ))}
            <div className="footerMiddleRight flexCol">
                <span className="footerMiddleRightTitle">Stay in the loop</span>
                <span className="footerMiddleRightContent">
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
                </span>
                <div className="footerMiddleRightForm flex">
                    <input type="email" name="" id="" placeholder='your email address' className="footerMiddleRightFormInput" />
                    <button className="footerMiddleRightFormButton">Sign Up</button>
                </div>
            </div>
        </div >
    )
}

export default FooterMiddle