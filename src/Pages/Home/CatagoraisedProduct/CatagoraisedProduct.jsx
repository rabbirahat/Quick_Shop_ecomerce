import React, { useEffect, useState } from "react";
import Card_sm from "./Card_sm"; // Import the Card_sm component
import { axiosPublic } from "../../../Hook/useAxios";


const CatagoraisedProduct = () => {
  const [topSales, setTopSales] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, settopRated] = useState([]);
  const [recent, setRecent] = useState([]);
  
    useEffect(() => {
    axiosPublic.get("/products/top-sales").then((res) => {
      setTopSales(res.data);
    });},[])

    useEffect(() => {
    axiosPublic.get("/products/trending").then((res) => {
      setTrending(res.data);
    });},[])
    
    useEffect(() => {
    axiosPublic.get("/products/top-rated").then((res) => {
      settopRated(res.data);
    });},[])

    useEffect(() => {
    axiosPublic.get("/products/recent").then((res) => {
      setRecent(res.data);
    });},[])
    


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-3">
      {/* First Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
            Top Selling
          </h4>
          <div className="absolute bottom-0 success h-[2px] w-[80px]"></div>
        </div>
        {topSales?.slice(0, 3).map((product) => (
          <Card_sm key={product._id} product={product} />
        ))}
      </div>

      {/* Second Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
          tranding Now
          </h4>
          <div className="absolute bottom-0 bg-success h-[2px] w-[80px]"></div>
        </div>
        {trending?.slice(0,3).map((product) => (
          <Card_sm key={product._id} product={product} />
        ))}
      </div>

      {/* Third Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
           Recently Added
          </h4>
          <div className="absolute bottom-0 bg-success h-[2px] w-[80px]"></div>
        </div>
        {recent?.slice(0,3).map((product) => (
          <Card_sm key={product._id} product={product} />
        ))}
      </div>

      {/* Fourth Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
            Top Rated
          </h4>
          <div className="absolute bottom-0 bg-success h-[2px] w-[80px]"></div>
        </div>
        {topRated?.slice(0,3).map((product) => (
          <Card_sm key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatagoraisedProduct;
