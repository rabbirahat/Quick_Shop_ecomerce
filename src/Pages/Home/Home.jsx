import Banner from "./Banner/Banner";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import PopularProducts from "./PopulerProducts/PopulerProducts";
import DailyBestSales from "./DailyBestSales/DailyBestSales";
import DealsOfTheDays from "./DealsofTheDay/DealsofTheDay";

const Home = () => {
    return (
        <div>
         <Banner />
         <FeaturedCategories />
         <PopularProducts/>
         <DailyBestSales/>
         <DealsOfTheDays/>
        </div>
    );
};

export default Home;