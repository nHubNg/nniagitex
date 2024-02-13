import React from 'react';
import logo from '../assets/Group 1171278505.png';
import { HiArrowSmRight } from "react-icons/hi";
import { images } from './images';
import Navigation from './Navigation';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <>
      <Navigation style={{ zIndex: 1000 }} /> 
    <div className="relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[#05052bf6] opacity-95 z-10"></div>
      <div className='hero relative h-screen'>
        <img src={images.hero} className='w-screen h-full bg-no-repeat bg-fixed' alt="" />
        <div className="absolute top-[50%] md:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-80 z-20">
          <h1 className='text-center text-4xl md:text-7xl font-bold w-screen '> NNIA, COMMUNITY <br /> PARTNER TO  GITEX Africa</h1>
          <p className='text-center text-sm  md:w-[50%] md:mx-auto mx-3 font-light leading-loose'>Embark on a journey of innovation at GITEX Africa 2024 – where 
          trailblazers and visionaries gather.
          Pitch your idea for a chance to win a trip to Marrakech,
          Morocco, and elevate your startup from Northern Nigeria to the global stage.</p>
          <div className='flex justify-center my-10'>
          <Link to="saveSpot" smooth={true} duration={500} className='bg-gradient-to-tr cursor-pointer from-[#ff2169] to-[#e62d8e] p-3 rounded-lg'>Save a spot</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
