import { useNavigate, useLocation } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SAFETY
  if (!location.state) {
    return <div className="text-white p-10">No Data Found ❌</div>;
  }

  const { config, type } = location.state;

  // 👉 DOWNLOAD (dummy)
  const handleDownload = () => {
    alert("Report Downloaded (dummy)");
  };

  // 🔥 RETAKE LOGIC (UPDATED WITH STATE PASSING)
  const handleRetake = () => {
    if (type === "role") {
      navigate("/mock/role-based", {
        state: { type: "role" }, // ✅ important
      });
    } else if (type === "resume") {
      navigate("/mock/resume-based", {
        state: { type: "resume" },
      });
    } else if (type === "report") {
      navigate("/mock/report-based", {
        state: { type: "report" },
      });
    } else if (type === "company") {
      navigate("/mock/company-specific", {
        state: { type: "company" },
      });
    } else {
      navigate("/mock");
    }
  };

  // 🔥 Dynamic Button Text
  const getLabel = () => {
    if (type === "role") return "Retake Role-Based Interview";
    if (type === "resume") return "Retake Resume-Based Interview";
    if (type === "report") return "Retake Report-Based Interview";
    if (type === "company") return "Retake Company Mock";
    return "Retake Interview";
  };

  return (
    <div className="w-full min-h-screen bg-[#0b1220] flex flex-col p-4 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-[#1e293b] border border-white/10 rounded px-4 py-2 shadow-sm mb-5">
        <h2 className="font-semibold">Result</h2>

        <button
          onClick={handleDownload}
          className="bg-blue-500 px-4 py-1 rounded shadow hover:bg-blue-600 transition"
        >
          Download
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="bg-[#1f2a3a] rounded-xl min-h-[calc(100vh-260px)] flex items-center justify-center">

        {/* AI BOT IMAGE */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="AI Bot"
          className="w-[220px] opacity-80"
        />

      </div>

      {/* 🔥 RETAKE BUTTON (BOTTOM RIGHT) */}
      <div className="flex justify-end mt-6 pb-2 pr-2">
        <button
          onClick={handleRetake}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          {getLabel()}
        </button>
      </div>

    </div>
  );
};

export default ResultPage;