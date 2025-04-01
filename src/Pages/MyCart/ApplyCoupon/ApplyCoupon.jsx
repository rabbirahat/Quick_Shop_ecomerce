import React, { useState } from "react";

const ApplyCoupon = () => {
  const [coupon, setCoupon] = useState("");

  const applyCoupon = () => {
    if (coupon) {
      alert(`Coupon "${coupon}" applied!`);
      setCoupon("");
    } else {
      alert("Please enter a coupon code.");
    }
  };

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
