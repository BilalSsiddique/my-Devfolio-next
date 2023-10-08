import React, { Dispatch } from "react";
import Link from "next/link";
import { selectPage, setSelectedPage } from "@/store/slices/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { service } from "@/data/website-data";

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
  const builLink = ` ${
    lowerCasePage === "services" ? "/" + lowerCasePage : "/#" + lowerCasePage
  } `;
  console.log("bu", builLink);
  return (
    <Link
      className={`font-bold ${
        selectedPage === lowerCasePage ? "text-yellow " : ""
      }
        hover:text-yellow transition duration-500`}
      href={builLink}
      onClick={setDispatchandtoggle}
    >
      {page}
    </Link>
  );
};

export default LinkC;
