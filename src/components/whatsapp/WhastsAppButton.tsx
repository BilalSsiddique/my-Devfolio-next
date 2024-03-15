import React, { useEffect, useState } from "react";
import Image from "next/image";
import MessageBox from "./MessageBox";

const Message = "Hello, Bilal. I have a project and I need you to develop it!";

const WhatsAppButton = () => {
  const [displayMessage, setDisplayMessage] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setDisplayMessage(true);

      setTimeout(() => {
        setDisplayMessage(false);
      }, 10000);
    }, 20000);

    return () => {
      clearInterval(id);
    };
  }, []);

  // only close for a while.
  const handleCloseMessage = () => {
    setDisplayMessage(false);
  };

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
        {displayMessage && (
          <MessageBox handleCloseMessage={handleCloseMessage} />
        )}
      </div>
    </>
  );
};

export default WhatsAppButton;
