import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const ManageOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getStatusClass = (status) => {
    switch (status) {
      case "Processing":
        return "text-yellow-500";
      case "Completed":
        return "text-green-500";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axiosSecure.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await axiosSecure.patch(`/orders/status/${orderId}`, {
        status: newStatus,
      });
      if (res.data?.message) {
        Swal.fire("Success", res.data.message, "success");
        fetchOrders();
        setSelectedOrder(null);
      }
    } catch (error) {
      console.error("Status update error:", error);
      Swal.fire("Error", "Failed to update status", "error");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Manage Orders</h2>
      <table className="w-full border-collapse bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="py-3 px-4">Order ID</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Total</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order._id}
              className="border-b hover:bg-gray-50 text-sm text-gray-700"
            >
              <td className="py-2 px-4">#{order._id.slice(-5)}</td>
              <td className="py-2 px-4">{new Date(order.orderDate).toLocaleString()}</td>
              <td className="py-2 px-4">
                <span className={`font-semibold ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td className="py-2 px-4">${order.total.toFixed(2)}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="text-blue-600 hover:underline"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
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

            {/* Status Dropdown */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">Update Status</label>
              <select
                defaultValue={selectedOrder.status}
                onChange={(e) => handleStatusChange(selectedOrder._id, e.target.value)}
                className="border rounded px-3 py-2 w-full bg-gray-50"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
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

export default ManageOrders;
