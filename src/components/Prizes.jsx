import React from 'react';
import { images } from './images'; 
import Navigation from './Navigation'
import Footer from './Footer';
const Prizes = () => {
  return (
    <div>
     <Navigation />
      <div className="px-6 sm:px-10 md:px-16 h-screen lg:px-20 pt-24 bg-[#05052bf6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Prizes - What awaits your startup</h2>
          <div className="text-white">
            <p className="mb-4"><strong>1. Return flight for 1 person:</strong> from their country of residence to Marrakech for GITEX Africa 2024 in Morocco.</p>
            <p className="mb-4"><strong>2. Accommodation for 1 person:</strong> for a maximum of 4 nights between for respective event (29th May - 31st May 2024 in Marrakech).</p>
            <p className="mb-4"><strong>3. A 2sqm fully built and branded startup pod:</strong> to exhibit at GITEX Africa 2024 from 29th May - 31st May 2024.</p>
            <p className="mb-4"><strong>4. Guaranteed entry to the Supernova Challenge 2024 Semi-Finals:</strong> at GITEX Africa 2024 (cash prizes up to $100,000).</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prizes;
