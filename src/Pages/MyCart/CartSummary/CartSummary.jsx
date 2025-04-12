import React from "react";
import useCart from "../../../Hook/useCarts";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const [cartData, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const items = cartData?.cart || [];
  const coupon = cartData?.coupon || null;

  const subtotal = items.reduce((acc, item) => {
    const price = item?.price || 0;
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);

  const discountPercent = coupon?.discount || 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount;

  const handleRemoveCoupon = async () => {
    try {
      const res = await axiosSecure.post("/carts/coupon/remove", {
        email: user?.email,
      });

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Coupon Removed",
          timer: 1500,
          position: "top-end",
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to remove coupon",
        text: error.response?.data?.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="border border-gray-300 text-gray-500 rounded p-5">
      <div className="flex justify-between border-b-2 pb-4">
        <p className="font-main font-bold">Subtotal</p>
        <p className="text-success text-2xl font-bold">${subtotal.toFixed(2)}</p>
      </div>

      {discountPercent > 0 && (
        <>
          <div className="flex justify-between mt-4">
            <p className="font-main font-bold text-red-500">
              Discount ({coupon.code})
            </p>
            <p className="font-bold text-red-500">
              - ${discountAmount.toFixed(2)}
            </p>
          </div>
          <button
            className="mt-3 text-sm text-blue-600 underline"
            onClick={handleRemoveCoupon}
          >
            Remove Coupon
          </button>
        </>
      )}

      <p className="mt-4 font-main font-bold">Shipping: Free</p>

      <p className="mt-4 font-main font-bold">
        Total:{" "}
        <span className="text-success text-2xl">${total.toFixed(2)}</span>
      </p>
      <Link to="/checkout">
      <button className="mt-5 btn btn-success btn-hover border-0 w-full py-3 text-white rounded-md">
        Proceed to Checkout
      </button>
      </Link>
    </div>
  );
};

export default CartSummary;
