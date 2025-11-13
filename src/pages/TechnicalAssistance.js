import React, { useState } from "react";
import TA_2025 from "../data/2025/TA_2025.json";

function TechnicalAssistance() {
  const [data] = useState(TA_2025);

  console.log("TA_2025 data:", data);

  return (
    <div>
      <h2>Technical Assistance Data (2025)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default TechnicalAssistance;
