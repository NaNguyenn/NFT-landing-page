import React from 'react'
import "./infoSection.scss"
import wallet from '../../assets/icons/infoWalletIcon.svg'
import collection from '../../assets/icons/infoCollectionIcon.svg'
import nft from '../../assets/icons/infoNftsIcon.svg'
import sale from '../../assets/icons/infoSaleIcon.svg'
import InfoCard from './InfoCard'

const InfoSection = () => {
    const infoCardData = [
        { icon: wallet, title: 'Set up your wallet', detail: 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.' },
        { icon: collection, title: 'Create your collection', detail: 'Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.' },
        { icon: nft, title: 'Add your NFTs', detail: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.' },
        { icon: sale, title: 'List them for sale', detail: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!' }
    ]

    return (
        <div className="infoSection">
            <h2 className="infoSectionTitle">Create and sell your NFTs</h2>
            <div className="infoSectionList flex">
                {infoCardData.map((data) => (
                    <InfoCard
                        icon={data.icon}
                        title={data.title}
                        detail={data.detail}
                    />
                ))}
            </div>
        </div>
    )
}

export default InfoSection