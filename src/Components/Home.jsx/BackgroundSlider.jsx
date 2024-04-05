import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
// import image1 from "/public/images/S1.jpg"
const BackgroundSlider = () => {
  const [bgimage, setBgimage] = useState(0);

  const images = [
    
    "url('https://ik.imagekit.io/js3v2388q/e-commerce/S1.jpg?updatedAt=1712297342035')",
    "url('https://ik.imagekit.io/js3v2388q/e-commerce/S3.jpg?updatedAt=1712297342255')",
    "url('https://ik.imagekit.io/js3v2388q/e-commerce/S2.jpg?updatedAt=1712297342321')",
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


