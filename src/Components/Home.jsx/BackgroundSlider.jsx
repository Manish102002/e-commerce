import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";

const BackgroundSlider = () => {
  const [bgimage, setBgimage] = useState(0);

  const images = [
    "url('/public/images/S1.jpg')",
    "url('/public/images/S2.jpg')",
    "url('/public/images/S3.jpg')",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgimage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval;
  }, []);

  return <>
    <div className=" h-screen bg-cover bg-center" style={{backgroundImage: images[bgimage]}}>
           <Navigation/>
           <div className=" flex justify-center items-center">
            <h1 className=" lg:text-[3.3vw] md:text-[4.3vw] sm:text-[5.3vw] text-[6.3vw] mt-72 ">New Arrilvals</h1>
           </div>
    </div>
  </>;
};

export default BackgroundSlider;


