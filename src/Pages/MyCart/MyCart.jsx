import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartSummary from "./CartSummary/CartSummary";
import CartActions from "./CartActions/CartActions";
import ShippingCalculator from "./ShippingCalculator/ShippingCalculator";
import ApplyCoupon from "./ApplyCoupon/ApplyCoupon";
import CartItem from "./CartItem/CartItem";

// Sample Cart Items
const cartItems = [
  {
    id: 19,
    title: "Organic Turkey Breast",
    price: 58.0,
    quantity: 1,
    images: { default: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" },
  },
  {
    id: 20,
    title: "Organic Turkey Breast",
    price: 58.0,
    quantity: 1,
    images: { default: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg" },
  },
];


// Main Cart Component
const MyCart = () => {
  return (
    <div className="max-w-7xl w-full my-10 px-4 mx-auto">
      {/* Cart Header */}
      <h1 className="text-2xl md:text-4xl font-bold mb-5">Your Cart</h1>
      <div className="flex justify-between text-sm md:text-base font-bold mb-6">
        <p>
          There are <span className="text-success">{cartItems.length}</span> products in your cart
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition duration-300">
          <RiDeleteBin6Line /> Clear Cart
        </p>
      </div>

      {/* Cart Table */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="col-span-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead className="text-sm md:text-base font-bold bg-gray-100">
                <tr>
                  <th className="px-4 py-3"></th>
                  <th className="px-4 py-3">Products</th>
                  <th className="px-4 py-3">Unit Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Subtotal</th>
                  <th className="px-4 py-3">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-span-2">
          <CartSummary items={cartItems} />
        </div>
      </div>

      {/* Cart Actions */}
      <CartActions />

      {/* Shipping & Coupon */}
      <div className="grid grid-cols-1 lg:grid-cols-6 mt-10">
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <ShippingCalculator />
          <ApplyCoupon />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
