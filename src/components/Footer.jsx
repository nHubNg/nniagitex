import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from '../assets/Group 1171278505.png';
import { images } from './images';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-[white] bg-[#05052bf6] py-8">
      <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between px-4">
        <div className="flex flex-col items-center md:items-left space-y-4 md:space-y-0 md:mr-8">
          <h1 className='font-bold tracking-wide mb-5 text-center md:text-left'>Contact Us</h1>
          <div className='bg-white flex w-fit rounded-lg justify-center'>
            <a href="https://nnia.ng/">
              <img src={images.logo} alt="" className='w-16 p-2'/>
            </a>
          </div>
          <div className="text-xl font-light pt-3 text-center md:text-left">+234 000 000 0000</div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-white my-5 text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-white my-5 text-2xl hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white my-5 text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white my-5 text-2xl hover:text-gray-400">
              <FaXTwitter />
            </a>
          </div>
          <div className='flex text-white text-center md:text-left text-xs font-extralight'>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 ml-2">Terms & Agreement</a>
          </div>
          <p className='text-center font-extralight py-2 text-xs'>Copyright 2023. All rights reserved</p>
        </div>
        <div className="text-center flex flex-col items-center md:text-left mt-4 md:mt-0">
          <h1 className='text-white font-bold mb-5 text-center md:text-left'>Quick Links</h1>
          <a href="#" className="text-white my-2 hover:text-gray-400">Learn More</a>
          <a href="https://nnia.ng/" className="text-white my-2 hover:text-gray-400">NNIA</a>
          <a href="#" className="text-white my-2 hover:text-gray-400">Help Center</a>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-white mb-5 font-bold">Address</p>
          <p className='text-center md:text-left'>
            2nd Floor Taen Business Complex Opposite <br /> Old NITEL office Jos, Plateau State.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
