import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "../../../Hook/useWindowSize";
import { SampleNextArrow, SamplePrevArrow } from "./Arrow/Arrow";
// import CategoryCard from "./Arrow/CategoryCard";
import PromotionCard from "./PromotionCard";
import { axiosSecure } from "../../../Hook/useAxios";
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

const FeaturedCategories = ({
  title = "Featured Categories",
  showPromotions = true,
  promotionCards = [],
  categoryLimit = 4,
  productsPerSlide = { default: 4, xl: 6 },
  apiEndpoints = {
    categories: "/products/categories",
    products: "/products/featuredCategories"
  }
}) => {
  const size = useWindowSize();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Default promotion cards if none provided
  const defaultPromotions = [
    {
      title: "Everyday Fresh & Clean with Our Products",
      bgurl: "url('http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png')",
    },
    {
      title: "Make your Breakfast Healthy and Easy",
      bgurl: "url('http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png')",
    },
    {
      title: "The best Organic Products Online",
      bgurl: "url('http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png')",
    },
  ];

  const finalPromotions = promotionCards.length > 0 ? promotionCards : defaultPromotions;

  // Fetch categories
  useEffect(() => {
    axiosSecure.get(apiEndpoints.categories)
      .then((res) => {
        setCategories(res.data.slice(0, categoryLimit));
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, [apiEndpoints.categories, categoryLimit]);

  // Fetch products based on selected category
  useEffect(() => {
    axiosSecure.get(`${apiEndpoints.products}/${selectedCategory}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, [selectedCategory, apiEndpoints.products]);

  // Slider settings
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: size >= 1280 ? productsPerSlide.xl : productsPerSlide.default,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="featured-categories">
      {/* Header Section */}
      <div className="block md:flex flex-cols-1 justify-between text-center items-center lg:flex-cols-2 md:mb-1 pb-10">
        <h1 className="text-4xl text-[#253D4E] font-bold my-4">
          {title}
        </h1>
        
        {/* Category Filters */}
        <ul className="flex gap-5 md:justify-end justify-center flex-wrap text-lg">
          <li className="link-hover font-medium">
            <Link 
              onClick={() => setSelectedCategory("all")}
              className={selectedCategory === "all" ? "text-primary" : ""}
            >
              All
            </Link>
          </li>
          {categories?.map((category, i) => (
            <li key={i} className="link-hover">
              <Link 
                onClick={() => setSelectedCategory(category?.categories || category?.id)}
              >
                {category?.title || category?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Slider */}
      <div className="my-8">
        {products.length > 0 ? (
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={`product-${index}`}>
                <CategoryCard
                  imageSrc={product.imageSrc || product.image}
                  title={product.title || product.name}
                  description={product.description}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center py-10">
            No products available in this category
          </div>
        )}
      </div>

      {/* Promotions Section */}
      {showPromotions && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-6 mx-3 lg:mx-2">
          {finalPromotions.map((card, index) => (
            <PromotionCard key={`promo-${index}`} card={card} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCategories;
