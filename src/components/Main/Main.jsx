import React from "react";
import "./Main.css";

function Main({ onLoginClick, onRegisterClick }) {
  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">OpenFDA CT Exam Analyzer</h1>
        <p className="main__subtitle">
          Transform healthcare data into organized CT exam structures
        </p>
        <div className="main__buttons">
          <button className="main__button" onClick={onLoginClick}>
            Sign In
          </button>
          <button
            className="main__button main__button_type_register"
            onClick={onRegisterClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
