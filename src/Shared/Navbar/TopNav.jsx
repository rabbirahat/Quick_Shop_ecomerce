import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { FiLogOut, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { RiArrowDropDownLine, RiListSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/QS_LOGO.png";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hook/useCarts.jsx";

// Navigation Links
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/blogs", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/login", label: "Login" },
];

// Account Dropdown Links
const accountLinks = [
  { path: "/dashboard", label: "My Account", icon: <FiUser /> },
  { path: "/order-tracking", label: "Order Tracking", icon: <GoLocation /> },
  { path: "/my-voucher", label: "My Voucher", icon: <BiMessageSquareDetail /> },
  { path: "/settings", label: "Settings", icon: <RiListSettingsFill /> },
];

const NavMenu = ({ links, onClick }) => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-2">
      {links.map((link, index) => {
        // Hide Login if user is logged in
        if (user?.email && link.path === "/login") return null;

        return (
          <Link
            key={index}
            to={link.path}
            onClick={onClick}
            className="hover:bg-success px-2 py-3 rounded-lg ease-in"
          >
            {link.label}
          </Link>
        );
      })}

      {user?.email && (
        <button
          onClick={logOut}
          className="text-left hover:bg-success px-2 py-3 rounded-lg ease-in"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

const AccountDropdown = () => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <div className="relative group cursor-pointer">
      <div className="flex items-center font-medium whitespace-nowrap">
        Account <RiArrowDropDownLine className="w-6 h-6" />
      </div>

      <ul className="absolute hidden group-hover:block bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm top-full ">
        {user?.email ? (
          <>
            {accountLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex gap-2 items-center ml-4 mt-2 hover:text-success"
              >
                {item.icon} <h1>{item.label}</h1>
              </Link>
            ))}
            <button
              onClick={logOut}
              className="flex gap-2 items-center ml-4 mt-2 hover:text-success w-full text-left"
            >
              <FiLogOut /> <h1>Sign Out</h1>
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex gap-2 items-center ml-4 mt-2 hover:text-success"
          >
            <FiUser /> <h1>Login</h1>
          </Link>
        )}
      </ul>
    </div>
  );
};

const CartWishlistIcons = () => {
  const { user } = useContext(AuthContext);
  const [{cart}] = useCart();
  console.log(cart);
  return (
    <ul className="flex font-lato items-center justify-between gap-5 font-base font-medium mr-5">
      <li>
        <Link
          className="flex gap-1 items-center hover:text-success"
          to="/wishlist"
        >
          <BsHeart /> Wishlist
        </Link>
      </li>
      <li>
        {user?.email ? (
          <Link
            className="flex gap-1 items-center hover:text-success relative"
            to="/cart"
          >
            {cart?.length > 0 ? (
              <span className="absolute text-xs top-[-9px] left-[9px] bg-success rounded-lg px-1 text-white">
                {cart?.length}
              </span>
            ) : null}
            <AiOutlineShoppingCart /> Cart
          </Link>
        ) : (
          <Link
            className="flex gap-1 items-center hover:text-success relative"
            to="/login"
          >
            Login
          </Link>
        )}
      </li>
    </ul>
  );
};

const SearchBar = () => (
  <form className="flex items-center">
    <div className="relative w-full">
      <input
        type="text"
        className="border border-success text-gray rounded-lg block lg:w-xl pl-10 p-2.5"
        placeholder="Search.."
      />
      <button
        type="button"
        className="flex absolute inset-y-0 right-0 items-center pr-3"
      >
        <svg
          className="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </form>
);

const MobileNav = ({ isOpen, setIsOpen }) => (
  <div className="lg:hidden block">
    <div className="flex justify-between items-center mt-10 relative">
      <GiHamburgerMenu
        className="cursor-pointer w-16"
        onClick={() => setIsOpen(!isOpen)}
      />
      <img className="h-[62.17px]" src={logo} alt="logo" />
      <CartWishlistIcons />
    </div>

    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute top-[-50px] left-[-20px] bg-white w-[380px] h-screen z-10 px-5 shadow-lg m-6`}
    >
      <ul className="flex justify-between items-center py-5">
        <li>
          <Link className="display-2 bg-success" to="/">
            <img className="h-[48px]" src={logo} alt="logo" />
          </Link>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer hover:bg-success px-2 py-3 rounded-lg ease-in"
        >
          X
        </li>
      </ul>

      <SearchBar />
      <NavMenu links={navLinks} onClick={() => setIsOpen(false)} />
    </div>
  </div>
);

const DesktopNav = () => (
  <div className="hidden lg:block">
    <div className="h-[128px] flex items-center justify-between">
      <img className="h-[62.17px]" src={logo} alt="logo" />
      <SearchBar />
      <div className="flex gap-5 items-center">
        <AccountDropdown />
        <CartWishlistIcons />
      </div>
    </div>
  </div>
);

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <DesktopNav />
    </>
  );
};

export default TopNav;
