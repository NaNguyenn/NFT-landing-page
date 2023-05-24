import React from 'react'
import './footerBottom.scss'

const FooterBottom = () => {
    return (
        <div className="footerBottom flex">
            <div className="footerBottomLeft">
                <span>© 2018 - 2022 NFTbOSS, Inc</span>
            </div>
            <div className="footerBottomRight flex">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    )
}

export default FooterBottom