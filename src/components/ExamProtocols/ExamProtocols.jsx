// src/components/ExamProtocols/ExamProtocols.jsx
import React from "react";
import ProtocolCard from "../ProtocolCard/ProtocolCard";
import "./ExamProtocols.css";

export default function ExamProtocols({ protocols, onAutoAssign }) {
  return (
    <div className="exam">
      <div className="exam__header">
        <div>
          <h2 className="exam__title">Exam Protocols</h2>
          <p className="exam__subtitle">
            Raw data from openFDA – all series grouped under single region
          </p>
        </div>

        <button className="auto-assign-btn" onClick={onAutoAssign}>
          Auto Assign
        </button>
      </div>

      <div className="exam__grid">
        {protocols.map((p) => (
          <ProtocolCard key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}
