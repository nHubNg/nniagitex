import React from 'react';
import { images } from './images'; 
import Navigation from './Navigation'
import Footer from './Footer';

const Roadshow = () => {
  return (
    <div>
      <Navigation />
      <div className="h-screen bg-[#05052bf6] text-center flex-col justify-center flex items-center px-6 sm:px-10 md:px-16 lg:px-20">
        <h1 className='text-4xl font-bold text-gray-300 '>GITEX Road Show</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
          GITEX AFRICA is dedicated to uncovering top-notch tech startups! The upcoming Gitex Africa 2024 event will spotlight premier startups during its 2nd edition. It's tailored to connect tech luminaries, founders, investors, and startup communities from Kenya, Ethiopia, Rwanda, Morocco, Nigeria, South Africa, Egypt, and beyond. Additionally, the GITEX Nigeria roadshow is set to tour Lagos, Abuja and Kaduna.
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default Roadshow;
