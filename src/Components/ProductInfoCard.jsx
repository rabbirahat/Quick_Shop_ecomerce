import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ProductInfoCard = ({ productData }) => {
  const RatingStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#ddd",
  };
  return (
    <>
      <p className="link-hover">
        <small>{productData.category}</small>
      </p>
      <Link to={`/product/${productData._id}`} className="">
        <p className=" link-hover">{productData.title.slice(0, 30) + "..."}</p>
      </Link>
      <div className="flex items-center text-warning gap-1 mt-2">
        <Rating
          style={{ maxWidth: 100 }}
          value={productData.rating}
          itemStyles={RatingStyles}
          readOnly
        />
        <span className="">({productData.rating})</span>
      </div>
      <p>
        By <span className="text-success">{productData.brand}</span>
      </p>
      <div className="flex items-center gap-2">
        <p className="text-2xl font-semibold text-success">
          ${productData.price}
        </p>
        <del className="text-gray-500 font-semibold">
          {productData.oldPrice}
        </del>
      </div>
    </>
  ); 
};

export default ProductInfoCard;
