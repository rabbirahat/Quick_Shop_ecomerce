import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiFillApple } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../Hook/useAxios";
import GoogleLogin from "../../Components/GoogleLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxios();

  const onSubmit = (data) => {
    if (data.password === data.confirm_password) {
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              const userInfo = {
                name: data.name,
                email: data.email,
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  console.log("user added to the database");
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
              Swal.fire({
                icon: "error",
                title: "Profile Update Failed",
                text: error.message,
              });
            });
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          Swal.fire({
            icon: "error",
            title: "Signup Failed",
            text: error.message,
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match",
      });
    }
  };

  return (
    <div>
      <div className="lg:flex lg:justify-center gap-10 mx-8">
        <div className="lg:w-[450px] mt-10">
          <h1 className="text-4xl font-bold text-[#253D4E]">
            Create an Account
          </h1>
          <p className="font-medium mt-1 mb-6 text-[#B6B6B6]">
            Already have an account?{" "}
            <Link to="/login" className="text-success font-bold">
              Login here
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
              placeholder="User Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
              placeholder="Your Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
              placeholder="Your Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <input
              {...register("confirm_password", {
                required: "Please confirm your password",
              })}
              type="password"
              className="py-3 px-3 border border-[#E5E5E5] rounded w-full mb-4"
              placeholder="Confirm Password"
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm">
                {errors.confirm_password.message}
              </p>
            )}

            <div className="flex justify-between">
              <div className="flex cursor-pointer">
                <input
                  type="checkbox"
                  className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-default-checkbox"
                />
                <label
                  htmlFor="hs-default-checkbox"
                  className="text-sm text-[#B6B6B6] ml-3 mt-1 cursor-pointer"
                >
                  I agree to terms & Policy.
                </label>
              </div>
              <button className="font-medium text-success">Learn more</button>
            </div>
            <button
              type="submit"
              className="bg-[#253D4E] w-[130px] py-3 rounded text-white mt-8"
            >
              Signup
            </button>
          </form>
        </div>

        <div className="lg:w-[400px] lg:h-[300px] w-full h-full border shadow-lg p-8 mt-32 rounded">
          <button className=" bg-[#1877F2] w-full py-3 rounded-md text-white ">
            <span className="flex items-center gap-4 justify-center translate-y-0 hover:-translate-y-1 duration-300">
              <BsFacebook className="w-8 h-8"></BsFacebook> Continue With
              Facebook
            </span>
          </button>
         <GoogleLogin/>
          <button className=" bg-[#000000] w-full py-3 rounded-md text-white mt-6 translate-y-0 hover:-translate-y-1 duration-300">
            <span className="flex items-center gap-4 justify-center ">
              <AiFillApple className="w-8 h-8"></AiFillApple> Continue with
              Apple
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
