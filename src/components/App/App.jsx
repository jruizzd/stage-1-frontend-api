import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";

// Temporary placeholders (we’ll replace these with your real components)
function Home() {
  return (
    <div>
      <h2>CT Exam Organizer</h2>
      <p>Upload or input exam data and click Auto Assign.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This app demonstrates how CTL spine exams can be automatically organized
        into Cervical, Thoracic, and Lumbar sections.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Main page */}
        <Route path="/" element={<Home />} />

        {/* Second route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
