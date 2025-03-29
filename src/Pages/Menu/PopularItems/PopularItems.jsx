import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const PopularItems = ({ items }) => {
  const RatingStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#ddd",
  };

  return (
    <div className="bg-white rounded-lg border border-success p-5 mb-6">
      <h3 className="font-bold text-success text-lg mb-4">Popular Items</h3>
      <div className="space-y-4">
        {items?.map((item) => (
          <Link to="/menu" className="">
            <div key={item?.id} className="flex items-center gap-3 py-4">
              {/* Image */}
              <img
                src={item?.images?.default}
                alt={item?.title}
                className="w-16 h-16 object-cover rounded"
              />

              {/* Details */}
              <div className="flex flex-col flex-grow">
                <h4 className="font-medium text-sm">{item?.title}</h4>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 mt-1 mb-1">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={item?.rating || 0} // Prevent undefined errors
                    itemStyles={RatingStyles}
                    readOnly
                  />
                  <span className="text-gray-500 text-xs ml-1">
                    ({item?.reviews?.length || 0})
                  </span>
                </div>

                {/* Price */}
                <span className="text-sm font-semibold text-green-500">
                  ${item?.price?.toFixed(2)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default PopularItems;
