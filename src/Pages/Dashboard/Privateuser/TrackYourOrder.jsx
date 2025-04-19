import React, { useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const TrackYourOrder = () => {
  const axiosSecure = useAxiosSecure();
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setError("");
    setOrder(null);
    setLoading(true);

    try {
      const res = await axiosSecure.post("/orders/track", {
        orderId,
        email,
      });

      setOrder(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to track order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-scale1">Orders Tracking</h1>
      <p className="mt-6 text-gray-500">
        To track your order please enter your OrderID and Billing Email then press "Track".
      </p>

      <form onSubmit={handleTrackOrder} className="md:w-2/4 w-full mt-6">
        <div>
          <label className="font-medium">Order ID</label>
          <input
            className="border focus:border-scale2 py-4 pl-3 mt-1 w-full rounded-md"
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="font-medium">Billing Email</label>
          <input
            className="border focus:border-scale2 py-4 pl-3 mt-1 w-full rounded-md"
            type="email"
            placeholder="Email you used during checkout"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-success py-3 w-[130px] font-medium text-white rounded-md mt-6"
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {order && (
  <div className="mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-lg max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold text-scale1 mb-4 border-b pb-2">Order Details</h2>
    
    <div className="space-y-2 text-gray-700">
      <p>
        <span className="font-semibold text-gray-800">🆔 Order ID:</span>{" "}
        <span className="text-gray-600">{order._id}</span>
      </p>
      <p>
        <span className="font-semibold text-gray-800">📅 Order Date:</span>{" "}
        {new Date(order.orderDate).toLocaleDateString()}
      </p>
      <p>
        <span className="font-semibold text-gray-800">📦 Status:</span>{" "}
        <span className={`font-medium px-2 py-1 rounded-full text-sm ${
          order.status === "Completed"
            ? "bg-green-100 text-green-700"
            : order.status === "Processing"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-gray-100 text-gray-700"
        }`}>
          {order.status}
        </span>
      </p>
      <p>
        <span className="font-semibold text-gray-800">💳 Payment Method:</span>{" "}
        {order.paymentMethod}
      </p>
      <p>
        <span className="font-semibold text-gray-800">💰 Total:</span>{" "}
        <span className="text-success font-semibold">${order.total.toFixed(2)}</span>
      </p>
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-semibold text-scale1 mb-2">🛒 Items Ordered:</h3>
      <ul className="divide-y divide-gray-200">
        {order.items.map((item, idx) => (
          <li key={idx} className="py-2 flex justify-between text-gray-600">
            <span>{item.title}</span>
            <span className="font-medium">Qty: {item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

    </div>
  );
};

export default TrackYourOrder;
