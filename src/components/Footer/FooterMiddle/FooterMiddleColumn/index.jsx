import React from 'react'
import './footerMiddleColumn.scss'

const FooterMiddleColumn = ({ title, items }) => {
    return (
        <div className="footerMiddleColumn flexCol">
            <span className="footerMiddleColumnTitle">
                {title}
            </span>
            {items.map((item) => (
                <span className="footerMiddleColumnItem">{item}</span>
            ))}
        </div>
    )
}

export default FooterMiddleColumn