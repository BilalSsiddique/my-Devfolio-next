import React from "react";
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { FaTwitter } from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-2 gap-7">
      <a
        href="https://www.linkedin.com/in/bilal-siddiquee/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaLinkedin size={32} />
        </button>
      </a>
      <a
        href="https://twitter.com/Bilalsiddique_"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaTwitter size={32}/>
        </button>
      </a>
      <a
        href="https://web.facebook.com/BilalsSiddique/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaFacebook size={32} />
        </button>
      </a>
      <a
        href="# "
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaInstagram size={32} />
        </button>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
