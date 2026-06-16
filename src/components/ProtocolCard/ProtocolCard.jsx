// src/components/ProtocolCard/ProtocolCard.jsx
import React from "react";
import "./ProtocolCard.css";

export default function ProtocolCard({ data }) {
  // if (!data) return null; // safety check

  return (
    <div className="protocol__card">
      <img
        src={
          data.image ??
          "https://mrimaster.com/wp-content/uploads/2024/05/MRI-cervical-spine-sagittal-T2-SPACE-3D-image-1.jpg"
        }
        alt={data.name}
        className="protocol__image"
      />

      <div className="protocol__info">
        <h4>{data.name}</h4>
        <p className="region-label">{data.type}</p>
      </div>
    </div>
  );
}
