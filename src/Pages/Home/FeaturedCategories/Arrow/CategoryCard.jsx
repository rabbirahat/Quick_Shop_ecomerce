const CategoryCard = ({ imageSrc, title, description }) => (
    <div className="flex flex-col justify-center items-center w-[136px] h-[177px] text-center rounded-lg">
        <img src={imageSrc} alt={title} />
        <h3 className='text-[16px] font-bold'>{title}</h3>
        <p className='text-[#B6B6B6] text-[10px] '>{description}</p>
    </div>
);
export default CategoryCard;