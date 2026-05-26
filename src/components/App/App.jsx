import Header from "../Header/Header";
import ExamProtocols from "../ExamProtocols/ExamProtocols"; // adjust path if needed

export default function App() {
  // Temporary sample data so the component displays something
  const protocols = [
    {
      id: 1,
      title: "C-Spine",
      image: "/images/cspine.png",
      region: "Unassigned",
    },
    {
      id: 2,
      title: "T-Spine",
      image: "/images/tspine.png",
      region: "Unassigned",
    },
    {
      id: 3,
      title: "L-Spine",
      image: "/images/lspine.png",
      region: "Unassigned",
    },
  ];

  return (
    <div className="app">
      <Header />

      {/* Your Exam Protocols Component */}
      <ExamProtocols protocols={protocols} />
    </div>
  );
}
