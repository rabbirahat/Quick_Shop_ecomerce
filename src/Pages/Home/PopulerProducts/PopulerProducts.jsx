import { useEffect, useState } from "react";
import PopulerProductCard from "./PopulerProductCard";
import { axiosPublic } from "../../../Hook/useAxios";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  
  useEffect(() => {
    axiosPublic.get("/products/popular")
    .then((res) => {
      setProducts(res.data);
    });
  }, []);
  
  
    useEffect(() => {
      axiosPublic.get(`/products/categories`).then((res) => {
        setCategories(res.data);
      });
    }, []);

    
      useEffect(() => {
        axiosPublic.get(`/products/category/${selectedCategory}`).then((res) => {
          setProducts(res.data); 
        });
      },[selectedCategory]);  


  return (
    <div className="xxl:max-w-7xl md-w-full my-16  mx-auto px-4  md:px-3">
      <div className="block md:flex flex-cols-1 justify-between text-center items-center lg:flex-cols-2 md:mb-1 pb-10">
        <h1 className=" text-4xl text-[#253D4E] font-bold my-4">
          Popular Products
        </h1>

        <ul className="flex gap-5 md:justify-end justify-center flex-wrap text-lg ">
          <li className=" font-medium link-hover min-w-max"  onClick={() => setSelectedCategory("all")}>All</li>
          {categories?.slice(0, 4).map((category, i) => (
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
        {products?.slice(0,8).map((product) => (
          <PopulerProductCard key={product._id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
