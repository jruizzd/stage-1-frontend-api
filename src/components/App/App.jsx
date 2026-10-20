import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import ExamView from "../ExamView/ExamView";
import ExamProtocols from "../ExamProtocols/ExamProtocols";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";

import { rawExamData } from "../../data/rawExamData";
import { structuredExamData } from "../../data/structuredExamData";
import { getDrugs } from "../../utils/api";

export default function App() {
  const navigate = useNavigate();

  const [view, setView] = useState("raw");
  const [fdaData, setFdaData] = useState([]);

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [user, setUser] = useState(null);

  // Fetch FDA data
  useEffect(() => {
    getDrugs("openfda.generic_name:ibuprofen")
      .then((data) => {
        console.log("FDA DATA:", data);
        setFdaData(data);
      })
      .catch(console.error);
  }, []);

  // Registration handler
  const handleRegister = (formValues) => {
    setUser(formValues);
    setIsRegisterOpen(false);
    navigate("/");
  };

  // Login handler
  const handleLogin = (formValues) => {
    setUser(formValues);
    setIsLoginOpen(false);
    navigate("/");
  };

  // ⭐ Auto Assign now lives in Header
  const handleAutoAssign = () => {
    setView("structured");
  };

  return (
    <div className="app">
      <Header
        onShowRaw={() => setView("raw")}
        onAutoAssign={handleAutoAssign} // ⭐ moved here
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        user={user}
      />

      <Routes>
        {/* Profile page */}
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              onOpenLogin={() => setIsLoginOpen(true)}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />
          }
        />

        {/* Home page (requires login) */}
        <Route
          path="/"
          element={
            user ? (
              view === "raw" ? (
                <ExamProtocols
                  protocols={rawExamData[0].series} // ⭐ no more onAutoAssign
                />
              ) : (
                <ExamView data={structuredExamData} />
              )
            ) : (
              <Navigate to="/profile" replace />
            )
          }
        />
      </Routes>

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />

      <Footer />
    </div>
  );
}
