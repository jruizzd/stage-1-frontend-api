// src/components/ExamProtocols.jsx
import React, { useState } from "react";
import ProtocolCard from "../ProtocolCard/ProtocolCard";

function autoAssignLogic(protocol) {
  const name = protocol.title.toLowerCase();

  if (
    name.includes("cervical") ||
    name.includes("c-spine") ||
    name.includes("c spine") ||
    /c[1-7]/.test(name)
  )
    return "Cervical";

  if (
    name.includes("thoracic") ||
    name.includes("t-spine") ||
    name.includes("t spine") ||
    /t(1[0-2]|[1-9])/.test(name)
  )
    return "Thoracic";

  if (
    name.includes("lumbar") ||
    name.includes("l-spine") ||
    name.includes("l spine") ||
    /l[1-5]/.test(name)
  )
    return "Lumbar";

  return "Unassigned";
}

const regions = ["Cervical", "Thoracic", "Lumbar", "Unassigned"];

const ExamProtocols = ({ protocols }) => {
  const [assignedProtocols, setAssignedProtocols] = useState(protocols);

  const handleAutoAssign = () => {
    const updated = assignedProtocols.map((p) => ({
      ...p,
      region: autoAssignLogic(p),
    }));
    setAssignedProtocols(updated);
  };

  const handleRegionChange = (title, region) => {
    setAssignedProtocols((prev) =>
      prev.map((p) => (p.title === title ? { ...p, region } : p)),
    );
  };

  return (
    <div>
      <button onClick={handleAutoAssign}>Auto Assign</button>

      <div className="protocol-grid">
        {assignedProtocols.map((p) => (
          <ProtocolCard
            key={p.id}
            title={p.title}
            image={p.image}
            region={p.region}
            regions={regions}
            onRegionChange={handleRegionChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ExamProtocols;
