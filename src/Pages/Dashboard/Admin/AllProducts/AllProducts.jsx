import React, { useEffect, useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import useAxios from "../../../../Hook/useAxios";

const AllProducts = () => {
    const axiosPublic = useAxios();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axiosPublic.get("/products"); 
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
  return (
    <div className="p-6">
      <div className="flex justify-between">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      <h1 className="text-xl font-bold font-serif ml-2">
          Total products<span className=" text-success">({products.length})</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow hover:shadow-md cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.images.default} alt={product.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{product.title}</h3>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          refetch={fetchProducts}
        />
      )}
    </div>
  );
};

export default AllProducts;
