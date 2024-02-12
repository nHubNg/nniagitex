import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from '../assets/Group 1171278505.png';
import { images } from './images';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#6d6d9ff6] text-[#05052bf6] py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex flex-col  items-center space-y-4 md:space-y-0">
          <div className='bg-white flex justify-center items-center rounded-lg'>
            <a href="https://nnia.ng/">
              <img src={images.logo} alt="" className='w-24  p-3'/>
            </a>
          </div>
          <div className="text-xl font-light my-10">+234 000 000 0000</div>
          <div className="flex space-x-4 ">
            <a href="#" className="text-[#05052bf6] my-5 text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#05052bf6] my-5 text-2xl hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="#" className="text-[#05052bf6] my-5 text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#05052bf6] my-5 text-2xl hover:text-gray-400">
              <FaXTwitter />
            </a>
          </div>
          <div className='flex text-[#05052bf6] text-xs font-extralight '>
            <a href="#" className=" mx-2 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-gray-400">Terms & Agreement</a>
          </div>
        </div>
        <div className="text-center flex flex-col font-light md:text-left mt-4 md:mt-0">
          <a href="#" className="text-center text-[#05052bf6] my-2 hover:text-gray-400 mr-4">Learn More</a>
          <a href="https://nnia.ng/" className="text-center text-[#05052bf6] my-2 hover:text-gray-400 mr-4">NNIA</a>
          {/* <a href="#" className="text-center text-[#05052bf6] my-2 hover:text-gray-400 mr-4">Alat</a> */}
          <a href="#" className="text-center text-[#05052bf6] my-2 hover:text-gray-400 mr-4">Help Center</a>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-white">Address</p>
          <p className=''>
            2nd Floor Taen Business Complex Opposite <br /> Old NITEL office Jos, Plateau State.
          </p>
          <div className="mt-4">
          </div>
        </div>
      </div>
      <p className='text-center font-extralight mt-5 text-xs'>Copyright 2023. All rights reserved</p>
    </footer>
  );
};

export default Footer;
