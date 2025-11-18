import React, { useState, useEffect } from "react";
import TA_2025 from "../data/TA_2025.json";
import { Search } from "lucide-react";

function TechnicalAssistanceTable() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(0); // Current page index
  const pageSize = 20; // Rows per page

  useEffect(() => {
    // Clean and prepare data
    const cleaned = TA_2025.filter(
      (row) => row["Unnamed: 5"] && row["Unnamed: 6"]
    );
    setFiltered(cleaned);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const results = TA_2025.filter(
      (row) =>
        (row["Unnamed: 5"] && row["Unnamed: 5"].toLowerCase().includes(query)) ||
        (row["Unnamed: 6"] && row["Unnamed: 6"].toLowerCase().includes(query)) ||
        (row["Unnamed: 20"] && row["Unnamed: 20"].toLowerCase().includes(query)) ||
        (row["Unnamed: 25"] && row["Unnamed: 25"].toLowerCase().includes(query))
    );
    setFiltered(results);
    setPage(0); // Reset to first page after search
  };

  const totalPages = Math.ceil(filtered.length / pageSize);
  const currentPageData = filtered.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center mb-6">
            Technical Assistance Beneficiaries (2025)
          </h2>

          {/* Search */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 border rounded-xl px-3 py-1 bg-gray-50 shadow-sm">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search name, municipality, or type..."
                value={search}
                onChange={handleSearch}
                className="outline-none text-sm w-64 bg-gray-50"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full border-collapse text-center">
              <thead className="bg-blue-600 text-white text-sm uppercase">
                <tr>
                  <th className="p-3">Last Name</th>
                  <th className="p-3">First Name</th>
                  <th className="p-3">Barangay</th>
                  <th className="p-3">Municipality</th>
                  <th className="p-3">Province</th>
                  <th className="p-3">Type of Assistance</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Satisfaction</th>
                </tr>
              </thead>
              <tbody>
                {currentPageData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-blue-50" : "bg-white"} hover:bg-blue-100`}
                  >
                    <td className="p-3 border-b">{row["Unnamed: 5"]}</td>
                    <td className="p-3 border-b">{row["Unnamed: 6"]}</td>
                    <td className="p-3 border-b">{row["Unnamed: 19"]}</td>
                    <td className="p-3 border-b">{row["Unnamed: 20"]}</td>
                    <td className="p-3 border-b">{row["Unnamed: 22"]}</td>
                    <td className="p-3 border-b">{row["Unnamed: 25"]}</td>
                    <td className="p-3 border-b">{row["Unnamed: 27"]}</td>
                    <td className="p-3 border-b">{`${row["Unnamed: 29"] || 0}★`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>
              Showing {page * pageSize + 1}–
              {Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length} beneficiaries
            </p>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className={`px-4 py-2 rounded-lg border ${
                  page === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-blue-600 border-blue-400 hover:bg-blue-50"
                }`}
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={page >= totalPages - 1}
                className={`px-4 py-2 rounded-lg border ${
                  page >= totalPages - 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        </div>

  );
}

export default TechnicalAssistanceTable;
