import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Arrow = ({ prevSlide, nextSlide }) => {
    return (
        <>
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 rounded-full p-3 shadow-md hover:bg-green-500 transition duration-300"
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 rounded-full p-3 shadow-md hover:bg-green-500 transition duration-300"
            >
                <FaChevronRight size={24} />
            </button>
        </>
    );
};

export default Arrow;