import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import useHandleAddToCart from "../../../Hook/useHandleAddToCart";


const PopulerProductCard = ({ productData }) => {
  const handleAddToCart = useHandleAddToCart();
  
  // Logic for determining the badge color
  const getBadgeColor = (badge) => {
    if (badge === "Hot") {
      return "bg-success";
    } else if (badge === "Sale") {
      return "bg-brand2";
    } else if (badge.includes("%")) {
      // If the badge contains a percentage
      return "bg-red-400";
    } else if (badge === "") {
      return "";
    } else {
      return "";
    }
  };

  const RatingStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#ddd",
  };

  return (
    <div className="max-w-xm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
      <p className="mt-2 mb-3 text-[#FFF]">
        <small
          className={`${getBadgeColor(
            productData.badge
          )} text-center px-4 py-1 rounded-r-full text-white`}
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

        <div className="absolute inset-0 bg-[#FFFF] top-24 border border-success px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <a
            href="#"
            className=" text-2xl text-success p-2 flex items-center justify-center transition"
          >
            <AiOutlineHeart />
          </a>
          <a
            href="#"
            className="text-2xl text-success p-2 flex items-center justify-center transition"
          >
            <FiEye />
          </a>
        </div>
      </div>
      <div className="p-3">
        <p className="text-textBody hover:text-success">
          <small>{productData.category}</small>
        </p>
        <Link to={`/product/${productData._id}`} className="">
          <p className="heading-sm link-hover">{productData.title}</p>
        </Link>
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
          By <span className="text-success">{productData.brand}</span>
        </p>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-semibold text-[#3BB78F]">
            ${productData.price}
          </p>
          <del className="text-textBody font-semibold">
            {productData.oldPrice}
          </del>

          <button
            onClick={() =>  handleAddToCart(productData)}
            className="mx-auto bg-[#DEF9EC] text-[#3BB78F] font-semibold px-3 rounded py-2 flex items-center gap-2 hover:bg-success hover:text-[#FFF]"
          >
            <AiOutlineShoppingCart /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopulerProductCard;
