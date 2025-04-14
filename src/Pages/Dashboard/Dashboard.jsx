import { BsBoxes, BsCartDash } from "react-icons/bs";
import { FiLogOut, FiUser } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { RiListSettingsLine } from "react-icons/ri";
import { Link, Outlet, useNavigate } from "react-router-dom";

import useAdmin from "../../Hook/useAdmin";
import useAuth from "../../Hook/useAuth";
import { IoMdAddCircle } from "react-icons/io";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { MdAddCircleOutline } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };
  if (isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  return (
    <div className="w-full mt-8">
      <div className="md:flex gap-20">
        <Link className="md:ml-4" to="/dashboard/myaddress">
          <span className="flex items-center bg-success border border-[#E5E5E5] h-[50px] w-[220px] md:ml-0 ml-2 mb-3 rounded-lg font-semibold hover:bg-white hover:border-success">
            <RiListSettingsLine className="block text-xl mr-4 ml-4" /> Dashboard
          </span>
        </Link>
        <h1 className="text-4xl font-bold ml-2">
          Hello <span className="text-success"> {user?.displayName || "User"}</span>!
        </h1>
      </div>

      <div className="lg:max-w-7xl md-w-full mx-auto md:flex gap-16">
        <div className="md:w-[22%] md:max-h-max h-full p-3">
          {!isAdmin ? (
            // <-------------------User Links------------>
            <>
              <Link to="trackorder">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <BsCartDash className="block text-xl mr-4 ml-4" /> Track Your
                  Order
                </span>
              </Link>
              <Link to="myaddress">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <GoLocation className="block text-xl mr-4 ml-4" /> My Address
                </span>
              </Link>
              <Link to="accountdetails">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <FiUser className="block text-xl mr-4 ml-4" /> Account Details
                </span>
              </Link>
            </>
          ) : (
            // <-------------------Admin Links------------>
            <>
              <Link to="manageproducts">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <TfiShoppingCartFull className="block text-xl mr-4 ml-4" />{" "}
                  Manage Orders
                </span>
              </Link>
              <Link to="allproduct">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <BsBoxes className="block text-xl mr-4 ml-4" /> All Product
                </span>
              </Link>
              <Link to="addproduct">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <MdAddCircleOutline  className="block text-xl mr-4 ml-4" /> Add
                  Product
                </span>
              </Link>
              <Link to="allusers">
                <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                  <FiUser className="block text-xl mr-4 ml-4" /> Manage Users
                </span>
              </Link>
            </>
          )}
          <button
            onClick={() => handleLogout()}
            className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md text-left px-4"
          >
            <FiLogOut className="text-xl mr-4" /> Log out
          </button>
        </div>

        <div className="md:w-[80%] p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
