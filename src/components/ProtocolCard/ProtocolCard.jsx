// src/components/ProtocolCard/ProtocolCard.jsx
import React from "react";

const ProtocolCard = ({ title, image, region, regions, onRegionChange }) => {
  return (
    <div className="protocol-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <select
        value={region}
        onChange={(e) => onRegionChange(title, e.target.value)}
      >
        {regions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProtocolCard;
