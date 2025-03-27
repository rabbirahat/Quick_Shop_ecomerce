import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import DealsCard from "./DealsCard";
const DealsOfTheDays = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  },[]);

  return (
    <section className="">
      <div className="flex justify-between mx-3 mb-8">
        <h3 className="text-textHeading text-[25px] md:text-[32px] font-bold">
          Deals Of The Days
        </h3>
        <div className="flex items-center hover:text-brand1 text-[#7E7E7E] ">
          <a
            className="text-[16px] 
         font-semibold mr-1"
            href="#"
          >
            ALL DETAILS
          </a>
          <span className=" ">
            <AiOutlineRight />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {products.slice(0, 4).map((product) => (
          <DealsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DealsOfTheDays;
