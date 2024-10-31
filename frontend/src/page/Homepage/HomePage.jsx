import React from 'react'
import SalesAnalysis from '../../Components/SalesAnalysis/SalesAnalysis'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <div className='w-full h-full text-white'>
      <Navbar />
      <HeroSection />
      HomePage
      <SalesAnalysis />
      <div className='pt-20 flex w-20'>
        HomePage
        <SalesAnalysis />
        <SalesAnalysis />
        <SalesAnalysis />
        <SalesAnalysis />
      </div>
        
    </div>
  )
}

export default HomePage