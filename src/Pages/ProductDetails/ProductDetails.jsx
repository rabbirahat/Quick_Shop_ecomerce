import { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import ProductGallery from "./ProductGallery/ProductGallery";
import { useLocation } from "react-router-dom";
import ProductTab from "./ProductTab/ProductTab";
import { axiosSecure } from "../../Hook/useAxios";
import { Rating, Star } from "@smastrom/react-rating";



const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");




  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location]);
const [loading, setLoading] = useState(true);
  

  const productId = parseInt(window.location.pathname.split("/").pop());

 useEffect(() => {
    axiosSecure.get(`/products/product/${productId}`)
    .then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [productId]);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

if(loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  );
}
const RatingStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#ddd",
};

  return (
    <div  className="container mx-auto px-4 md:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>{product && <ProductGallery images={product.images} />}</div>
        <div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-md inline-block mb-2">
            IN STOCK
          </span>
          <h1 className="text-3xl font-bold text-gray-800">{product?.title}</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
            <Rating
            style={{ maxWidth: 100 }}
            value={product?.rating}
            itemStyles={RatingStyles}
            readOnly
          />
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({product?.rating})
            </span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-4xl font-bold text-[#3BB78F]">
              ${product?.price}
            </span>
            <del className="text-2xl text-gray-400">{product?.oldPrice}</del>
          </div>

          <div className="flex items-center mt-4">
            <div className="flex border rounded-md">
              <span className="w-12 text-center flex items-center justify-center">
                {quantity}
              </span>
              <div className="flex flex-col">
                <button className="px-3 text-gray-500" onClick={handleIncrease}>
                  <FaCaretUp className="text-lg" />
                </button>
                <button className="px-3 text-gray-500" onClick={handleDecrease}>
                  <FaCaretDown className="text-lg" />
                </button>
              </div>
            </div>
            <button className="btn-hover text-white bg-success font-semibold px-4 py-2 flex items-center gap-2 rounded-md ml-4 hover:bg-[#3BB77E] hover:text-white transition">
              <AiOutlineShoppingCart /> Add To Cart
            </button>
            <button className="ml-4 text-gray-600 hover:text-[#3BB78F] transition">
              <AiOutlineHeart className="text-2xl" />
            </button>
            <button className="ml-4 text-gray-600 hover:text-[#3BB78F] transition">
              <AiOutlineShareAlt className="text-2xl" />
            </button>
          </div>

          <div className="mt-6 text-gray-600">
            <p>
              <span className="font-semibold">Vendor:</span> {product?.brand}
            </p>
            <p>
              <span className="font-semibold">SKU:</span> {product?.id}
            </p>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
  <ProductTab product={product} activeTab={activeTab} handleTabClick={handleTabClick} />
    </div>
  );
};

export default ProductDetails;
