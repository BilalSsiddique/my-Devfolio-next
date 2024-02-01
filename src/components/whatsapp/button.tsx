import React from "react";
import Image from "next/image";
import MessageBox from "./MessageBox";
const button = () => {
  const Message =
    "Hello, Bilal. I have a project and I need you to develop it!";
  return (
    <>
      <div className="fixed flex z-50 bottom-5 left-5">
        <a
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${923082177221}&amp;text=${Message}`}
        >
          {" "}
          <Image
            src="./whatsapp-logo.svg"
            alt="WhatsApp Logo"
            height={55}
            width={55}
          />
        </a>
        <MessageBox />
      </div>
    </>
  );
};

export default button;
