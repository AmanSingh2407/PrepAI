import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const Instructions = ({ config, onBack }) => {
  const [cameraGranted, setCameraGranted] = useState(false);
  const [micGranted, setMicGranted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  if (!config) {
    return (
      <div className="w-full h-[82vh] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  const { role, difficulty, duration, codingTime, mode } = config;

  const handlePermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (stream) {
        setCameraGranted(true);
        setMicGranted(true);
      }
    } catch {
      alert("Permission denied ❌");
    }
  };

  const showAssessment = mode === "Assessment" || mode === "All";
  const showCoding = mode === "Technical Round" || mode === "All";
  const showHR = mode === "Interview" || mode === "All";

  return (
    <div className="w-full h-[82vh] bg-[#0f172a] text-white px-6 py-3 flex flex-col">

      {/* ✅ FIXED HEADER (NO BACKGROUND, CLICKABLE) */}
      <div className="flex items-center mb-2 relative z-50">
        <button
          onClick={onBack}
          className="cursor-pointer z-50 flex items-center justify-center"
          style={{ background: "transparent", border: "none", padding: 0 }}
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="flex-1 text-center text-lg font-semibold -ml-5">
          Instructions
        </h1>
      </div>

      <p className="text-sm text-gray-400 text-center mb-3">
        Please review the instructions carefully before starting your Preparation
      </p>

      {/* SUMMARY */}
      <div className="bg-[#1e293b] border border-white/10 rounded px-4 py-2 text-sm flex flex-wrap gap-6 mb-3">
        <span>💼 Role: {role}</span>
        <span>📊 Difficulty: {difficulty}</span>
        <span>⏱ Duration: {duration} Minutes</span>
        <span>💻 Coding Time: {codingTime} Minutes</span>
        <span>🧪 Preparation: {mode}</span>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-4 gap-3 flex-1 text-sm">

        {/* LEFT PANEL */}
        <div className="bg-[#1e293b] border border-white/10 rounded p-3">
          <h3 className="font-semibold mb-2 text-base">
            Preparation Instructions
          </h3>

          <ul className="space-y-1 text-gray-300">
            <li>• Ensure a stable internet connection</li>
            <li>• Sit in a quiet environment</li>
            <li>• Keep your camera at eye level</li>
            <li>• Do not switch tabs or applications during interview</li>
            <li>• Timer will start automatically once you begin</li>
            <li>• Once started, the interview cannot be paused or reset</li>
          </ul>

          <div className="mt-4">
            <h3 className="font-semibold mb-2 text-base">
              Camera & Microphone Access
            </h3>
            <p className="text-gray-400">
              Camera Status: {cameraGranted ? "Granted" : "Not Granted"}
            </p>
            <p className="text-gray-400">
              Microphone Status: {micGranted ? "Granted" : "Not Granted"}
            </p>
          </div>
        </div>

        {/* ASSESSMENT */}
        {showAssessment && (
          <div className="bg-[#1e293b] border border-white/10 rounded overflow-hidden">
            <div className="bg-blue-500 text-center py-2 text-sm font-semibold">
              ASSESSMENT ROUND
            </div>

            <div className="flex flex-col items-start p-3 text-gray-300">
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                  className="w-12"
                />
              </div>

              <h4 className="text-blue-400 font-semibold mb-1">
                ASSESSMENT ROUND
              </h4>

              <ul className="space-y-1">
                <li>✔ Read each question carefully before answering</li>
                <li>✔ All questions are MCQ based</li>
                <li>✔ Each question carries one marks</li>
                <li>✔ Submit before time ends</li>
                <li>✔ Number of questions in this round is 15</li>
              </ul>
            </div>
          </div>
        )}

        {/* CODING */}
        {showCoding && (
          <div className="bg-[#1e293b] border border-white/10 rounded overflow-hidden">
            <div className="bg-orange-500 text-center py-2 text-sm font-semibold">
              TECHNICAL / CODING ROUND
            </div>

            <div className="flex flex-col items-start p-3 text-gray-300">
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
                  className="w-12"
                />
              </div>

              <h4 className="text-orange-400 font-semibold mb-1">
                TECHNICAL / CODING ROUND
              </h4>

              <ul className="space-y-1">
                <li>✔ Write clean and readable code</li>
                <li>✔ Do not copy from external sources</li>
                <li>✔ Use only provided compiler/tools</li>
                <li>✔ Test your code before submitting</li>
                <li>✔ This round contains 5 questions</li>
              </ul>
            </div>
          </div>
        )}

        {/* HR */}
        {showHR && (
          <div className="bg-[#1e293b] border border-white/10 rounded overflow-hidden">
            <div className="bg-green-500 text-center py-2 text-sm font-semibold">
              HR / INTERVIEW ROUND
            </div>

            <div className="flex flex-col items-start p-3 text-gray-300">
              <div className="w-full flex justify-center mb-5">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  className="w-12"
                />
              </div>

              <h4 className="text-green-400 font-semibold mb-1">
                HR / INTERVIEW ROUND
              </h4>

              <ul className="space-y-1">
                <li>✔ Join the interview 10 minutes early</li>
                <li>✔ Keep camera & microphone ready</li>
                <li>✔ Sit in a quiet, well-lit place</li>
                <li>✔ Answer clearly and confidently</li>
                <li>✔ Do not use mobile or notes unless allowed</li>
                <li>✔ Be respectful and professional</li>
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* BOTTOM */}
      <div className="flex justify-between items-center mt-3">

        <button
          onClick={handlePermissions}
          className="bg-blue-500 px-4 py-2 rounded text-sm"
        >
          Enable Camera & Microphone
        </button>

        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span>I agree to the Terms & Conditions and Privacy Policy</span>
        </div>

        <button
          disabled={!agreed || !cameraGranted}
          className={`px-5 py-2 rounded text-sm ${
            agreed && cameraGranted
              ? "bg-blue-600"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Start Interview →
        </button>

      </div>
    </div>
  );
};

export default Instructions;