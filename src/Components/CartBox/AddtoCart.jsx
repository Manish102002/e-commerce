import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { MyContext } from "../Context/MyProvider";
import { Link } from "react-router-dom";

const AddtoCart = () => {
  const { cartItems, setCartItems, setCartCount } = useContext(MyContext);

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className=" min-h-screen bg-boxcolor">
        <div className=" flex justify-between items-center px-12 py-12 text-3xl">
          <div>Cart</div>
          <Link to="/">
            <div className=" cursor-pointer">
              <RxCross1 />
            </div>
          </Link>
        </div>
        <div className=" flex gap-10 text-2xl font-semibold justify-center items-center mt-20 mb-20">
          <div className=" cursor-pointer">
            <div>Shopping Cart</div>
            <div></div>
          </div>
          <div className=" cursor-pointer">
            <div>Wishlist</div>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mb-10">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-evenly items-center">
                <div className=" flex justify-center items-center gap-9 text-2xl">
                  <img src={item.image} alt="" className=" w-32" />
                  <h1 className=" w-32 overflow-hidden text-nowrap">
                    {item.title}
                  </h1>
                </div>
                <div className="flex justify-center items-center gap-8 text-xl">
                  <div className=" flex justify-center items-center gap-2">
                    <div>Qty:</div>
                    <div>1</div>
                  </div>
                  <div className="">${item.price}</div>
                </div>
                {cartItems.length > 0 && (
                  <div
                    className=" cursor-pointer"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <RxCross2 />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className=" text-center font-semibold opacity-40">
              No Product in the Cart
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddtoCart;
