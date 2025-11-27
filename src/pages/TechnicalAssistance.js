import React, { useState, useMemo } from "react";
import TA_2025 from "../data/TA_2025.json";
import {
  IconSearch,
  IconChevronLeft,
  IconChevronRight
} from "@tabler/icons-react";

export default function TechnicalAssistanceDashboard() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  // MAPPING FOR BOTH JSON FORMATS
  const mappedData = useMemo(
    () =>
      TA_2025.map((item) => {
        if (item.client) {
          return {
            date: item.month || "",
            client: item.client || "",
            remarks: item.remarks || "",
            status: item.status || "Completed",
          };
        }
        return {
          date: item["Unnamed: 2"] || "",
          client: `${item["Unnamed: 5"] || ""} ${item["Unnamed: 6"] || ""}`.trim(),
          remarks: item["Unnamed: 25"] || "",
          status: "Completed",
        };
      }),
    []
  );

  const filtered = mappedData.filter((row) =>
    (row.remarks || "").toLowerCase().includes(search.toLowerCase())
  );
  const monthOrder = {
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12
};


 const sorted = [...filtered].sort((a, b) => {
  const A = a[sortField] || "";
  const B = b[sortField] || "";

  // SPECIAL SORT FOR MONTHS
  if (sortField === "date") {
    const monthA = monthOrder[A.toUpperCase()] || 0;
    const monthB = monthOrder[B.toUpperCase()] || 0;

    return sortOrder === "asc" ? monthA - monthB : monthB - monthA;
  }

  // NORMAL TEXT SORT
  return sortOrder === "asc"
    ? A.localeCompare(B)
    : B.localeCompare(A);
});


  const start = (page - 1) * rowsPerPage;
  const paginated = sorted.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(sorted.length / rowsPerPage);

  return (
    <div className="container-xl mt-4">

      {/* PAGE TITLE */}
      <div className="page-header d-print-none mb-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <h2 className="page-title text-center">Technical Assistance Records</h2>
          </div>
        </div>
      </div>

      {/* SEARCH + SORT CARD */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="input-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search assistance type..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span className="input-icon-addon">
                  <IconSearch size={18} />
                </span>
              </div>
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="client">Sort by Client</option>
                <option value="remarks">Sort by Assistance Type</option>
              </select>
            </div>

            <div className="col-md-2">
              <select
                className="form-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <div className="col-md-3 text-end">
              <div className="card px-3 py-2 d-inline-block shadow-sm">
                <div className="text-muted small">Total Requests</div>
                <div className="fw-bold fs-4">{mappedData.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-vcenter card-table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Client</th>
                  <th>Assistance Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((row, i) => (
                  <tr key={i}>
                    <td>{row.date}</td>
                    <td>{row.client}</td>
                    <td>{row.remarks}</td>
                    <td>
                      <span className="badge bg-light text-black">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="card-footer d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <IconChevronLeft size={18} /> Prev
          </button>

          <span>Page {page} of {totalPages}</span>

          <button
            className="btn btn-outline-primary"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next <IconChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
