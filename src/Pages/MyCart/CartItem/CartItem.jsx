import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import useAxiosSecure from "../../../Hook/useAxios";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";

const CartItem = ({ item, refetch }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const handleQuantityChange = async (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  
    try {
      await axiosSecure.patch("/carts/update", {
        email: user.email,
        menuId: item._id,
        quantity: newQuantity,
      });
      refetch(); // Refetch to update cart summary and totals
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed to update quantity",
        text: err.response?.data?.message || "Something went wrong",
      });
    }
  };
  


  const handleDeleteCartItem = async () => {
    try {
      const res = await axiosSecure.delete("/carts", {
        data: { email: user.email, menuId: item._id }, // Send email and menuId to the backend
      });
  
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Item removed from cart!",
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
        });
        refetch(); // Re-fetch the cart to get updated data
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed to remove item",
        text: err.response?.data?.message || "Something went wrong",
      });
    }
  };


  return (
    <tr className="text-gray-500 text-sm md:text-base font-bold">
      <td className="px-4 py-4">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            className="w-16 md:w-20 border border-gray-300 p-2 rounded"
            src={item?.images?.default}
            alt={item?.title}
          />
          <p>{item?.title}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-lg md:text-2xl">
        ${item?.price?.toFixed(2)}
      </td>
      <td className="px-4 py-4">
        <input
          onChange={handleQuantityChange}
          className="border rounded text-center w-14 md:w-20 py-1 md:py-2"
          type="number"
          value={quantity}
          min="1"
        />
      </td>
      <td className="px-4 py-4 text-success text-lg md:text-2xl">
        ${(item?.price * quantity).toFixed(2)}
      </td>
      <td className="px-4 py-4 flex justify-center mt-7">
        <ImCancelCircle
          className="cursor-pointer text-red-500 text-lg md:text-xl"
          onClick={handleDeleteCartItem}
        />
      </td>
    </tr>
  );
};

export default CartItem;
