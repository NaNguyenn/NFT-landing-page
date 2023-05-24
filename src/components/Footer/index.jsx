import React from 'react'
import './footer.scss'
import FooterUpper from './FooterUpper'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <footer className="footer">
            <FooterUpper />
            <FooterMiddle />
            <FooterBottom />
        </footer>
    )
}

export default Footer