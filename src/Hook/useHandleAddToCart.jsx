import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useCart from "./useCarts";
import useAxiosSecure from "./useAxiosSecure";

const useHandleAddToCart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, refetch] = useCart();
const axiosSecure = useAxiosSecure();

  const handleAddToCart = async (productData) => {
    if (user && user.email) {
      const cartItem = {
        menuId: productData._id,
        email: user.email,
        quantity: 1, // Default quantity for new additions
      };

      try {
        const res = await axiosSecure.post("/carts", cartItem);

        if (res.status === 201) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added to your cart!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } else if (res.status === 200) {
          // Optional: notify if quantity updated (if backend ever uses 200 for that)
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Product already in cart. Quantity updated!",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      } catch (error) {
        const status = error.response?.status;
        const message =
          error.response?.data?.message || "Something went wrong.";

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
