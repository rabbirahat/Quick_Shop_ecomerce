import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const MyOrders = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.email) {
        try {
          const res = await axiosSecure.get(`/orders/user/${user.email}`);
          setOrders(res.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };

    fetchOrders();
  }, [user?.email, axiosSecure]);

  if (loading) return <p className="text-center">Loading orders...</p>;

  return (
    <div>
      <div className="border-b-2 border-slate-100 mb-4">
        <h1 className="text-2xl font-bold font-serif text-center">My Orders</h1>
      </div>

      <div className="overflow-x-auto rounded-md">
        <table className="w-full text-sm text-left">
          <thead className="bg-[#F5F5F5]">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4">{order._id.slice(0, 8)}</td>
                <td className="px-6 py-4">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td
                  className={`px-6 py-4 ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </td>
                <td className="px-6 py-4">${order.total.toFixed(2)}</td>
                <td
                  className="px-6 py-4 text-[#3BB77E] cursor-pointer hover:underline"
                  onClick={() => setSelectedOrder(order)}
                >
                  View
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedOrder(null)}
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h3>

            <p className="text-gray-600 mb-2">
              <span className="font-medium">Order ID:</span> {selectedOrder._id}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Name:</span> {selectedOrder.name}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Phone:</span> {selectedOrder.phone}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Address:</span>{" "}
              {selectedOrder.address.line1}, {selectedOrder.address.line2}, {selectedOrder.address.city}, {selectedOrder.address.zip}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Payment:</span> {selectedOrder.paymentMethod}
            </p>

            {/* Order Summary Section */}
            <div className="bg-gray-50 border rounded-md p-4 mb-4">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Summary</h4>
              <div className="flex justify-between text-gray-700 mb-1">
                <span>Subtotal:</span>
                <span>${Number(selectedOrder.subtotal).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-1">
                <span>Discount:</span>
                <span>${Number(selectedOrder.discount).toFixed(2)}</span>
              </div>
              {selectedOrder.coupon && (
                <div className="flex justify-between text-gray-700 mb-1">
                  <span>Coupon:</span>
                  <span>{selectedOrder.coupon}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total:</span>
                <span>${Number(selectedOrder.total).toFixed(2)}</span>
              </div>
            </div>

            {/* Items List */}
            <div className="max-h-60 overflow-y-auto mb-4">
              <h3 className="text-lg font-semibold mb-2">🛒 Items</h3>
              <ul className="space-y-3">
                {selectedOrder.items.map((item, idx) => (
                  <li key={idx} className="border rounded-md p-3 bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-start gap-4">
                      <img
                        src={item.images?.default}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                        <p className="text-sm mt-1">
                          Qty: <strong>{item.quantity}</strong> | Price: <strong>${item.price}</strong>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

       

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
