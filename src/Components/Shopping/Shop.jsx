import React, { useEffect, useState } from "react";
import Product from "./Product";
import { IoSearchOutline } from "react-icons/io5";

const Shop = () => {
  const [selectCategory, setSelectCategory] = useState("all");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    // e.prevent.default();
    setSearch(e.target.value);
  };

  const handleAll = () => {
    setSelectCategory("all");
  };

  return (
    <>
      <div className=" min-h-screen bg-boxcolor">
        <div className=" bg-boxcolor flex justify-center lg:text-lg md:text-lg sm:text-lg text-sm mt-10 mb-5 gap-8 ">
          <h1
            className={`font-semibold cursor-pointer ${
              selectCategory === "all" ? "opacity-100" : "opacity-50"
            } hover:opacity-100`}
            onClick={() => setSelectCategory("all")}
          >
            All
          </h1>
          <h1
            className={`font-semibold cursor-pointer ${
              selectCategory === "men's clothing" ? "opacity-100" : "opacity-50"
            } `}
            onClick={() => setSelectCategory("men's clothing")}
          >
            Men's
          </h1>
          <h1
            className={`font-semibold cursor-pointer ${
              selectCategory === "electronics" ? "opacity-100" : "opacity-50"
            } `}
            onClick={() => setSelectCategory("electronics")}
          >
            Electronics
          </h1>
          <h1
            className={`font-semibold cursor-pointer ${
              selectCategory === "women's clothing"
                ? "opacity-100"
                : "opacity-50"
            } `}
            onClick={() => setSelectCategory("women's clothing")}
          >
            Women's
          </h1>
          <h1
            className={`font-semibold cursor-pointer ${
              selectCategory === "jewelery" ? "opacity-100" : "opacity-50"
            } `}
            onClick={() => setSelectCategory("jewelery")}
          >
            Jewelery
          </h1>
        </div>
        <div onChange={handleSearch} className="flex justify-center items-center cursor-pointer mb-7 text-lg">
          <input
            type="text"
            placeholder="Search Product"
            className=" outline-none p-2 shadow-xl rounded-md bg-boxcolor border-b-2"
            onChange={handleSearch}
          />
          <IoSearchOutline className=" text-2xl" />
        </div>

        <Product
          category={selectCategory}
          searchQuery={search} 
        />
      </div>
    </>
  );
};

export default Shop;
