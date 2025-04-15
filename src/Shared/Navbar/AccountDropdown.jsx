import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiArrowDropDownLine, RiListSettingsFill } from "react-icons/ri";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { BsBoxes } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../Hook/useAdmin";

// Account links for customer users
const CustomerAccountLinks = [
  // { path: "/dashboard/accountdetails", label: "My Account", icon: <FiUser /> },
  { path: "/dashboard/orders", label: "My Orders", icon: <BiMessageSquareDetail /> },
  { path: "/dashboard/trackorder", label: "Order Tracking", icon: <GoLocation /> },
  { path: "/dashboard/myaddress", label: "Profile", icon: <RiListSettingsFill /> },
];

// Account links for admin users
const AdminAccountLinks = [
  { path: "/dashboard/accountdetails", label: "My Account", icon: <FiUser /> },
  { path: "/dashboard/trackorder", label: "Order Tracking", icon: <GoLocation /> },
  { path: "/dashboard/orders", label: "My Vouchers", icon: <BiMessageSquareDetail /> },
  { path: "/dashboard/myaddress", label: "Settings", icon: <RiListSettingsFill /> },
  { path: "/dashboard/manageorders", label: "Manage Orders", icon: <TfiShoppingCartFull /> },
  { path: "/dashboard/allproduct", label: "All Products", icon: <BsBoxes /> },
  { path: "/dashboard/addproduct", label: "Add Product", icon: <MdAddCircleOutline /> },
  { path: "/dashboard/allusers", label: "Manage Users", icon: <FiUser /> },
];

const AccountDropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  if (isAdminLoading) return null;

  const linksToShow = isAdmin ? AdminAccountLinks : CustomerAccountLinks;

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div
        className="flex items-center font-medium whitespace-nowrap"
        onClick={handleDropdownToggle}
      >
        Account <RiArrowDropDownLine className="w-6 h-6" />
      </div>

      {isDropdownOpen && (
        <ul className="absolute bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm top-full">
          {user?.email ? (
            <>
              {linksToShow.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={handleClose}
                  className="flex gap-2 items-center ml-4 mt-2 hover:text-success"
                >
                  {item.icon}
                  <h1>{item.label}</h1>
                </Link>
              ))}
              <button
                onClick={() => {
                  logOut();
                  handleClose();
                }}
                className="flex gap-2 items-center ml-4 mt-2 hover:text-success w-full text-left"
              >
                <FiLogOut />
                <h1>Sign Out</h1>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={handleClose}
              className="flex gap-2 items-center ml-4 mt-2 hover:text-success"
            >
              <FiUser />
              <h1>Login</h1>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default AccountDropdown;
