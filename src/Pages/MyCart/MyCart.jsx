import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartSummary from "./CartSummary/CartSummary";
import CartActions from "./CartActions/CartActions";
import ShippingCalculator from "./ShippingCalculator/ShippingCalculator";
import ApplyCoupon from "./ApplyCoupon/ApplyCoupon";
import useCart from "../../Hook/useCarts";
import CartItem from "./CartItem/CartItem";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";






const MyCart = () => {
  const [cart , refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // console.log(cart);


  const handleClearCart = async () => {
    try {
      const res = await axiosSecure.delete("/carts/clear", {
        data: { email: user.email }, // Send email to clear the cart
      });
  
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Cart cleared!",
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
        });
        refetch(); // Re-fetch the cart to get updated data
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed to clear cart",
        text: err.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="max-w-7xl w-full my-10 px-4 mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold mb-5">Your Cart</h1>

      <div className="flex justify-between text-sm md:text-base font-bold mb-6">
        <p>
          There are <span className="text-success">{cart?.length}</span> products in your cart
        </p>
        <p onClick={handleClearCart} className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition duration-300">
          <RiDeleteBin6Line /> Clear Cart
        </p>
      </div>

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
                {cart.cart?.map((item) => (
                  <CartItem key={item._id} item={item} refetch={refetch} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-2">
          <CartSummary items={cart} />
        </div>
      </div>

      <CartActions />

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
