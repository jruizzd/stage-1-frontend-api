// src/components/ExamProtocols/ExamProtocols.jsx
import React from "react";
import ProtocolCard from "../ProtocolCard/ProtocolCard";
import "./ExamProtocols.css";
import { imageMap } from "../../data/imageMap";

export default function ExamProtocols({ protocols, onAutoAssign }) {
  // ✅ Enrich raw protocols with image paths
  const enrichedProtocols = protocols.map((p) => ({
    ...p,
    image: imageMap[p.id],
  }));

  return (
    <div className="exam-protocols">
      <div className="exam-protocols__header">
        <div className="exam-protocols__title-block">
          <h2 className="exam-protocols__title">Exam Protocols</h2>
          <p className="exam-protocols__subtitle">
            Raw data from openFDA – all series grouped under single region
          </p>
        </div>

        <button
          className="exam-protocols__auto-assign-btn"
          onClick={onAutoAssign}
        >
          Auto Assign
        </button>
      </div>

      <div className="exam-protocols__grid">
        {enrichedProtocols.map((p) => (
          <ProtocolCard key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}
