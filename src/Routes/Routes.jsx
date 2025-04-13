import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import MyCart from "../Pages/MyCart/MyCart";
import NotFound from "../Pages/NotFound/NotFound";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Menu from "../Pages/Menu/Menu";
import MyAddress from "../Pages/Dashboard/MyAddress";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/Privateuser/MyOrders";
import AccountDetails from "../Pages/Dashboard/AccountDetails";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import TrackYourOrder from "../Pages/Dashboard/Privateuser/TrackYourOrder";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import ManageOrders from "../Pages/Dashboard/Admin/ManageOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <PrivateRoute><MyCart /></PrivateRoute>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout /></PrivateRoute> ,
      },
      {
        path: "dashboard",
        element:  <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
          {
            path: "trackorder",
            element: <TrackYourOrder />,
          },
          {
            path: "myaddress",
            element: <MyAddress />,
          },
          {
            path: "orders",
            element: <MyOrders />,
          },
          {
            path: "accountdetails",
            element: <AccountDetails />,
          },
          //----admin routes-----//
          {
            path: "allusers",
            element: <AdminRoute><AllUsers /></AdminRoute>,
          },
          {
            path: "manageproducts",
            element: <AdminRoute><ManageOrders /></AdminRoute>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);