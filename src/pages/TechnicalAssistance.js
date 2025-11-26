// Updated Technical Assistance Dashboard Component
import React, { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import dashboardImg from "/mnt/data/820f9f98-60a1-4ce9-8ab5-e95495b83158.png";
import TA_2025 from "../data/TA_2025.json";

export default function TechnicalAssistanceDashboard() {
  const [search, setSearch] = useState("");
  const filtered = TA_2025.filter((item) =>
    item.remarks.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      {/* HEADER */}
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button className="px-4 py-2 border rounded-lg">Upgrade to PRO</button>
      </div>

      {/* BREADCRUMBS + SEARCH + ICONS */}
      <div className="w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-4">
        <span className="text-gray-600">Home / <strong>Technical Assistance</strong></span>

        <div className="flex items-center gap-3">
          <div className="flex items-center border px-3 py-2 rounded-lg bg-gray-100">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="p-2 border rounded-lg bg-gray-100"><Bell /></button>
          <button className="p-2 border rounded-lg bg-gray-100"><User /></button>
        </div>
      </div>

      {/* DASHBOARD IMAGE */}
      <div className="w-full bg-white p-4 rounded-xl shadow-sm mb-6">
        <img src={dashboardImg} alt="dashboard preview" className="w-full rounded-lg" />
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold">Bookings</h2>
          <p className="text-2xl font-bold">281</p>
          <span className="text-green-600">+55% than last week</span>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold">Today's Users</h2>
          <p className="text-2xl font-bold">2,300</p>
          <span className="text-green-600">+3% than last month</span>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold">Total Requests</h2>
          <p className="text-2xl font-bold">{TA_2025.length}</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Technical Assistance Records</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Date</th>
              <th className="p-2">Client</th>
              <th className="p-2">Concern</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-2">{row.date}</td>
                <td className="p-2">{row.client}</td>
                <td className="p-2">{row.remarks}</td>
                <td className="p-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}