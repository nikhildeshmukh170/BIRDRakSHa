import React from 'react';
import SalesAnalysis from '../../Components/SalesAnalysis/SalesAnalysis';
import Navbar from '../../Components/Navbar/Navbar';
import HeroSection from '../../Components/HeroSection/HeroSection';
import UploadSection from '../../Components/UploadSection/UploadSection';
import Footer from '../../Components/Footer/Footer';
import FAQs from '../../Components/FAQs/FAQs';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';


const HomePage = () => {
  return (
    <div className='w-full h-full text-white'>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Gradient overlays for visual effects */}
      <div className='absolute w-full h-[150px] sm:h-[200px] p-8 bg-gradient-to-b from-gray-900 to-transparent z-9 top-0 left-0'></div>
      <div className='absolute w-full h-[150px] sm:h-[200px] p-8 bg-gradient-to-b from-transparent to-black z-9 bottom-0 left-0'></div>
      
      {/* Upload Section */}
      <UploadSection />

      {/* Home Content */}
      <div className='pt-10 sm:pt-20 flex flex-col items-center'>
        <h1 className='text-lg sm:text-xl font-semibold mb-4'>HomePage</h1>

        {/* Sales Analysis Section with Responsive Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-4 sm:px-8'>
          <SalesAnalysis />
          <SalesAnalysis />
          <SalesAnalysis />
          <SalesAnalysis />
        </div>
      </div>

      {/* HowItWorks section */}
      <HowItWorks />

      {/* FAQs Section */}
      <FAQs />

      {/* Footer Section */}
      <Footer />

    </div>
  );
};

export default HomePage;
