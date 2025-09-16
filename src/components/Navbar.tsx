import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import LinkC from "../components/LinkC";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isAboveSmallScreens = useMediaQuery("(min-width:950px)");
  const navbarBackground = isTopOfPage ? "" : "glass-navbar";
  const dispatch = useAppDispatch();

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
      } z-50 w-full ${navbarBackground} overflow-hidden fixed top-0 py-4 transition-all duration-300`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#home" onClick={() => dispatch(setSelectedPage("home"))}>
            <h4 className="font-outfit text-3xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              BS
            </h4>
          </Link>
        </motion.div>

        {/* DESKTOP NAVBAR */}
        {isAboveSmallScreens ? (
          <motion.div
            className="flex items-center gap-8 md:gap-10 font-opensans text-sm font-semibold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LinkC page="Home" />
            <LinkC page="Skills" />
            <LinkC page="Experience" />
            <LinkC page="Projects" />
            <LinkC page="Services" />
            <LinkC page="Certifications" />
            <LinkC page="Contact" />

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                onClick={() => dispatch(setSelectedPage("contact"))}
                className="hidden md:inline-block px-5 py-2 bg-gradient-rainblue text-deep-blue rounded-full font-semibold text-sm hover:opacity-90 transition duration-300 shadow-lg"
              >
                Let&#39;s Talk
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            className="rounded-full bg-gradient-rainblue p-2 shadow-lg"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={menuIcon} alt="menu-icon" width={24} height={24} />
          </motion.button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <motion.div
            className="fixed z-50 right-0 top-0 h-full w-[300px] glass-navbar backdrop-blur-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* CLOSE ICON FOR MOBILE MENU POPUP */}
            <div className="flex justify-end p-6">
              <motion.button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                whileTap={{ scale: 0.9 }}
                className="rounded-full bg-gradient-rainblue p-2 shadow-lg"
              >
                <Image
                  className="close-icon"
                  src={closeIcon}
                  width={24}
                  height={24}
                  alt="close-icon"
                />
              </motion.button>
            </div>

            {/* MENU ITEMS */}
            <div className="font-outfit flex flex-col gap-6 px-8 py-4 text-[18px] text-white">
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

              {/* CTA Button in Mobile Menu */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <Link
                  href="#contact"
                  onClick={() => {
                    dispatch(setSelectedPage("contact"));
                    setIsMenuToggled(false);
                  }}
                  className="inline-block w-full text-center px-5 py-3 bg-gradient-rainblue text-deep-blue rounded-full font-semibold text-sm hover:opacity-90 transition duration-300 shadow-lg"
                >
                  Let&#39;s Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
