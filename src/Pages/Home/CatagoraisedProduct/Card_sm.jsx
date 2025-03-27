import React from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Card_sm = ({ product }) => {
  const RatingStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#ddd",
  };

  return (
    <div className="flex mt-5 translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer ">
      <img
        src={product.images.default}
        alt={product.title}
        className="w-[102px] h-[102px]"
      />
      <div className="pl-7 ">
        <h2 className="font-bold leading-5">{product.title}</h2>

        <div className="flex items-center mb-2">
          <Rating
            style={{ maxWidth: 100 }}
            value={product.rating}
            itemStyles={RatingStyles}
            readOnly
          />
          <span className="ml-2 text-textBody text-sm mb-1">
            ({product.rating})
          </span>
        </div>

        {/* Price section */}
        <div className="flex items-center mb-1">
          <div className="font-bold text-brand1 text-[20px] mr-2">
            ${product.price}
          </div>
          <del className="text-sm text-gray-500 font-semibold">
            {product.oldPrice}
          </del>
        </div>
      </div>
    </div>
  );
};

export default Card_sm;
