import React, { useEffect, useState } from "react";
import img1 from "../../../assets/DailyBestSales/best sell-image.png";

import DailySalesCard from "./DailySalesCard";
import { axiosSecure } from "../../../Hook/useAxios";

const BestSales = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Meat");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/products/category/${selectedCategory}`).then((res) => {
      setProducts(res.data); 
    });
  },[selectedCategory]);


  
  useEffect(() => {
    axiosSecure.get(`/products/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  
  return (
    <div className="xxl:max-w-7xl md-w-full my-16  mx-auto px-4  md:px-3">
      <div className="block md:flex flex-cols-1 justify-between text-center items-center lg:flex-cols-2 md:mb-1 pb-10">
        <h3 className=" text-4xl text-[#253D4E] font-bold my-4 ">
          Daily Best Sales
        </h3>
        <ul className="flex gap-5 md:justify-end justify-center flex-wrap text-lg">
          {categories?.map((category, i) => (
            <li
              key={i}
              className="link-hover"
              onClick={() => setSelectedCategory(category.categories)}
            >
              {category.categories}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="relative mx-auto sm:mt-10 md:mt-0">
          <img src={img1} alt="" />
          <h1 className="absolute top-10 p-5 text-4xl font-extrabold ">
            Bring nature into your home{" "}
          </h1>
          <div className="absolute top-40 p-5">
            <button className="bg-success flex items-center text-white px-3 py-2 rounded my-4 btn-hover">
              Shop Now &raquo;
            </button>
          </div>
        </div>

        {products?.map((product) => (
          <DailySalesCard key={product._id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSales;
