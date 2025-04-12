import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ProductCard from "./ProductGrid/ProductCard";
import header_blog from "../../assets/blogs/header-blog.png"
import { axiosPublic } from "../../Hook/useAxios";






const Menu = () => {
  const [priceRange, setPriceRange] = useState([0, 75]);
  const [selectedFilters, setSelectedFilters] = useState({
    organic: false,
    inStock: false,
  });

  const [products, setProducts] = useState([]);
    useEffect(() => {
      axiosPublic.get(`/products`).then((res) => {
        setProducts(res.data);
      });
    }, []);

  const popularItems = [
    
    {
        id: 19,
        badge: "Hot",
        category: "Hodo Foods",
        title: "Organic Turkey Breast",
        rating: 4.7,
        brand: "Applegate",
        price: 58.0,
        oldPrice: 62.5,
        sales: 100,
        stock: 125,
        countdownTarget: "2025-04-19 12:00:00",
        images: {
          default:
            "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
          hover: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
        },
        description:
          "Applegate Organic Turkey Breast, lean and flavorful, sliced for sandwiches and salads.",
        additionalInfo:
          "This organic turkey breast is gluten-free and contains no artificial preservatives.",
        reviews: [
          { author: "Lucas B.", rating: 5, comment: "Lean and tasty!" },
          { author: "Madison A.", rating: 4, comment: "Good quality turkey." },
        ],
      },
      {
        id: 20,
        badge: "Hot",
        category: "Hodo Foods",
        title: "Organic Turkey Breast",
        rating: 4.7,
        brand: "Applegate",
        price: 58.0,
        oldPrice: 62.5,
        sales: 100,
        stock: 125,
        countdownTarget: "2025-04-19 12:00:00",
        images: {
          default:
            "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg",
          hover: "http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg",
        },
        description:
          "Applegate Organic Turkey Breast, lean and flavorful, sliced for sandwiches and salads.",
        additionalInfo:
          "This organic turkey breast is gluten-free and contains no artificial preservatives.",
        reviews: [
          { author: "Lucas B.", rating: 5, comment: "Lean and tasty!" },
          { author: "Madison A.", rating: 4, comment: "Good quality turkey." },
        ],
      },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Category Hero Section */}
       <div className="bg-green-50 py-8" style={{ backgroundImage: `url(${header_blog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Vegetables & Tubers</h1>
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-green-500">Home</Link>
            <span className="mx-2">/</span>
            <span>Vegetables & Tubers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4">
      
          <FilterSidebar 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            popularItems={popularItems}
          />

         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
