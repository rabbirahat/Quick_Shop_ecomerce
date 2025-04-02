
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCart = ({product}) => {
      const RatingStyles = {
        itemShapes: Star,
        activeFillColor: "#ffb700",
        inactiveFillColor: "#ddd",
      };
      console.log(product)
    
  return (
    <div className=" flex justify-between items-center ">
      <img src={product.images.default} alt="product" className="w-20"/>
      <div>
        <p className="cursor-pointer heading-6 hover:text-brandColor2 ease-in duration-300">
        {product.title}
        </p>
       
        <Rating
          style={{ maxWidth: 100 }}
          value={product.rating}
          itemStyles={RatingStyles}
          readOnly
        />
      </div>
      <p className="heading-4 text-[#B6B6B6]">x 1</p>
      <p className="heading-4 text-brand1">${product.price}</p>
    </div>
  );
};

export default ProductCart;
