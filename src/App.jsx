import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AuctionsSection from './components/AuctionsSection'
import TopRankingSection from './components/TopRankingSection'
import TrendingSection from './components/TrendingSection'
import ExploreSection from './components/ExploreSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import './App.scss'

const App = () => {
  return (
    <body>
      <Header />
      <main>
        <HeroSection />
        <AuctionsSection />
        <TopRankingSection />
        <TrendingSection />
        <InfoSection />
        <ExploreSection />
      </main>
      <Footer />
    </body>
  )
}

export default App