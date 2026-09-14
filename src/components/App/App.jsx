import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import ExamView from "../ExamView/ExamView";
import ExamProtocols from "../ExamProtocols/ExamProtocols";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";

import { rawExamData } from "../../data/rawExamData";
import { structuredExamData } from "../../data/structuredExamData";
import { getDrugs } from "../../utils/api";

export default function App() {
  const [view, setView] = useState("raw");
  const [fdaData, setFdaData] = useState([]);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  const handleLogin = (formValues) => {
    setUser(formValues);
    setIsLoginOpen(false);
  };

  return (
    <div className="app">
      <Header
        onShowRaw={() => setView("raw")}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        user={user}
      />

      <Routes>
        <Route
          path="/"
          element={
            view === "raw" ? (
              <ExamProtocols
                protocols={rawExamData[0].series}
                onAutoAssign={() => setView("structured")}
              />
            ) : (
              <ExamView data={structuredExamData} />
            )
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={!!user}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
