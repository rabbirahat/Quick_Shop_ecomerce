import React from 'react';
import { BsBag, BsCartDash } from 'react-icons/bs';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { RiListSettingsLine } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Dashboard = () => {
    return (
        <div className="w-full mt-8">
            {/* Header Section */}
            <div className="md:flex gap-20">
                <Link className="md:ml-4" to="/dashboard">
                    <span className="flex items-center bg-success border border-[#E5E5E5] h-[50px] w-[220px] md:ml-0 ml-2 mb-3 rounded-lg font-semibold hover:bg-white hover:border-success">
                        <RiListSettingsLine className="block text-xl mr-4 ml-4" /> Dashboard
                    </span>
                </Link>
                <h1 className="text-4xl font-bold text-success ml-2">Hello Rosie!</h1>
            </div>

            {/* Main Content Section */}
            <div className="lg:max-w-7xl md-w-full mx-auto md:flex gap-16">
                {/* Sidebar Section */}
                <div className="md:w-[22%] md:max-h-max h-full p-3">
                    <CustomLink to="/dashboard">
                        <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                            <BsBag className="block text-xl mr-4 ml-4" /> Orders
                        </span>
                    </CustomLink>
                    <Link to="trackorder">
                        <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                            <BsCartDash className="block text-xl mr-4 ml-4" /> Track Your Order
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
                    <Link to="#">
                        <span className="flex items-center border border-[#E5E5E5] h-[50px] w-[220px] mb-3 rounded-lg font-semibold hover:border-success hover:shadow-md">
                            <FiLogOut className="block text-xl mr-4 ml-4" /> Log out
                        </span>
                    </Link>
                </div>

                {/* Outlet Section */}
                <div className="md:w-[80%] p-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;