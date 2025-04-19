import { BsChevronDown, BsHeadset, BsPlusCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// Categories Data
const categories = [
  { img: "category-1.svg", name: "Milks and Dairies" },
  { img: "category-2.svg", name: "Clothing & Beauty" },
  { img: "category-3.svg", name: "Pet Foods and Toy" },
  { img: "category-4.svg", name: "Baking Material" },
  { img: "category-5.svg", name: "Fresh Fruit" },
  { img: "category-6.svg", name: "Wines and Drinks" },
  { img: "category-7.svg", name: "Fresh Seafood" },
  { img: "category-8.svg", name: "Fast Food" },
  { img: "category-9.svg", name: "Vegetables" },
  { img: "category-10.svg", name: "Bread and Juice" },
];

// Navigation Links
const navLinks = [
  "Hot Deals",
  "Food",
  "Vegetables",
  "Drink",
  "Cookies",
  "Meat & Seafood",
  "Bakery",
];

// Pages Dropdown Links
const pages = [
  { path: "/blogs", name: "Blogs" },
  { path: "/about", name: "About Me" },
  { path: "/contact", name: "Contact Us" },
  { path: "/login", name: "Login" },
];

// Category Item Component
const CategoryItem = ({ img, name }) => (
  <div className="flex items-center gap-4 w-full border px-5 py-3 rounded cursor-pointer hover:border-success hover:text-success hover:shadow-md">
    <img
      className="w-8 h-8"
      src={`http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/${img}`}
      alt={name}
    />
    <h1 className="text-[15px] font-medium">{name}</h1>
  </div>
);

const NavCategories = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex gap-6 justify-around items-center py-2">
        {/* Categories Dropdown */}
        <div className="relative group">
          <button className="w-[250px] h-[44px] rounded bg-success text-white flex justify-between items-center px-5 hover:bg-opacity-90">
            Browse All Categories <BsChevronDown />
          </button>
          <div className="absolute left-0 w-[550px] mt-2 bg-white border border-success shadow-lg rounded-lg py-6 z-50 hidden group-hover:block">
            <div className="grid grid-cols-2 gap-3 px-6">
              {categories.map((cat, index) => (
                <CategoryItem key={index} img={cat.img} name={cat.name} />
              ))}
            </div>
            <div className="flex justify-center mt-4 cursor-pointer">
              <span className="flex items-center gap-2 text-success font-medium">
                <BsPlusCircle className="w-6 h-6" /> Show more...
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-5">
          <Link to="/">
            <li className="hover:text-success cursor-pointer font-medium">
              Home
            </li>
          </Link>
          {navLinks.map((link, index) => (
            <Link to="/menu">
              <li
                key={index}
                className="hover:text-success cursor-pointer font-medium"
              >
                {link}
              </li>
            </Link>
          ))}

          {/* Pages Dropdown (Using Hover) */}
          <div className="relative group">
            <button className="flex items-center cursor-pointer hover:text-success font-medium">
              Pages <RiArrowDropDownLine className="w-6 h-6" />
            </button>
            <ul className="absolute left-0 w-[230px] bg-white rounded-md z-50 p-2 shadow-md hidden group-hover:block border">
              {pages.map((page, index) => (
                <Link
                  to={page.path}
                  className="block px-4 py-2 hover:bg-gray-100 font-medium"
                  key={index}
                >
                  {page.name}
                </Link>
              ))}
            </ul>
          </div>
        </ul>

        {/* Support Section */}
        <div className="flex items-center">
          <BsHeadset className="h-[40px] w-[40px]" />
          <div className="ml-2">
            <span className="text-lg text-success font-bold">1900-80</span>
            <br />
            <span className="text-xs text-gray-600">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCategories;
