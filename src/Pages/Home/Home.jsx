import Banner from "./Banner/Banner";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import PopularProducts from "./PopulerProducts/PopulerProducts";

const Home = () => {
    return (
        <div>
         <Banner />
         <FeaturedCategories />
         <PopularProducts/>
        </div>
    );
};

export default Home;