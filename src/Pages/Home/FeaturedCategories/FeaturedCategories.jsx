import React from "react";
 import cat from "../../../assets/FeaturedCategories/cat-13-1.png";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import useWindowSize from "../../../Hook/useWindowSize";
 
 import { SampleNextArrow, SamplePrevArrow } from "./Arrow/Arrow";
 import CategoryCard from "./Arrow/CategoryCard";
 import PromotionCard from "./PromotionCard";
 
 // Main FeaturedCategories Component
 const FeaturedCategories = () => {
   const size = useWindowSize();
 
   const promotionCardInfo = [
     {title: "Everyday Fresh & Clean with Our Products",
       bgurl:"url('http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png')"
     },
     {title: "Make your Breakfast Healthy and Easy",
       bgurl:"url('http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png')"
     },
     {title: "The best Organic Products Online",
       bgurl:"url('http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png')"
     },
   ];
 
 
 
   const CategoriInfo = [
     {
       imageSrc: cat,
       title: "Fresh Cakes & Milk",
       description: "20 varieties available",
     },
     {
       imageSrc: cat,
       title: "Delicious Desserts",
       description: "15 different flavors",
     },
     {
       imageSrc: cat,
       title: "Milk & Pastries",
       description: "Freshly baked every day",
     },
     {
       imageSrc: cat,
       title: "Tasty Cakes & Cookies",
       description: "Perfect for every occasion",
     },
     {
       imageSrc: cat,
       title: "Dairy Delights",
       description: "Homemade and wholesome",
     },
     {
       imageSrc: cat,
       title: "Gourmet Milk & Cake",
       description: "A treat for your taste buds",
     },
     {
       imageSrc: cat,
       title: "Sweets & Milk",
       description: "Handpicked ingredients",
     },
     {
       imageSrc: cat,
       title: "Milk & Muffins",
       description: "Freshly baked for you",
     },
     {
       imageSrc: cat,
       title: "Pastries & Cake Delights",
       description: "Indulge in our bestsellers",
     },
   ];
 
   const settings = {
     arrows: true,
     infinite: true,
     speed: 500,
     slidesToShow: size >= 1280 ? 6 : 4,
     slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
   };
 
   return (
     <section>
       {/* Featured Categories Header */}
       <div className="container flex justify-between items-center mt-4">
         <h1 className="font-bold text-[32px] text-[#253D4E]">
           Featured Categories
         </h1>
         <ul className="flex text-[16px] text-textBody font-normal gap-4">
           <li className="link-hover font-medium">
             <a href="/">All</a>
           </li>
           <li className="link-hover font-medium">
             <a href="/">Cake &amp; Milk</a>
           </li>
           <li className="link-hover font-medium">
             <a href="/">Coffes &amp; Teas</a>
           </li>
           <li className="link-hover font-medium">
             <a href="/">Pet Foods</a>
           </li>
           <li className="link-hover font-medium">
             <a href="/">Vegetables</a>
           </li>
         </ul>
       </div>
 
       {/* Featured Categories Slider */}
       <div>
         <Slider {...settings}>
           {CategoriInfo.map((card, index) => (
             <div key={index}>
               <CategoryCard
                 imageSrc={card.imageSrc}
                 title={card.title}
                 description={card.description}
               />
             </div>
           ))}
         </Slider>
       </div>
 
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-6 mx-3 lg:mx-2">
         {promotionCardInfo.map((card, index) => (
           <PromotionCard key={index} card={card} />
         ))}
       </div>
     </section>
   );
 };
 
 export default FeaturedCategories;