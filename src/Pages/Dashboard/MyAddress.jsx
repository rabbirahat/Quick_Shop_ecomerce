import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editType, setEditType] = useState(null);
  const [formData, setFormData] = useState({});
  const [userInfo, setUserInfo] = useState({});
    const axiosSecure = useAxiosSecure();

  const { user, loading } = useAuth();

  const fetchUserInfo = async () => {
    try {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/user/${user.email}/`);
        setUserInfo(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  };
  useEffect(() => {


    fetchUserInfo();
  }, [user]);
  const handleEditClick = (type) => {
      setEditType(type);
      setFormData(userInfo?.addresses?.[type] || {});
      setIsModalOpen(true);
    };

  const handleChange = (e) => {
      setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    };
    const handleSave = async () => {
        try {  
            await axiosSecure.put(`/users/user/${user.email}/address`, {
                type: editType,
                updatedAddress: formData,
            });
            
            fetchUserInfo(); 
  
      setIsModalOpen(false);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="md:flex gap-64">
      {/* Billing Address */}
      <div>
        <h1 className="text-4xl font-bold text-[#253D4E]">Billing Address</h1>
        <div className="font-medium mt-6 text-gray-800">
          <p>{userInfo?.addresses?.billing?.line1}</p>
          <p>{userInfo?.addresses?.billing?.line2}</p>
          <p>
            {userInfo?.addresses?.billing?.city},{" "}
            {userInfo?.addresses?.billing?.state}
          </p>
          <p>{userInfo?.addresses?.billing?.zip}</p>
          <p>Phone: {userInfo?.addresses?.billing?.phone}</p>
          <button
            onClick={() => handleEditClick("billing")}
            className="text-[#3BB77E] mt-2 hover:text-yellow-600"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Shipping Address */}
      <div>
        <h1 className="text-2xl font-medium text-[#253D4E]">
          Shipping Address
        </h1>
        <div className="font-medium mt-6 text-gray-800">
          <p>{userInfo?.addresses?.shipping?.line1}</p>
          <p>{userInfo?.addresses?.shipping?.line2}</p>
          <p>
            {userInfo?.addresses?.shipping?.city},{" "}
            {userInfo?.addresses?.shipping?.state}
          </p>
          <p>{userInfo?.addresses?.shipping?.zip}</p>
          <p>Phone: {userInfo?.addresses?.shipping?.phone}</p>
          <button
            onClick={() => handleEditClick("shipping")}
            className="text-[#3BB77E] mt-2 hover:text-yellow-600"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-[#253D4E] mb-4 capitalize">
              Edit {editType} address
            </h2>
            <form className="space-y-4">
              {["line1", "line2", "city", "state", "zip", "phone"].map(
                (field) => (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full border border-gray-300 p-2 rounded-md"
                  />
                )
              )}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:text-red-500"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#3BB77E] text-white rounded hover:bg-[#329e6d]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddress;
