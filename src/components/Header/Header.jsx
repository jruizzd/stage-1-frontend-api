import "./Header.css";

export default function Header({ onShowRaw }) {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__title-block">
          <h1 className="header__title">CT Exam Protocol Manager</h1>
          <p className="header__subtitle">OpenFDA Healthcare Data Viewer</p>
        </div>

        <button className="header__btn-raw" onClick={onShowRaw}>
          Raw Data
        </button>
      </div>

      <div className="header__stats">
        <div className="header__stat-card">
          <div className="header__icon header__icon--blue">🧠</div>
          <div className="header__stat-info">
            <span className="header__stat-label">Anatomical Regions</span>
            <span className="header__stat-value">3</span>
          </div>
        </div>

        <div className="header__stat-card">
          <div className="header__icon header__icon--green">📚</div>
          <div className="header__stat-info">
            <span className="header__stat-label">Total Series</span>
            <span className="header__stat-value">18</span>
          </div>
        </div>

        <div className="header__stat-card">
          <div className="header__icon header__icon--purple">🔍</div>
          <div className="header__stat-info">
            <span className="header__stat-label">Scan Protocols</span>
            <span className="header__stat-value">3</span>
          </div>
        </div>
      </div>

      <div className="header__alert">
        <h2 className="header__alert-title">Data Needs Organization</h2>
        <p className="header__alert-text">
          This exam contains protocols from multiple anatomical regions grouped
          incorrectly. Use Auto Assign to reorganize series into their proper
          anatomical regions.
        </p>
      </div>
    </header>
  );
}
