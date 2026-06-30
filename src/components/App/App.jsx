// src/components/App/App.jsx
import React, { useState } from "react";
import Header from "../Header/Header";
import ExamView from "../ExamView/ExamView";
import ExamProtocols from "../ExamProtocols/ExamProtocols";

import { rawExamData } from "../../data/rawExamData";
import { structuredExamData } from "../../data/structuredExamData";

export default function App() {
  const [view, setView] = useState("raw"); // "raw" or "structured"

  const handleAutoAssign = () => {
    setView("structured");
  };

  const handleShowRaw = () => {
    setView("raw");
  };

  return (
    <div className="app">
      <Header onShowRaw={handleShowRaw} />

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
