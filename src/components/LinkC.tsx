import React, { Dispatch } from "react";
import Link from "next/link";
import { selectPage, setSelectedPage } from "@/store/slices/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";


const LinkC = ({
  page,
  isMenuToggled,
  setIsMenuToggled,
}: {
  page: string;
  setIsMenuToggled?: Dispatch<boolean>;
  isMenuToggled?: boolean;
}) => {
  const lowerCasePage = page.toLowerCase();
  const selectedPage = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  function setDispatchandtoggle() {
    dispatch(setSelectedPage(lowerCasePage));
    if (isMenuToggled !== undefined && setIsMenuToggled !== undefined) {
      setIsMenuToggled(!isMenuToggled);
    }
  }
  const builLink =
    lowerCasePage === "services" ? `/${lowerCasePage}` : `/#${lowerCasePage}`;
  return (
    <Link
      className={`rounded-full px-3 py-2 font-outfit text-sm font-semibold transition duration-300 ${
        selectedPage === lowerCasePage
          ? "bg-white/10 text-yellow"
          : "text-white/65 hover:bg-white/5 hover:text-white"
      }`}
      href={builLink}
      onClick={setDispatchandtoggle}
    >
      {page}
    </Link>
  );
};

export default LinkC;
