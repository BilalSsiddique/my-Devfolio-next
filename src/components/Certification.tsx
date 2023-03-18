import React, { ReactNode } from 'react'
import {useState} from 'react'
import Image, { StaticImageData } from 'next/image';
import reactbasics from "/src/assets/certificates/react-basics.png"; 
import version from "/src/assets/certificates/version.png";
import ITF from "/src/assets/certificates/ITF.png";
import web from "/src/assets/certificates/webscraping.png";
import statis from "/src/assets/certificates/statistics.png"; 
import pandas from "/src/assets/certificates/pandas.png";
import python from "/src/assets/certificates/introduction-to-python.png";
import interpython from "/src/assets/certificates/intermediate-python.png";
import kagglepython from "/src/assets/certificates/kaggle-python.png";
import kagglepandas from "/src/assets/certificates/kaggle-pandas.png";
import datascience from "/src/assets/certificates/Introduction-to-data-science.png";
import javascript from "/src/assets/certificates/programming-with-js.png";
import manipluation from "/src/assets/certificates/data-manipulation.png";
import {motion} from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery';
import GridCertification from '../components/GridCertification'


const slides: Array<{ url: StaticImageData; classname?: string }> = [
  { url: ITF },
  { url: reactbasics, classname: "design-react" },
  { url: web },
  { url: kagglepandas },
  { url: javascript, classname: "design-javascript" },
  { url: pandas },
  { url: python },
  { url: interpython },
  { url: statis },
  { url: kagglepython },
  { url: datascience },
  { url: version, classname: "design-version" },
  { url: manipluation },
];

const ImageSlider = ({gridSwitch}:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };
  
  // const backgroundImage = {
  //   ...slideStyles,
  //   backgroundImage: `url("${slides[currentIndex].url}")`,
  // };
  
  
  return (
    <>
    { gridSwitch ? <GridCertification slides={slides}/> : isAboveMediumScreens ? <div className="md:h-full   md:w-[80%] mx-auto relative">
      <div>
        <div
          className="absolute top-[50%] left-[-20px] xs:left-[-40px] text-2xl text-white shadow-xl z-10 cursor-pointer"
          onClick={goToPrevious}
        >
          ❰
        </div>
        <div
          onClick={goToNext}
          className="absolute top-[50%] right-[-20px] xs:right-[-40px] text-2xl  text-white shadow-xl z-10 cursor-pointer"
        >
          ❱
        </div>
      </div>
      <div className={`w-full h-full flex gap-8  border-[10px] bg-cover bg-center `}>
        <motion.div
          className="w-full h-full  border-[10px] bg-cover bg-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -350 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image
            className="  border-deep-blue"
            src={slides[currentIndex].url}
            fill
            style={{objectFit:'cover',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
            alt="images"
          />
        </motion.div>
      </div>
      <div className="flex  justify-center gap-x-3">
        {slides.map((slide, slideIndex) => (
          <div
            className=" cursor-pointer text-[20px]"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <p
              className={
                slideIndex === currentIndex ? "text-gradient" : "text-white"
              }
            >
              ●
            </p>
          </div>
        ))}
      </div>
    </div> : <GridCertification slides={slides}/>  }
    </>
  );
};

export default ImageSlider;