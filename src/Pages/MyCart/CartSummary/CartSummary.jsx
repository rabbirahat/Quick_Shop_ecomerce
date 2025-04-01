import React from "react";

const CartSummary = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  return (
    <div className="border border-gray-300 text-gray-500 rounded p-5 ">
      <div className="flex justify-between border-b-2 pb-4">
        <p className="font-main font-bold">Subtotal</p>
        <p className="text-success text-2xl font-bold">${subtotal.toFixed(2)}</p>
      </div>
      <p className="mt-4 font-main font-bold">Shipping: Free</p>
      <p className="mt-4 font-main font-bold">Total: <span className="text-success text-2xl">${subtotal.toFixed(2)}</span></p>
      <button className="mt-5 btn btn-success btn-hover border-0 w-full py-3 text-white rounded-md">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
