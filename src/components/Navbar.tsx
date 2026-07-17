import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import { useEffect } from "react";
import LinkC from "../components/LinkC";
import { useAppDispatch } from "@/store/hook";
import { setSelectedPage } from "@/store/slices/navbarSlice";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const isAboveSmallScreens = useMediaQuery("(min-width:950px)");
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
      className="fixed top-0 z-50 w-full px-4 py-4 transition-all duration-300"
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition duration-300 ${
          isTopOfPage
            ? "border-white/10 bg-deep-blue/45 backdrop-blur-md"
            : "border-white/15 bg-deep-blue/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#home" onClick={() => dispatch(setSelectedPage("home"))}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-rainblue font-outfit text-sm font-black text-deep-blue shadow-lg">
                BS
              </div>
              <div className="hidden xs:block">
                <p className="font-outfit text-sm font-semibold leading-none text-white">
                  Bilal Siddique
                </p>
                <p className="mt-1 font-outfit text-[11px] leading-none text-white/45">
                  DevOps / Cloud Engineer
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* DESKTOP NAVBAR */}
        {isAboveSmallScreens ? (
          <motion.div
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] p-1.5 font-opensans text-sm font-semibold backdrop-blur-md"
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
                href="/#contact"
                onClick={() => dispatch(setSelectedPage("contact"))}
                className="ml-1 hidden rounded-full bg-gradient-rainblue px-5 py-2 font-outfit text-sm font-semibold text-deep-blue shadow-lg transition duration-300 hover:shadow-[0_0_24px_rgba(36,203,255,0.3)] md:inline-block"
              >
                Let&#39;s Talk
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.button
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-white shadow-lg backdrop-blur-md"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <HiOutlineMenuAlt3 className="text-2xl" />
          </motion.button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <motion.div
            className="fixed right-4 top-4 z-50 w-[min(340px,calc(100vw-32px))] rounded-2xl border border-white/10 bg-deep-blue/95 shadow-2xl shadow-black/40 backdrop-blur-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* CLOSE ICON FOR MOBILE MENU POPUP */}
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <p className="font-outfit text-sm font-semibold text-white">
                  Navigation
                </p>
                <p className="font-outfit text-xs text-white/40">
                  Portfolio sections
                </p>
              </div>
              <motion.button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                whileTap={{ scale: 0.9 }}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white"
              >
                <HiOutlineX className="text-xl" />
              </motion.button>
            </div>

            {/* MENU ITEMS */}
            <div className="font-outfit flex flex-col gap-2 px-5 py-5 text-[18px] text-white">
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
                  href="/#contact"
                  onClick={() => {
                    dispatch(setSelectedPage("contact"));
                    setIsMenuToggled(false);
                  }}
                  className="inline-block w-full rounded-xl bg-gradient-rainblue px-5 py-3 text-center text-sm font-semibold text-deep-blue shadow-lg transition duration-300 hover:opacity-90"
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
