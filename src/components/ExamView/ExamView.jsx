// src/components/ExamView/ExamView.jsx
import React from "react";
import ProtocolCard from "../ProtocolCard/ProtocolCard";

export default function ExamView({ data }) {
  return (
    <div className="exam-container">
      {data.map((region) => (
        <div key={region.id} className="region-block">
          <h2>{region.name}</h2>

          <div className="series-grid">
            {region.series.map((s) => (
              <ProtocolCard key={s.id} data={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
