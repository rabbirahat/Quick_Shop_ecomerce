import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "./FilterSidebar/FilterSidebar";





const Menu = () => {
  const [priceRange, setPriceRange] = useState([0, 75]);
  const [selectedFilters, setSelectedFilters] = useState({
    organic: false,
    inStock: false,
  });

  const products = [
    {
      id: "1",
      title: "Seeds of Change Organic Quinoa",
      price: 2.51,
      originalPrice: 3.99,
      rating: 4.5,
      reviews: 32,
      image: "/lovable-uploads/product1.png",
      badge: "Sale",
      category: "Seeds"
    },
    {
      id: "2",
      title: "Blue Diamond Almonds",
      price: 2.33,
      originalPrice: 3.99,
      rating: 4.2,
      reviews: 16,
      image: "/lovable-uploads/product2.png",
      badge: "Sale",
      category: "Nuts"
    },
  ];

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
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Category Hero Section */}
      <div className="bg-green-50 py-8">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <FilterSidebar 
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            popularItems={popularItems}
          />

          {/* Product Grid */}
          <div className="md:col-span-3">
            {/* <ProductGrid products={products} /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
