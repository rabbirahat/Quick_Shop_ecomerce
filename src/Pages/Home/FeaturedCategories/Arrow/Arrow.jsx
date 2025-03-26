
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export const SamplePrevArrow = ({ onClick }) => (
    <div
        className='cursor-pointer inline-block absolute top-[-10px] right-2 p-2 z-10 bg-white  hover:bg-[#3BB77E] hover:text-white translate-y-0  duration-300 rounded-full shadow-lg'
        onClick={onClick}
    >
        <FaArrowRight />
    </div>
);

export const SampleNextArrow = ({ onClick }) => (
    <div
        className='cursor-pointer inline-block absolute  top-[-10px]  right-12 p-2 z-10 bg-white  hover:bg-[#3BB77E] hover:text-white translate-y-0  duration-300 rounded-full shadow-lg'
        onClick={onClick}
    >
        <FaArrowLeft />
    </div>
);