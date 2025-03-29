import { Link } from "react-router-dom";

const SaleBanner = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover rounded-lg p-8 mt-6"
      style={{
        backgroundImage: "url('/salesBg.png')", // Ensure the correct path to your image
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gray-200 from-black via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-10 text-zinc-700 text-center">
        <p className="text-brand2 font-extrabold uppercase tracking-wide text-xl">
          Summer Sale
        </p>
        <h3 className="text-3xl font-bold mt-4 mb-2 leading-tight">
          TOP HEALTHY FOOD
        </h3>
        <p className="text-lg mb-6">
          Get 25% Off on Selected Items
        </p>
        
        <Link to="/vegetables">
          <button className="bg-success text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md btn-hover">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SaleBanner;
