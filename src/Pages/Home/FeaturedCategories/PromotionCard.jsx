import { FaArrowRight } from "react-icons/fa";

const PromotionCard = ({card}) => {
  return (
    <div
    style={{ backgroundImage: card.bgurl }}
      className={`relative w-full h-60 bg-cover rounded`}
    >
      <div className="absolute top-5 z-[2] p-8">
        <h3 className="text-[24px] font-bold text-[#253D4E] hover:-translate-y-3 duration-500 min-h-[100px]">
          {card.title}
        </h3>
        <button className="bg-success flex items-center text-white px-3 py-1 rounded my-4 btn-hover">
          <p className="font-[12px] ">Shop Now</p>
          <FaArrowRight className="m-2 p=2" />
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
