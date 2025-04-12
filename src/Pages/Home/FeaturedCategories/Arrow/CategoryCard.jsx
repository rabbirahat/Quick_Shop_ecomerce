import { Link } from "react-router-dom";

const CategoryCard = ({ imageSrc, title, description }) => (
  <Link to="/menu">
    <div className="flex flex-col justify-end items-center w-[136px] h-[177px] text-center rounded-lg ">
      <img src={imageSrc} alt={title} className="w-[100px]" />
      <h3 className="text-[16px] font-bold">{title}</h3>
      <p className="text-[#B6B6B6] text-[10px] ">{description}</p>
    </div>
  </Link>
);
export default CategoryCard;
