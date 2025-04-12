import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import DealsCard from "./DealsCard";
import { axiosPublic } from "../../../Hook/useAxios";
import { Link } from "react-router-dom";
const DealsOfTheDays = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      axiosPublic.get(`/products`).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-gray-200"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="4"
            stroke="currentColor"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4.93 4.93a10 10 0 0114.14 14.14l-1.41-1.41a8 8 0 00-11.31-11.31L4.93 4.93z"
          ></path>
        </svg>
      </div>
    );
  }
  else return (
    <section className="">
      <div className="flex justify-between mx-3 mb-8">
        <h3 className="text-textHeading text-[25px] md:text-[32px] font-bold">
          Deals Of The Days
        </h3>
        <div className="flex items-center hover:text-brand1 text-[#7E7E7E] ">
          <Link
            className="text-[16px] 
         font-semibold mr-1"
            to="/menu"
          >
            ALL DETAILS
          </Link>
          <span className=" ">
            <AiOutlineRight />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {products?.slice(0, 4)?.map((product) => (
          <DealsCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDays;
