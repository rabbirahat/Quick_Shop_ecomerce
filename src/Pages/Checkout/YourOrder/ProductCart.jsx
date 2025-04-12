
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RatingStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#ddd",
};


const ProductCart = ({ product }) => (
  <div className="flex justify-between items-center my-3">
    <img src={product.images?.default} alt="product" className="w-20" />
    <div>
      <p className="cursor-pointer heading-6 hover:text-brandColor2">{product.title}</p>
      <Rating style={{ maxWidth: 100 }} value={product.rating} itemStyles={RatingStyles} readOnly />
    </div>
    <p className="heading-4 text-[#B6B6B6]">x {product.quantity || 1}</p>
    <p className="heading-4 text-brand1">${(product.price * (product.quantity || 1)).toFixed(2)}</p>
  </div>
);

export default ProductCart;
