// src/components/ExamView/ExamView.jsx
import React from "react";
import ProtocolCard from "../ProtocolCard/ProtocolCard";
import { imageMap } from "../../data/imageMap";

export default function ExamView({ data }) {
  return (
    <div className="exam__container">
      {data.map((region) => (
        <div key={region.id} className="exam__region">
          <h2>{region.name}</h2>

          <div className="exam__series-grid">
            {region.series.map((s) => {
              const enriched = {
                ...s,
                image: imageMap[s.id], // <-- IMPORTANT FIX
              };

              return <ProtocolCard key={s.id} data={enriched} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
