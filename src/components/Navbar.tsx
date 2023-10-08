import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import LinkC from "../components/LinkC";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isAboveSmallScreens = useMediaQuery("(min-width:950px)");
  const navbarBackground = isTopOfPage ? "" : "glass-navbar";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true);
      if (window.scrollY !== 0) setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        !isMenuToggled && "backdrop-blur-xl"
      } z-50  w-full ${navbarBackground}  fixed top-0 py-6 `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <Link href="/#home">
          <h4 className="font-outfit text-3xl font-extrabold ">BS</h4>
        </Link>

        {/* DESKTOP NAVBAR */}
        {isAboveSmallScreens ? (
          <div className="flex gap-12 md:gap-16 font-opensans text-sm font-semibold ">
            <LinkC page="Home" />
            <LinkC page="Skills" />
            <LinkC page="Experience" />
            <LinkC page="Projects" />
            <LinkC page="Services" />
            <LinkC page="Certifications" />
            <LinkC page="Contact" />
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
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <LinkC
                page="Skills"
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <LinkC
                page="Experience"
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <LinkC
                page="Projects"
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <LinkC
                page="Services"
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <LinkC
                page="Certifications"
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
              <LinkC
                page="Contact"
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
