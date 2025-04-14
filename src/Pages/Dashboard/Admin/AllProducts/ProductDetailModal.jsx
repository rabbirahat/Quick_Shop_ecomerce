import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { Star } from "lucide-react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const ProductDetailModal = ({ product, onClose, refetch }) => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
      customClass: {
        cancelButton: "bg-gray-400 text-white",
        confirmButton: "bg-red-600 text-white",
      },
    });

    if (confirm.isConfirmed) {
      try {
        await axiosSecure.delete(`/products/product/${product._id}`);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
        refetch();
        onClose();
      } catch (error) {
        Swal.fire("Error", "Failed to delete product", error.message);
      }
    }
  };

  const handleEdit = () => {
    navigate(`/dashboard/edit-product/${product._id}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full shadow-lg relative overflow-hidden transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 text-gray-600 hover:bg-error hover:text-white rounded-full p-2 transition-colors duration-200"
        >
          <span className="text-xl font-bold px-2 ">×</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <div className="w-full lg:w-1/3 space-y-4">
            <img
              src={product.images.default}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="grid grid-cols-3 gap-2">
              {product.images.gallery?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-lg">{product.description}</p>

            {/* Product Information Section */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
              </div>
              <div>
                <p><strong>Rating:</strong> {product.rating} / 5</p>
                <p><strong>Badge:</strong> {product.badge}</p>
                <p><strong>SKU:</strong> {product.sku}</p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-800">Additional Information:</p>
              <p className="text-sm text-gray-600">{product.additionalInfo}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleEdit}
                className="w-full sm:w-auto py-2 px-6 btn btn-success btn-hover hover:border-brand2 text-white font-semibold rounded-lg shadow-lg  focus:outline-none transition-colors duration-300 ease-in-out"
              >
                Edit Product
              </button>

              <button
                onClick={handleDelete}
                className="w-full sm:w-auto py-2 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 focus:outline-none transition-colors duration-300 ease-in-out"
              >
                Delete Product
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <p className="text-xl font-semibold text-gray-800 mb-4">Product Reviews</p>
          <div className="space-y-4">
            {product.reviews?.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-700">{review.author}</p>
                    <div className="flex items-center text-yellow-500">
                      {/* Rating Component */}
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={review.rating} 
                        itemShape={Star} 
                        activeFillColor="#ffb700" 
                        inactiveFillColor="#ddd" 
                        readOnly
                      />
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
