// src/components/ProtocolCard/ProtocolCard.jsx
import React from "react";
import "./ProtocolCard.css";

export default function ProtocolCard({ data }) {
  return (
    <div className="protocol-card">
      <img src={data.image} alt={data.name} className="protocol-card__image" />

      <div className="protocol-card__info">
        <h4 className="protocol-card__name">{data.name}</h4>
        <p className="protocol-card__type">{data.type}</p>
      </div>
    </div>
  );
}
