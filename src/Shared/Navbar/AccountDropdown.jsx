import { useContext, useMemo, useState } from "react";
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

// Static links
const CustomerAccountLinks = [
  { path: "/dashboard/orders", label: "My Orders", icon: <BiMessageSquareDetail /> },
  { path: "/dashboard/trackorder", label: "Order Tracking", icon: <GoLocation /> },
  { path: "/dashboard/myaddress", label: "Profile", icon: <RiListSettingsFill /> },
];

const AdminAccountLinks = [
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

  const linksToShow = useMemo(() => {
    if (isAdminLoading) return [];
    return isAdmin ? AdminAccountLinks : CustomerAccountLinks;
  }, [isAdmin, isAdminLoading]);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={closeDropdown}
    >
      <div className="flex items-center font-medium whitespace-nowrap" onClick={toggleDropdown}>
        Account <RiArrowDropDownLine className="w-6 h-6" />
      </div>

      {isDropdownOpen && (
        <ul className="absolute bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm top-full">
          {user?.email ? (
            isAdminLoading ? (
              <div className="ml-4 mt-2 text-gray-400 animate-pulse">Loading...</div>
            ) : (
              <>
                {linksToShow.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeDropdown}
                    className="flex gap-2 items-center ml-4 mt-2 hover:text-success"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
                <button
                  onClick={() => {
                    logOut();
                    closeDropdown();
                  }}
                  className="flex gap-2 items-center ml-4 mt-2 hover:text-success w-full text-left"
                >
                  <FiLogOut />
                  <span>Sign Out</span>
                </button>
              </>
            )
          ) : (
            <Link
              to="/login"
              onClick={closeDropdown}
              className="flex gap-2 items-center ml-4 mt-2 hover:text-success"
            >
              <FiUser />
              <span>Login</span>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default AccountDropdown;
