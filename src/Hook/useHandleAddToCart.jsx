import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { axiosPublic } from "./useAxios";
import useCart from "./useCarts";

const useHandleAddToCart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [,refetch] = useCart();

  const handleAddToCart = async (productData) => {
    if (user && user.email) {
      const cartItem = {
        menuId: productData._id,
        email: user.email,
        productData,
      };

      try {
        const res = await axiosPublic.post("/carts", cartItem);

        const inserted = res.data.insertedId;
        const modified = res.data.modifiedCount > 0;

        if (res.status === 201 || inserted || modified) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added to your cart!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch(); 
        }
      } catch (error) {
        const status = error.response?.status;
        const message = error.response?.data?.message || "Something went wrong.";

        let icon = "error";
        if (status === 409) icon = "info"; // Already in cart
        else if (status === 400) icon = "warning";

        Swal.fire({
          position: "top-end",
          icon,
          title: message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return handleAddToCart;
};

export default useHandleAddToCart;
