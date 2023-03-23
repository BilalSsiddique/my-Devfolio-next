import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import { FaCopyright } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="h-64 glass-navbar pt-10 ">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex  justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            BILAL SIDDIQUE
          </p>
          <p className="flex gap-1 justify-center mt-4 font-playfair text-md ">
            <FaCopyright size={20} />
            <p className="text-yellow">{" "} 2022 BILAL. All Rights Reserved.</p>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer