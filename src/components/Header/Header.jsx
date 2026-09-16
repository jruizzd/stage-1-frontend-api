import { useNavigate } from "react-router-dom";

export default function Header({ onShowRaw, onOpenRegister, user }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__title-block">
          <h1 className="header__title">CT Exam Protocol Manager</h1>
          <p className="header__subtitle">OpenFDA Healthcare Data Viewer</p>
        </div>

        <div className="header__actions">
          <button className="header__btn-raw" onClick={onShowRaw}>
            Raw Data
          </button>

          {!user && (
            <button className="header__btn-register" onClick={onOpenRegister}>
              Sign Up
            </button>
          )}

          {user && (
            <button
              className="header__btn-profile"
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
