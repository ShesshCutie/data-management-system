import React, { useEffect, useState } from "react";
import beneficiaries2025 from "../data/beneficiaries_2025.json";

function Beneficiaries() {
  const [year, setYear] = useState("2025");
  const [data, setData] = useState(beneficiaries2025);
  const [search, setSearch] = useState("");

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);

    // In future: load other year data dynamically
    if (selectedYear === "2025") {
      setData(beneficiaries2025);
    }
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Beneficiaries Data ({year})</h2>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <select
          className="form-select w-auto"
          value={year}
          onChange={handleYearChange}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <input
          type="text"
          className="form-control w-50"
          placeholder="Search beneficiaries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              {Object.keys(data[0] || {}).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Beneficiaries;
