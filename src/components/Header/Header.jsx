import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({
  onShowRaw,
  onOpenRegister,
  onAutoAssign,
  user,
}) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__title-block">
          <h1 className="header__title">Radiology PACS Manager</h1>
          <p className="header__subtitle">OpenFDA Healthcare Data Viewer</p>
        </div>

        <div className="header__actions">
          {/* Buttons only AFTER login */}
          {user && (
            <>
              <button className="header__btn-raw" onClick={onShowRaw}>
                Raw Data
              </button>

              <button className="header__btn-auto" onClick={onAutoAssign}>
                Auto Assign
              </button>
            </>
          )}

          {/* Sign Up only BEFORE login */}
          {!user && (
            <button className="header__btn-register" onClick={onOpenRegister}>
              Sign Up
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
