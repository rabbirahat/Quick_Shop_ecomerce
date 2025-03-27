import "@smastrom/react-rating/style.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductInfoCard from "../../../Components/ProductInfoCard";

const DailySalesCard = ({ productData }) => {
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



  return (
    <div className="max-w-sm border border-[#BCE3C9] rounded-lg overflow-hidden group mx-auto">
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
      <ProductInfoCard productData={productData} />
        <progress
          className="progress progress-success "
          value={productData.sales}
          max={productData.stock}
        ></progress>
        <Link className="" to={"/cart"}>
          <button className="w-full justify-center bg-success flex items-center text-white px-3 py-1 rounded my-4 btn-hover">
            <AiOutlineShoppingCart className="m-2 p=2" />
            <p className="font-[12px] ">Shop Now</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DailySalesCard;
