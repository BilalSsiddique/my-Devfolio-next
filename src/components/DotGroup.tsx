import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { selectPage, setSelectedPage } from "../store/slices/navbarSlice";

const DotGroup = () => {
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector(selectPage);

  const selectedStyles = `bg-gradient-rainbow relative  before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className=" flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href={"#home"}
        onClick={() => dispatch(setSelectedPage("home"))}
      />
      <Link
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#skills"}
        onClick={() => dispatch(setSelectedPage("skills"))}
      />
      <Link
        className={`${
          selectedPage === "experience" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#experience"}
        onClick={() => dispatch(setSelectedPage("experience"))}
      />

      <Link
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#projects"}
        onClick={() => dispatch(setSelectedPage("projects"))}
      />
      <Link
        className={`${
          selectedPage === "services" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"services"}
        onClick={() => dispatch(setSelectedPage("services"))}
      />
      <Link
        className={`${
          selectedPage === "certifications" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#certifications"}
        onClick={() => dispatch(setSelectedPage("certifications"))}
      />

      <Link
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#contact"}
        onClick={() => dispatch(setSelectedPage("contact"))}
      />
    </div>
  );
};

export default DotGroup;
