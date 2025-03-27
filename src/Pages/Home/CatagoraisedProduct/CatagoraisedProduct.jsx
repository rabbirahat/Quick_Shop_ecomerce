import React, { useEffect, useState } from "react";
import Card_sm from "./Card_sm"; // Import the Card_sm component


const CatagoraisedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-3">
      {/* First Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
            Top Selling
          </h4>
          <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
        </div>
        {products.slice(0, 3).map((product) => (
          <Card_sm key={product.id} product={product} />
        ))}
      </div>

      {/* Second Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
          tranding Now
          </h4>
          <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
        </div>
        {products.slice(0,3).map((product) => (
          <Card_sm key={product.id} product={product} />
        ))}
      </div>

      {/* Third Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
           Recently Added
          </h4>
          <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
        </div>
        {products.slice(0,3).map((product) => (
          <Card_sm key={product.id} product={product} />
        ))}
      </div>

      {/* Fourth Section */}
      <div className="">
        <div className="relative">
          <h4 className="text-[24px] font-bold text-textHeading pb-3">
            Top Rated
          </h4>
          <div className="absolute bottom-0 bg-[#3BB77E] h-[2px] w-[80px]"></div>
        </div>
        {products.slice(0,3).map((product) => (
          <Card_sm key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatagoraisedProduct;
