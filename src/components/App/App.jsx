import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ExamView from "../ExamView/ExamView";
import ExamProtocols from "../ExamProtocols/ExamProtocols";
import RegisterModal from "../RegisterModal/RegisterModal";
import { rawExamData } from "../../data/rawExamData";
import { structuredExamData } from "../../data/structuredExamData";
import { getDrugs } from "../../utils/api";

export default function App() {
  const [view, setView] = useState("raw");
  const [fdaData, setFdaData] = useState([]);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getDrugs("openfda.generic_name:ibuprofen")
      .then((data) => {
        console.log("FDA DATA:", data);
        setFdaData(data);
      })
      .catch(console.error);
  }, []);

  const handleRegister = (formValues) => {
    setUser(formValues);
    setIsRegisterOpen(false);
  };

  return (
    <div className="app">
      <Header
        onShowRaw={() => setView("raw")}
        onOpenRegister={() => setIsRegisterOpen(true)}
        user={user}
      />

      {view === "raw" && (
        <ExamProtocols
          protocols={rawExamData[0].series}
          onAutoAssign={() => setView("structured")}
        />
      )}

      {view === "structured" && <ExamView data={structuredExamData} />}

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
      />
    </div>
  );
}
