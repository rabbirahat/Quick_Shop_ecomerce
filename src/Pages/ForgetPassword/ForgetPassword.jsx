import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const onForget = async (e) => {
    e.preventDefault();
    if (!email) return Swal.fire("Please enter your email");

    try {
      await forgetPassword(email);
      Swal.fire({
        title: "Reset mail sent!",
        text: "Please check your email to reset the password.",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/login", { replace: true });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="mx-8">
      <div className="lg:w-[500px] w-full mx-auto h-screen mt-6">
        <img
          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/forgot_password.svg"
          alt="Forgot password"
        />
        <h1 className="text-4xl font-bold mt-4 text-[#253D4E] font-lato">
          Forget Your
        </h1>
        <h1 className="text-4xl font-bold mt-2 mb-4 text-[#253D4E] font-lato">
          Password?
        </h1>
        <p className="mb-4 text-gray-600">
          Not to worry, we got you! Let’s get you a new password. Please enter
          your email address.
        </p>
        <form onSubmit={onForget}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
            placeholder="Your Email Address"
          />
          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-[#B6B6B6]">
              <input
                type="checkbox"
                className="mr-2"
                required
              />
              I agree to terms & Policy.
            </label>
            <Link to="/login" className="text-success font-bold">
              Login here
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#253D4E] w-[150px] py-3 rounded text-white font-medium mt-8 cursor-pointer hover:bg-success transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
