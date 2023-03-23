import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaGithub } from "react-icons/fa";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-2 gap-7">
      <Link
        href="https://www.linkedin.com/in/bilal-siddiquee/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaLinkedin size={32} />
        </button>
      </Link>
      <Link
        href="https://twitter.com/Bilalsiddique_"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaTwitter size={32} />
        </button>
      </Link>
      <Link
        href="https://web.facebook.com/BilalsSiddique/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaFacebook size={32} />
        </button>
      </Link>
      <Link
        href="# "
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaInstagram size={32} />
        </button>
      </Link>
      <Link
        href="https://github.com/BilalSsiddique"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          <FaGithub size={32} />
        </button>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
