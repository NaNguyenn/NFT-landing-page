import React from 'react'
import "./header.scss"
import searchIcon from '../../assets/icons/searchIcon.svg'
import headerDropDownIcon from '../../assets/icons/headerDropDownIcon.svg'
import headerPersonIcon from '../../assets/icons/headerPersonIcon.svg'
import headerWalletIcon from '../../assets/icons/headerWalletIcon.svg'


const Header = () => {
    return (
        <header className='header flex'>
            {/* Logo */}
            <div className="logo center">
                <span className="logoText">nftboss</span>
            </div>
            {/* Search Bar  */}
            <div className="searchBar center">
                <div className="searchBarIconContainer center">
                    <img src={searchIcon} alt="search" />
                </div>
                <input type="text" className='searchInput' placeholder='Collection, term or user' />
            </div>
            {/* Menu  */}
            <ul className="menus flex">
                <li className="menu">
                    <span>Explore</span>
                    <img src={headerDropDownIcon} className='dropdownIcon' alt="explore dropdown" />
                </li>
                <li className="menu">
                    <span>My Profile</span>
                </li>
                <li className="menu">
                    <span>Following</span>
                </li>
                <li className="menu">
                    <span>Activity</span>
                </li>
                <li className="menu">
                    <span>How It Works</span>
                </li>
                <li className="menu">
                    <span>Community</span>
                    <img src={headerDropDownIcon} className='dropdownIcon' alt="community dropdown" />
                </li>
            </ul>
            {/* Icons  */}
            <div className="icons center">
                <img className='headerIcon' src={headerPersonIcon} alt="profile" />
                <img className='headerIcon' src={headerWalletIcon} alt="wallet" />
            </div>
        </header>
    )
}

export default Header