import React, { useContext } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MyContext } from "./Context/MyProvider";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { cartCount } = useContext(MyContext);

  return (
    <>
      <div className=" relative flex justify-between items-center lg:px-20 md:px-16 sm:px-12 px-5 py-10">
        <div className="fixed  text-2xl cursor-pointer font-bold">
          <FaRegUser />
        </div>
        <div className=" cursor-pointer">
          <img
            src="https://ik.imagekit.io/js3v2388q/e-commerce/logo.svg?updatedAt=1712297342294"
            alt=""
            className="absolute lg:top-[25px] md:top-6 sm:top-7 top-[26px] left-0 right-0 mx-auto  inset-0 lg:text-2xl md:text-2xl sm:text-2xl w-20 lg:w-40 h-7"
          />
        </div>
        <div className="relative flex justify-center text-2xl gap-5 font-bold">
          <Link to="/cart">
            <div className=" fixed -translate-y-3 flex justify-center items-center gap-1">
              <div className="  cursor-pointer">
                <LuShoppingCart />
              </div>
              <div>
                <div className=" cursor-pointer rounded-[100%] px-2 bg-blue-950 text-white text-xl ">
                  {cartCount}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
