import React from "react";
import Link from "next/link";




const DotGroup = ({ selectedPage, setSelectedPage }:{selectedPage:string,setSelectedPage:React.Dispatch<React.SetStateAction<string>>}) => {

    const selectedStyles = `bg-gradient-rainbow relative  before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className=" flex flex-col gap-6 fixed top-[60%] right-7">
      <Link
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href={"#home"}
        onClick={() => setSelectedPage("home")}
      />
      <Link
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#skills"}
        onClick={() => setSelectedPage("skills")}
      />

      <Link
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#projects"}
        onClick={() => setSelectedPage("projects")}
      />
      <Link
        className={`${
          selectedPage === "certifications" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#certifications"}
        onClick={() => setSelectedPage("certifications")}
      />
      <Link
        className={`${
          selectedPage === "experience" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#experience"}
        onClick={() => setSelectedPage("testimonials")}
      />
      <Link
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={"#contact"}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
