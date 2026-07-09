export default function Header({ onShowRaw, onOpenRegister }) {
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

          <button className="header__btn-register" onClick={onOpenRegister}>
            Sign Up
          </button>
        </div>
      </div>

      {/* your stats + alert remain unchanged */}
    </header>
  );
}
