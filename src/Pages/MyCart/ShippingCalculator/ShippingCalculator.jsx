import React, { useState } from "react";

const ShippingCalculator = () => {
  const [shippingInfo, setShippingInfo] = useState({
    country: "Bangladesh",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="border border-gray-300 rounded p-5">
      <p className="text-2xl font-bold">Calculate Shipping</p>
      <p className="text-base font-semibold mt-2">
        Flat rate: <span className="text-success font-bold">5%</span>
      </p>

      <form className="mt-5">
        <select
          className="border border-gray-300 rounded-md w-full py-3 px-5"
          name="country"
          value={shippingInfo.country}
          onChange={handleChange}
        >
          <option value="Afghanistan">Afghanistan</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <input
            className="border border-gray-300 rounded-md py-3 px-5"
            type="text"
            name="city"
            placeholder="State / City"
            value={shippingInfo.city}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 rounded-md py-3 px-5"
            type="text"
            name="zip"
            placeholder="Postcode / ZIP"
            value={shippingInfo.zip}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ShippingCalculator;
