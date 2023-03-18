import React from "react";
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import Image from "next/image";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-2 gap-7">
      <a
        href="https://www.linkedin.com/in/bilal-siddiquee/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={linkedin} alt="Linkedin-link" />
      </a>
      <a
        href="https://twitter.com/Bilalsiddique_"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={twitter} alt="twitter-link" />
      </a>
      <a
        href="https://web.facebook.com/BilalsSiddique/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={facebook} alt="facebook-link" />
      </a>
      <a
        href="# "
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={instagram} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
