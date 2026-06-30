// src/components/ExamView/ExamView.jsx
import React from "react";
import ProtocolCard from "../ProtocolCard/ProtocolCard";

export default function ExamView({ data }) {
  return (
    <div className="exam__container">
      {data.map((region) => (
        <div key={region.id} className="exam__region">
          <h2>{region.name}</h2>

          <div className="exam__series-grid">
            {region.series.map((s) => (
              <ProtocolCard key={s.id} data={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
