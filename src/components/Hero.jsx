import React from 'react';
import '../App.css';
import { images } from './images';
import { FaDropbox } from "react-icons/fa6";
import Slider from '../components/Slider.jsx';
import { GiGiftOfKnowledge } from "react-icons/gi";
import { RiPresentationLine } from "react-icons/ri";
import { SiGotomeeting } from "react-icons/si";
const Hero = () => {
  return (
    <div className='bg-gray-200'>
      <div className='p-10 text-center md:w-[50%] mx-auto md:text-2xl '>
        <p>Are you ready to catapult your startup onto the global stage? Gitex and Wema Bank invites you on an adventure to unlock an extraordinary opportunity that could transform your entrepreneurial journey!</p>
      </div>
      <div className='flex justify-center'>
        <Slider />
      </div>
      <p className='text-center mt-10 md:text-6xl text-3xl font-semibold'>What's in store for your Start-up</p>
      <div className="flex flex-wrap justify-center">
        <div className='flex flex-col mx-auto justify-center items-center w-full md:w-[50%] lg:w-1/2'>
          <div className='flex justify-center flex-col items-center mx-4 my-4'>
            <RiPresentationLine className='mr-2 text-2xl text-[#05052bf6]' />
            <div className='w-[70%] text-center md:text-xl text-sm'>
              <h1 className='font-bold'> Pitch Competition</h1>
              <p>
              Go head-to-head with top startups spanning various industries, demonstrating your distinctive value proposition to a panel of experienced investors and industry leaders. This presents an opportunity to secure funding and forge valuable partnerships.
              </p>
            </div>
          </div>
          <div className='flex justify-center flex-col items-center mx-4 my-4'>
            <SiGotomeeting className='mr-2 text-2xl text-[#05052bf6]' />
            <div className='w-[70%] text-center md:text-xl text-sm'>
              <h1 className='font-bold'>Networking Opportunities</h1>
            <p> Establish valuable connections with key players in the global ecosystem, including potential partners, mentors, and investors. Expand your network and glean insights from industry leaders who are shaping the future of technology and entrepreneurship..</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col mx-auto justify-center w-full md:w-[50%] lg:w-1/2'>
          <div className='flex justify-left flex-col items-center mx-4 my-4'>
            <GiGiftOfKnowledge className='mr-2 text-2xl  text-[#05052bf6]' />
            <div className='w-[70%] text-center     md:text-xl text-sm'>
              <h1 className="font-bold">Exposure and Visibility </h1>
              <p>Achieve unparalleled global exposure for your startup by presenting your product or service to a diverse audience consisting of investors, media professionals, and industry influencers. This opportunity will amplify your brand's visibility and expand its reach significantly..</p>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col mx-4 my-4'>
            <FaDropbox className='mr-2 text-[#05052bf6] text-2xl' />
            <div className='w-[70%] text-center md:text-xl text-sm'>
              <h1 className="font-bold">Access to Resources</h1>
              <p>Take advantage of exclusive workshops, mentorship sessions, and tailored resources crafted to bolster your startup's growth trajectory. Access the wisdom and insights of seasoned professionals to navigate challenges effectively and propel your success forward at an accelerated pace.</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-[100%] h-screen mx-auto flex justify-center items-center' id='saveSpot'>
      <div className="bg-[#DEF4FF] h-[70%] w-[80%] rounded-[4rem] flex flex-col justify-center overflow-hidden">
       <span className='flex justify-center flex-col items-center'>

        <h1 className=' md:text-7xl text-3xl font-semibold mt-10' >Save your Spot</h1>
        <p className='font-light leading-7 text-center'>
        Don't miss this exciting opportunity to propel your startup to new heights.
        </p>
       </span>
       <div className='flex flex-col md:flex-row flex-wrap justify-around items-center '>
        <div className='flex flex-col justify-center items-center'>
          <a href="https://innovate.expandnorthstar.com/en/challenges/roadshow-nigeria-abuja24?lang=en">
      <button className='px-10 py-4 outline outline-1 rounded-lg outline-[#05052bf6] my-5 hover:bg-[#05052bf6] transition-all duration-300 hover:text-white'>Abuja</button>
          </a>
      <p>26th February 2024</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <a href="https://innovate.expandnorthstar.com/en/challenges/roadshow-nigeria-lagos24?lang=en">
      <button className='px-10 py-4 outline outline-1 rounded-lg outline-[#05052bf6] my-5 hover:bg-[#05052bf6] transition-all duration-300 hover:text-white'>Lagos</button>
      </a>
      <p>27th February 2024</p>
        </div>
        <div  className='flex flex-col justify-center items-center'>
          <a href="https://innovate.expandnorthstar.com/en/challenges/roadshow-nigeria-kaduna24?lang=en">
      <button className='px-10 py-4 outline outline-1 rounded-lg outline-[#05052bf6] my-5 hover:bg-[#05052bf6] transition-all duration-300 hover:text-white'>Kaduna</button>
      </a>
    <p>29th February 2024</p>
        </div>
       </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
