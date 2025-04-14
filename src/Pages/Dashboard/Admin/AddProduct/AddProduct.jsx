import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import useAxios from "../../../../Hook/useAxios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxios();
   const navigate = useNavigate();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  useEffect(() => {
    axiosPublic.get("/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, [axiosPublic]);

  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
  
    try {
      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
  
      if (data.success) {
        return data.data.display_url;
      } else {
        Swal.fire("Image Upload Failed", data.error?.message || "Unknown error", "error");
        throw new Error("Image upload failed");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      Swal.fire("Image Upload Failed", err.message || "Something went wrong", "error");
      throw err;
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Upload images
      const defaultImgUrl = await handleImageUpload(data.defaultImage[0]);
      const hoverImgUrl = await handleImageUpload(data.hoverImage[0]);

      // Create product object
      const newProduct = {
        title: data.title,
        description: data.description,
        additionalInfo: data.additionalInfo,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        rating: parseFloat(data.rating),
        category: data.category,
        brand: data.brand,
        badge: data.badge,
        countdownTarget: data.countdownTarget,
        images: {
          default: defaultImgUrl,
          hover: hoverImgUrl,
        },
      };

      // Post product to backend
      const res = await axiosSecure.post("/products", newProduct);
      if (res.data.insertedId) {
        reset();
        navigate(`/dashboard/allproduct`); 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Add Product Error:", error);
      Swal.fire("Error", "Failed to add product", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="label font-medium">Product Title</label>
          <input {...register("title", { required: true })} className="input input-bordered w-full" placeholder="Product Title" />
        </div>

        <div>
          <label className="label font-medium">Description</label>
          <textarea {...register("description", { required: true })} className="textarea textarea-bordered w-full" placeholder="Product Description" />
        </div>

        <div>
          <label className="label font-medium">Additional Information</label>
          <textarea {...register("additionalInfo")} className="textarea textarea-bordered w-full" placeholder="Extra details, packaging etc." />
        </div>

        <div>
          <label className="label font-medium">Price ($)</label>
          <input {...register("price", { required: true })} type="number" step="0.01" className="input input-bordered w-full" placeholder="Product Price" />
        </div>

        <div>
          <label className="label font-medium">Stock Quantity</label>
          <input {...register("stock", { required: true })} type="number" className="input input-bordered w-full" placeholder="Available stock" />
        </div>

        <div>
          <label className="label font-medium">Rating (1 to 5)</label>
          <input {...register("rating", { required: true })} type="number" step="0.1" className="input input-bordered w-full" placeholder="Average rating" />
        </div>

        <div>
          <label className="label font-medium">Select Category</label>
          <select {...register("category", { required: true })} className="select select-bordered w-full">
            <option value="">Choose category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.categories}>{cat.title}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="label font-medium">Brand Name</label>
          <input {...register("brand", { required: true })} className="input input-bordered w-full" placeholder="Product Brand" />
        </div>

        <div>
          <label className="label font-medium">Badge (e.g. -10%, New)</label>
          <input {...register("badge")} className="input input-bordered w-full" placeholder="Badge (optional)" />
        </div>

        <div>
          <label className="label font-medium">Countdown Target</label>
          <input {...register("countdownTarget")} type="datetime-local" className="input input-bordered w-full" />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="label font-medium">Default Image</label>
            <input {...register("defaultImage", { required: true })} type="file" accept="image/*" className="file-input file-input-bordered w-full" />
          </div>
          <div className="w-1/2">
            <label className="label font-medium">Hover Image</label>
            <input {...register("hoverImage", { required: true })} type="file" accept="image/*" className="file-input file-input-bordered w-full" />
          </div>
        </div>

        <button type="submit" className="btn btn-success btn-hover text-white w-full mt-4" disabled={loading}>
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
