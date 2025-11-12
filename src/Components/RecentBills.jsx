import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/recentBills.json")
      .then((res) => {
        setBills(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bills:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">Loading recent bills...</div>
    );
  }

  const data = bills.splice(6,6)

  return (
    <section className="py-16 bg-gray-50 dark:bg-secondary w-[90vw] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Bills</h2>

        {bills.length === 0 ? (
          <p className="text-center text-gray-500">No bills found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((bill) => (
              <div
                key={bill._id}
                className="bg-white  shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 flex h-[220px] p-4"
              >
                <img
                  src={bill.image}
                  alt={bill.title}
                  className="h-42 w-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[16px] font-semibold mb-1">{bill.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    <strong>Category:</strong> {bill.category}
                  </p>
                  {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Location:</strong> {bill.location}
                  </p> */}
                  <p className="text-sm text-gray-600 dark:text-gray-500">
                    <strong>Date:</strong> {bill.date}
                  </p>
                  <p className="text-sm font-semibold mt-2 text-blue-600">
                    ৳ {bill.amount}
                  </p>
                  <button className="mt-3 w-full bg-primary text-white py-1 rounded hover:bg-blue-700 transition">
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentBills;
