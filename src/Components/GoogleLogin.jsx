import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAxios from "../Hook/useAxios";

const GoogleLogin = () => {
  const { googleSignIn ,loading} = useAuth();
  const axiosPublic = useAxios();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
if(loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <button onClick={handleGoogleSignIn} className=" bg-[#FFFFFF] w-full py-3 rounded-md  shadow-lg border text-[#7E7E7E] mt-6 translate-y-0 hover:-translate-y-1 duration-300">
      {" "}
      <span className="flex items-center gap-4 justify-center">
        {" "}
        <img
          className="w-8 h-8"
          src="https://img.icons8.com/fluency/2x/google-logo.png"
          alt=""
        />{" "}
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleLogin;
