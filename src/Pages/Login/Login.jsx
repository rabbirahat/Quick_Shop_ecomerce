import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/GoogleLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      console.log(localStorage.getItem("access-token"));  
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
      reset();
    });
  };

  if (Object.keys(errors).length > 0) {
    console.log("Form Errors:", errors);
  }
  
  return (
    <div>
      <div className="lg:flex lg:justify-center gap-10 mt-14 mx-8">
        <div>
          <img
            className="w-[410px] h-[500px] hidden lg:block"
            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png"
            alt=""
          />
        </div>
        <div className="lg:w-[450px] mt-10">
          <h1 className="text-4xl font-bold text-[#253D4E]">LOGIN</h1>
          <p className="font-medium mt-1 mb-6 text-[#B6B6B6]">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-success font-bold">
              {" "}
              Create here
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">Email is required</p>
            )}
            <input
              type="email"
              {...register("email", { required: true })}
              className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
              placeholder="Your Email Address"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mb-2">Password is required</p>
            )}
            <input
              type="password"
              {...register("password", { required: true })}
              className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
              placeholder="Your Password"
            />
            <div className="flex justify-between">
              <div className="flex cursor-pointer">
                <input
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-default-checkbox"
                />
                <label
                  htmlFor="hs-default-checkbox"
                  className="text-sm text-success ml-3 mt-1 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forget-password"
                className="font-medium text-[#B6B6B6]"
              >
                Forget Password
              </Link>
            </div>
            <button
              type="submit"
              className=" bg-[#253D4E] w-full py-3 rounded text-white mt-8  translate-y-0 hover:-translate-y-1 duration-300"
            >
              <span className="flex items-center gap-4 justify-center translate-y-0 hover:-translate-y-1 duration-300">
                <AiOutlineLogin className="w-8 h-8"></AiOutlineLogin> Please
                Login
              </span>
            </button>
            <GoogleLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
