import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const EditProduct = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosSecure.get(`/products/product/${id}`);
        console.log("Fetched Product:", res.data);

        if (res.data) {
          const productData = res.data;
          const formattedData = {
            ...productData,
            countdownTarget: productData.countdownTarget
              ? new Date(productData.countdownTarget).toISOString().slice(0, 16)
              : "",
          };

          setProduct(formattedData);
          reset(formattedData);
        } else {
          Swal.fire("Error", "Product not found", "error");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        Swal.fire("Error", "Failed to fetch product data", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, axiosSecure, reset]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Ensure price is parsed as a float
      const updatedProduct = {
        title: data.title,
        description: data.description,
        additionalInfo: data.additionalInfo,
        price: parseFloat(data.price), // Parse price to float explicitly
        stock: parseInt(data.stock), // Parse stock as integer
        rating: parseFloat(data.rating), // Parse rating to float
        category: data.category,
        brand: data.brand,
        badge: data.badge,
        countdownTarget: data.countdownTarget
          ? new Date(data.countdownTarget).toISOString()
          : null,
      };

      const res = await axiosSecure.patch(
        `/products/product/${id}`,
        updatedProduct
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", "Product updated successfully!", "success");
        navigate("/dashboard/allproduct");
      } else {
        Swal.fire("Notice", "No changes were made", "info");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update product", "error");
    } finally {
      setLoading(false);
    }
  };

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <input
            {...register("title")}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Additional Info</label>
          <textarea
            {...register("additionalInfo")}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Price ($)</label>
          <input
            {...register("price", { valueAsNumber: true })} // Ensures the value is a number
            type="number"
            className="input input-bordered w-full"
            step="0.01" // Allows decimal precision
          />
        </div>
        <div>
          <label className="label">Stock</label>
          <input
            {...register("stock")}
            type="number"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Rating (1 to 5)</label>
          <input
            {...register("rating", {
              required: "Rating is required",
              min: {
                value: 1,
                message: "Rating must be at least 1",
              },
              max: {
                value: 5,
                message: "Rating must not exceed 5",
              },
              valueAsNumber: true,
            })}
            type="number"
            step="0.1"
            min="1"
            max="5"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Category</label>
          <input
            {...register("category")}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Brand</label>
          <input
            {...register("brand")}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Badge</label>
          <input
            {...register("badge")}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">Countdown Target</label>
          <input
            {...register("countdownTarget")}
            type="datetime-local"
            className="input input-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className="btn btn-success btn-hover w-full mt-4 text-white"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
