// src/components/App/App.jsx
import React, { useState } from "react";
import Header from "../Header/Header";
import ExamView from "../ExamView/ExamView";
import ExamProtocols from "../ExamProtocols/ExamProtocols";

import { rawExamData, structuredExamData } from "../../data/examData";

export default function App() {
  const [view, setView] = useState("raw"); // "raw" or "structured"

  const handleAutoAssign = () => {
    setView("structured");
  };

  return (
    <div className="app">
      <Header />

      {view === "raw" && (
        <ExamProtocols
          protocols={rawExamData[0].series}
          onAutoAssign={handleAutoAssign}
        />
      )}

      {view === "structured" && <ExamView data={structuredExamData} />}
    </div>
  );
}
