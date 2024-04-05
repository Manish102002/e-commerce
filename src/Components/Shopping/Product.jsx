import React, { useContext, useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import axios, { all } from "axios";
import { IoMdCheckmark } from "react-icons/io";
import { MyContext } from "../Context/MyProvider";

const Product = ({ category, searchQuery }) => {
  const [data, setData] = useState([]);
  const [displaycount, setDisplaycount] = useState(10);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  // const { setCartCount } = useContext(MyContext);
  const { setCartCount, cartItems, setCartItems } = useContext(MyContext);

  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   if (savedCart) {
  //     setCart(JSON.parse(savedCart));
  //   }
  // }, []);

  // // Save cart data to local storage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const handleDisplaycount = () => {
    if (displaycount === 10) {
      setDisplaycount(20);
    } else {
      setDisplaycount(10);
    }
  };

  const handleAddToCart = (id, title, price, image) => {
    // Check if the product with the same ID already exists in the cart
    // const isProductInCart = cart.some((item) => item.id === id);
    const isProductInCart = cartItems.some(
      (item) => item.id === id,
      image,
      price,
      title
    );

    // If the product is not already in the cart, add it
    if (!isProductInCart) {
      setCart([...cart, { id, title, image, price }]);
      // setCartCount(cartCount + 1);
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { id, title, price, image },
      ]);
      setCartCount((prevCount) => prevCount + 1);

      console.log(
        `Added item with ID ${id} and title "${title}" to cart. and Image ${image} , and price of Product ${price}`
      );
    } else {
      console.log(`Item with ID ${id} is already in the cart.`);
    }
  };

  const handleAddToWish = (id, title) => {
    // Check if the product with the same ID already exists in the wishlist
    const isProductInWish = wish.some((item) => item.id === id);

    // If the product is not already in the wishlist, add it
    if (!isProductInWish) {
      setWish([...wish, { id, title }]);
      console.log(`Added item with ID ${id} and title "${title}" to wishlist.`);
    } else {
      console.log(`Item with ID ${id} is already in the wishlist.`);
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      <div className=" flex gap-10 justify-center items-center flex-wrap">
        {data
          .filter(
            (product) => category == "all" || product.category === category
          )
          .filter(
            (product) =>
              searchQuery
                ? product.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                : true // If no search query, return all products
          )
          .slice(0, displaycount)
          .map((product) => (
            <div
              key={product.id}
              className="lg:h-96 md:h-96 sm:h-96 lg:w-60 md:w-60 sm:w-60 w-36 group"
            >
              <div className="lg:h-80 md:h-80 sm:h-80 lg:w-60 md:w-60 sm:w-60 w-36 h-60 bg-flashwhite shadow-xl rounded-lg flex flex-col justify-center items-center overflow-hidden cursor-pointer ">
                <div className="flex lg:h-96 md:h-80 sm:h-80 lg:w-60 md:w-60 sm:w-60 w-36 h-60 justify-center items-center">
                  <img
                    src={product.image}
                    alt=""
                    className="lg:w-44 md:w-44 sm:w-44 w-28 bg-boxcolor hover:scale-[1.2] transition-all mt-12 duration-500"
                  />
                </div>
                <div className="flex translate-y-16 transition-transform duration-500 group-hover:-translate-y-16 justify-center items-center lg:gap-5 md:gap-5 sm:gap-5 gap-2 cursor-pointer">
                  <div>
                    <div
                      onClick={() =>
                        handleAddToCart(
                          product.id,
                          product.title,
                          product.price,
                          product.image
                        )
                      }
                      className=" bg-[black] w-16 cursor-pointer p-5 rounded-[50%] text-[white] text-xl"
                    >
                      {cartItems.some((item) => item.id === product.id) ? (
                        <IoMdCheckmark />
                      ) : (
                        <LuShoppingCart />
                      )}
                    </div>
                  </div>
                  <div className="">
                    <div
                      onClick={() => handleAddToWish(product.id, product.title)}
                      className=" bg-[black] w-16 cursor-pointer p-5 rounded-[50%] text-[white] text-xl"
                    >
                      {wish.some((item) => item.id === product.id) ? (
                        <IoMdCheckmark />
                      ) : (
                        <FaRegHeart />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-lg font-normal">
                <h1 className=" mt-2 w-20 overflow-hidden whitespace-nowrap">
                  {product.title}
                </h1>
                <h1 className=" text-sm font-bold"> ${product.price}</h1>
              </div>
            </div>
          ))}
      </div>
      <div className={`flex justify-center `}>
        <button
          onClick={handleDisplaycount}
          className={` text-center border-[white] shadow-xl rounded-lg my-10 py-2 px-6 font-semibold bg-flashwhite cursor-pointer  `}
        >
          {displaycount == 10 ? "More Product" : "less Product"}
        </button>
      </div>
    </>
  );
};

export default Product;
