import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Aboutus from '../../Components/Aboutus/Aboutus'

const AboutUs = () => {
  return (
    <div className='w-full h-full text-white'>
      <div className='absolute w-full h-[150px] sm:h-[200px] p-8 bg-gradient-to-b from-gray-900 to-transparent z-10 top-0 left-0'></div>
      <Navbar />
      <Aboutus />
      <Footer />
    </div>
  )
}

export default AboutUs