import React, { useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useCart from "../../../Hook/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const ApplyCoupon = () => {
  const [coupon, setCoupon] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch,isLoading] = useCart();

  const applyCoupon = async () => {
    if (!coupon) {
      return Swal.fire({
        icon: "warning",
        title: "Please enter a coupon code.",
      });
    }

    try {
      console.log(user?.email, coupon); 
      const res = await axiosSecure.post("/carts/coupon", {
        email: user?.email,
        coupon,
      });

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Coupon Applied",
          text: `Coupon "${coupon}" has been applied successfully!`,
          timer: 2000,
          position: "top-end",
          showConfirmButton: false,
        });
        setCoupon("");
        refetch(); // Refresh summary and cart to reflect the applied coupon
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to apply coupon",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded p-5">
      <p className="text-2xl font-bold">Apply Coupon</p>
      <p className="text-base font-semibold mt-2">Using A Promo Code?</p>

      <div className="flex mt-5 items-center justify-center">
        <input
          className="border border-gray-300 w-full px-5 py-3 rounded"
          type="text"
          name="coupon"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button
          className="btn btn-success btn-hover border-0 px-4 py-3 ml-10 rounded text-white"
          onClick={applyCoupon}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ApplyCoupon;
