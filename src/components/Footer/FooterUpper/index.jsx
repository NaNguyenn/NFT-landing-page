import React from 'react'
import appStoreIcon from '../../../assets/icons/appStoreIcon.svg'
import googlePlayIcon from '../../../assets/icons/googlePlayIcon.svg'
import Instagram from '../../../assets/icons/socialIcons/Instagram.svg'
import Facebook from '../../../assets/icons/socialIcons/Facebook.svg'
import LinkedIn from '../../../assets/icons/socialIcons/LinkedIn.svg'
import Pinterest from '../../../assets/icons/socialIcons/Pinterest.svg'
import Reddit from '../../../assets/icons/socialIcons/Reddit.svg'
import Tinder from '../../../assets/icons/socialIcons/Tinder.svg'
import Twitter from '../../../assets/icons/socialIcons/Twitter.svg'
import footerQR from '../../../assets/images/footerQR.svg'
import './footerUpper.scss'

const FooterUpper = () => {
    return (
        <div className="footerUpper flex">
            <div className="footerUpperLeft">
                <span className="footerUpperLeftText">Download the Rarible app
                    to explore any NFTs</span>
                <div className="downloadIcons">
                    <img src={appStoreIcon} alt="" className="downloadIcon" /><img src={googlePlayIcon} alt="" className="downloadIcon" />
                </div>
            </div>
            <div className="footerUpperMiddle flex">
                <img src={footerQR} alt="" className="footerQR" />
            </div>
            <div className="footerUpperRight">
                <span className="footerUpperRightText">Join Rarible community</span>
                <div className="socialIcons">
                    <img src={Instagram} alt="" className="socialIcon" /><img src={Facebook} alt="" className="socialIcon" /><img src={LinkedIn} alt="" className="socialIcon" /><img src={Pinterest} alt="" className="socialIcon" /><img src={Reddit} alt="" className="socialIcon" /><img src={Twitter} alt="" className="socialIcon" /><img src={Tinder} alt="" className="socialIcon" />
                </div>
            </div>
        </div>
    )
}

export default FooterUpper