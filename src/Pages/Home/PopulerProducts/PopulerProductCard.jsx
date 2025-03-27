import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const PopulerProductCard = ({ productData }) => {
  // Logic for determining the badge color
  const getBadgeColor = (badge) => {
    if (badge === "Hot") {
      return "bg-success"; 
    } else if (badge === "Sale") {
      return "bg-brand2"; 
    } else if (badge.includes("%")) {// If the badge contains a percentage
      return "bg-red-400"; 
    } else if (badge === "") {
      return ""; 
    } else {
      return ""; 
    }
  };

  const RatingStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#ddd',
  }

  return (
    <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
      <p className="mt-2 mb-3 text-[#FFF]">
        <small
          className={`${getBadgeColor(productData.badge)} text-center px-4 py-1 rounded-r-full text-white`}
        >
          {productData.badge}
        </small>
      </p>
      <div className="relative ">
        <div className="flex items-center">
          <img
            className="group-hover:hidden transition duration-500"
            src={productData.images.default}
            alt=""
          />
          <img
            className="group-hover:scale-105 ease-in-out duration-500"
            src={productData.images.hover}
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-[#FFFF] top-24 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <a
            href="#"
            className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
          >
            <AiOutlineHeart />
          </a>
          <a
            href="#"
            className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
          >
            <FiEye />
          </a>
        </div>
      </div>
      <div className="p-3">
        <p className="text-textBody hover:text-[#3BB77E]">
          <small>{productData.category}</small>
        </p>
        <p className="heading-sm hover:text-[#191b1a]">
          {productData.title}
        </p>
        <div className="flex items-center text-warning gap-1 mt-2">
          <Rating
            style={{ maxWidth: 100 }}
            value={productData.rating}
            itemStyles={RatingStyles}
            readOnly
          />
          <span className="text-textBody">({productData.rating})</span>
        </div>
        <p>
          By <span className="text-[#3BB77E]">{productData.brand}</span>
        </p>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold text-[#3BB78F]">
            ${productData.price}
          </p>
          <del className="text-textBody font-semibold">
            {productData.oldPrice}
          </del>
          <Link to={"/cart"}>
            <button className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-[#3BB77E] hover:text-[#FFF]">
              <AiOutlineShoppingCart /> Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopulerProductCard;
