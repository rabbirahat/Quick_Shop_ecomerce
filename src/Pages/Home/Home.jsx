import Banner from "./Banner/Banner";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import PopularProducts from "./PopulerProducts/PopulerProducts";
import DailyBestSales from "./DailyBestSales/DailyBestSales";
import DealsOfTheDays from "./DealsofTheDay/DealsofTheDay";
import CatagoraisedProduct from "./CatagoraisedProduct/CatagoraisedProduct";

const Home = () => {
    return (
        <div>
         <Banner />
         <FeaturedCategories />
         <PopularProducts/>
         <DailyBestSales/>
         <DealsOfTheDays/>
         <CatagoraisedProduct/>
        </div>
    );
};

export default Home;