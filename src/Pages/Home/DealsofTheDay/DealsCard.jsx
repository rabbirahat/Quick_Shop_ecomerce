import { AiOutlineShoppingCart } from "react-icons/ai";
import ProductInfoCard from "../../../Components/ProductInfoCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useHandleAddToCart from "../../../Hook/useHandleAddToCart";

const DealsCard = ({ product }) => {
  const handleAddToCart = useHandleAddToCart();
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Use countdown target from product
  const countdownTarget = product.countdownTarget;

  useEffect(() => {
    if (!countdownTarget) return;

    const targetDate = new Date(countdownTarget).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { hours: "00", minutes: "00", seconds: "00" };
      }

      const formatNumber = (num) => String(num).padStart(2, "0");

      return {
        hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatNumber(Math.floor((difference / (1000 * 60)) % 60)),
        seconds: formatNumber(Math.floor((difference / 1000) % 60)),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownTarget]);

  return (
    <div className="mb-5 mx-2 lg:mx-auto">
      <div className="bg-brand2 w-[90%] mx-auto h-[300px] rounded-[10px] flex justify-center items-center">
        <img
          src={product.images.default}
          alt={product.title}
          className="object-cover max-h-[280px]"
        />
      </div>

      <div className="relative mt-[-50%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer">
        {/* Countdown Timer */}
        <div className="grid grid-cols-3 justify-center mx-auto w-[85%] text-center">
          <TimeBlock label="Hours" value={timeLeft.hours} />
          <TimeBlock label="Mins" value={timeLeft.minutes} />
          <TimeBlock label="Sec" value={timeLeft.seconds} />
        </div>

        {/* Price Section */}
        <div className="max-w-[86%] shadow-lg bg-white mx-auto mt-3 rounded-[10px] py-6 px-8">
          <ProductInfoCard productData={product} />
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full justify-center bg-success flex items-center text-white px-3 py-2 rounded my-4 btn-hover"
          >
            <AiOutlineShoppingCart className="mr-2" /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Countdown TimeBlock Component
const TimeBlock = ({ label, value }) => (
  <div className="bg-white mx-[5px] py-2 rounded shadow">
    <div className="text-[20px] font-black text-[#3BB77E]">{value}</div>
    <div className="text-[#7E7E7E] font-semibold">{label}</div>
  </div>
);

export default DealsCard;
