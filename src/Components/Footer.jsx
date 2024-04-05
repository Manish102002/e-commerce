import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiPinterestFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex justify-between items-center  mb-8 lg:mx-11 md:mx-11 sm:mx-11 mx-5 ">
        <h1>2024 &#169; Sober</h1>
        <div className=" flex gap-5 justify-center items-center ">
          <FaTwitter className=" opacity-50 hover:opacity-100 cursor-pointer transition-all duration-100"/>
          <IoLogoInstagram className=" opacity-50 hover:opacity-100 cursor-pointer transition-all duration-100" />
          <FaFacebookF className=" opacity-50 hover:opacity-100 cursor-pointer transition-all duration-100" />
          <RiPinterestFill className=" opacity-50 hover:opacity-100 cursor-pointer transition-all duration-100"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
