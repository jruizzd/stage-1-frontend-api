import "./Header.css";

export default function Header() {
  return (
    <header className="ct-header">
      <div className="ct-header-top">
        <div className="ct-title-block">
          <h1 className="ct-title">CT Exam Protocol Manager</h1>
          <p className="ct-subtitle">OpenFDA Healthcare Data Viewer</p>
        </div>

        <button className="ct-btn-raw">Raw Data</button>
      </div>

      <div className="ct-header-stats">
        <div className="ct-stat-card">
          <div className="ct-icon ct-icon-blue">🧠</div>
          <div className="ct-stat-info">
            <span className="ct-stat-label">Anatomical Regions</span>
            <span className="ct-stat-value">3</span>
          </div>
        </div>

        <div className="ct-stat-card">
          <div className="ct-icon ct-icon-green">📚</div>
          <div className="ct-stat-info">
            <span className="ct-stat-label">Total Series</span>
            <span className="ct-stat-value">18</span>
          </div>
        </div>

        <div className="ct-stat-card">
          <div className="ct-icon ct-icon-purple">🔍</div>
          <div className="ct-stat-info">
            <span className="ct-stat-label">Scan Protocols</span>
            <span className="ct-stat-value">3</span>
          </div>
        </div>
      </div>

      <div className="ct-alert">
        <h2 className="ct-alert-title">Data Needs Organization</h2>
        <p className="ct-alert-text">
          This exam contains protocols from multiple anatomical regions grouped
          incorrectly. Use Auto Assign to reorganize series into their proper
          anatomical regions.
        </p>
      </div>
    </header>
  );
}
