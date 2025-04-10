import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div className="mx-8">
      <div className="lg:w-[500px] w-full mx-auto h-screen mt-6">
        <img
          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/forgot_password.svg"
          alt=""
        />
        <h1 className="text-4xl font-bold mt-4 text-[#253D4E] font-lato">
          Forget Your
        </h1>
        <h1 className="text-4xl font-bold mt-2 mb-4 text-[#253D4E] font-lato">
          Password?
        </h1>
        <p className="mb-4">
          Not to worry, we got you! Let’s get you a new password. Please enter
          your email address.
        </p>
        <form>
          <input
            type="email"
            className="py-3 px-3 border border-[ #E5E5E5] rounded w-full mb-4"
            placeholder="Your Email Address"
          />
          <div className="flex justify-between">
            <div className="flex cursor-pointer">
              <input
                type="checkbox"
                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-default-checkbox"
              />
              <label
                for="hs-default-checkbox"
                className="text-sm text-[#B6B6B6] ml-3 mt-1 cursor-pointer"
              >
                I agree to terms & Policy.
              </label>
            </div>

            <Link to="/login" className="text-success font-bold">
              Login here 
            </Link>
          </div>
          <button className=" bg-[#253D4E] w-[150px] py-3 rounded text-white font-medium mt-8  cursor-pointer hover:bg-success ease-in duration-300">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
