import { useEffect, useState } from "react";
import PopulerProductCard from "./PopulerProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  },[]);

  return (
    <div className="xxl:max-w-7xl md-w-full my-16  mx-auto px-4  md:px-3">
      <div className="block md:flex flex-cols-1 justify-between text-center items-center lg:flex-cols-2 md:mb-1 pb-10">
        <h1 className=" text-4xl text-[#253D4E] font-bold my-4">
          Popular Products
        </h1>

        <ul className="flex gap-5 md:justify-end justify-center flex-wrap text-lg ">
          <li className=" font-medium link-hover min-w-max">All</li>
          <li className=" font-medium link-hover min-w-max">Milks & Dairies</li>
          <li className=" font-medium link-hover min-w-max">Coffes & Teas</li>
          <li className=" font-medium link-hover min-w-max">Pet Foods</li>
          <li className=" font-medium link-hover min-w-max">Meats</li>
          <li className=" font-medium link-hover min-w-max">Vegetables</li>
          <li className=" font-medium link-hover min-w-max">Fruits</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <PopulerProductCard key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
