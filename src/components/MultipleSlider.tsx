// import React from "react";
// import { slides } from "@/data/website-data";
// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const MultipleSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex: number) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <>
//       <div className="md:h-full    md:w-[80%] mx-auto relative">
//         <div>
//           <div
//             className="absolute top-[50%] left-[-20px] xs:left-[-40px] text-2xl text-white shadow-xl z-10 cursor-pointer"
//             onClick={goToPrevious}
//           >
//             ❰
//           </div>
//           <div
//             onClick={goToNext}
//             className="absolute top-[50%] right-[-20px] xs:right-[-40px] text-2xl  text-white shadow-xl z-10 cursor-pointer"
//           >
//             ❱
//           </div>
//         </div>
//         <div
//           className={`w-full h-full flex gap-8  border-[10px] bg-cover bg-center `}
//         >
//           <motion.div
//             className="w-full h-full  border-[10px] bg-cover bg-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             variants={{
//               hidden: { opacity: 0, x: -350 },
//               visible: { opacity: 1, x: 0 },
//             }}
//           >
//             <Image
//               className="  border-deep-blue"
//               src={slides[currentIndex].url}
//               fill
//               style={{
//                 objectFit: "cover",
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//               alt="images"
//             />
//           </motion.div>
//         </div>
//         <div className="flex  justify-center gap-x-3">
//           {slides.map((slide, slideIndex) => (
//             <div
//               className=" cursor-pointer text-[20px]"
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//             >
//               <p
//                 className={
//                   slideIndex === currentIndex ? "text-gradient" : "text-white"
//                 }
//               >
//                 ●
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MultipleSlider;
