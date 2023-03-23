import React from "react";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import Image from "next/image";
import Link from "next/link";

const LinkC = ({ page, selectedPage, setSelectedPage }:any) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <Link
      className={`font-bold ${selectedPage === lowerCasePage ? "text-yellow " : ""}
        hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }:any) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:950px)");

  return (
    <nav
      className={`${
        !isMenuToggled && "backdrop-blur-xl"
      } z-50  w-full glass-navbar  fixed top-0 py-6 `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <h4 className="font-outfit text-3xl font-extrabold ">BS</h4>

        {/* DESKTOP NAVBAR */}
        {isAboveSmallScreens ? (
          <div className="flex gap-12 md:gap-16 font-opensans text-sm font-semibold ">
            <LinkC
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkC
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <LinkC
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkC
              page="Certifications"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkC
              page="Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkC
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Image src={menuIcon} alt="menu-icon" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="   fixed  z-50 right-0 bottom-0 h-full glass w-[300px]">
            {/* CLOSE ICON FOR MOBILE MENU POPUP */}
            <div className="flex justify-end p-12">
              <button
                className=""
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Image
                  className="close-icon rounded-full bg-red p-2"
                  src={closeIcon}
                  width={35}
                  alt="close-icon"
                />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="font-outfit flex flex-col gap-9 ml-[33%] text-[20px] text-white">
              <LinkC
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkC
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkC
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkC
                page="Certifications"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <LinkC
                page="Experience"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkC
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;