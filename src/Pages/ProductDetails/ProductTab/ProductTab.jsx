import { Rating, Star } from "@smastrom/react-rating";

const ProductTab = ({product,activeTab, handleTabClick}) => {
    const RatingStyles = {
        itemShapes: Star,
        activeFillColor: "#ffb700",
        inactiveFillColor: "#ddd",
      };
    return (
        <div className="mt-8">
        <div className="border-b flex gap-8">
          <button
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "description"
                ? "text-[#3BB78F] border-b-2 border-[#3BB78F]"
                : "text-gray-600 hover:text-[#3BB78F]"
            }`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "additionalInfo"
                ? "text-[#3BB78F] border-b-2 border-[#3BB78F]"
                : "text-gray-600 hover:text-[#3BB78F]"
            }`}
            onClick={() => handleTabClick("additionalInfo")}
          >
            Additional Info
          </button>
          <button
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === "reviews"
                ? "text-[#3BB78F] border-b-2 border-[#3BB78F]"
                : "text-gray-600 hover:text-[#3BB78F]"
            }`}
            onClick={() => handleTabClick("reviews")}
          >
            Reviews ({product?.reviews?.length || 0})
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-6 text-gray-600">
          {activeTab === "description" && <p>{product?.description}</p>}
          {activeTab === "additionalInfo" && <p>{product?.additionalInfo}</p>}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              {product?.reviews?.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-success font-semibold text-2xl">
                      {review.author}
                    </p>
                    <div className="flex text-yellow-400">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={product.rating}
                        itemStyles={RatingStyles}
                        readOnly
                      />
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default ProductTab;