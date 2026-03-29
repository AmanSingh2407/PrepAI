import { ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [cameraGranted, setCameraGranted] = useState(false);
  const [micGranted, setMicGranted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const videoRef = useRef(null);

  // ✅ GET CONFIG + TYPE + FROM
  const config = location.state?.config;
  const type = location.state?.type; // 🔥 FIXED
  const from = location.state?.from;

  // ❌ SAFETY
  if (!config) {
    return (
      <div className="w-full h-[82vh] flex items-center justify-center text-white">
        No data found ❌
      </div>
    );
  }

  const {
    role,
    fileName,
    difficulty,
    duration,
    codingTime,
    mode,
  } = config;

  // ✅ CAMERA + MIC PERMISSION
  const handlePermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraGranted(true);
      setMicGranted(true);
    } catch (error) {
      console.error(error);
      alert("Permission denied ❌ Please allow camera & microphone");
    }
  };

  // ✅ SHOW ROUNDS
  const showAssessment = mode === "Assessment" || mode === "All";
  const showCoding = mode === "Technical Round" || mode === "All";
  const showHR = mode === "Interview" || mode === "All";

  // ✅ START INTERVIEW
  const handleStart = () => {
    if (!agreed) {
      alert("Please accept Terms & Conditions ❌");
      return;
    }

    if (!cameraGranted) {
      alert("Please enable camera & microphone ❌");
      return;
    }

    const flow = [];

    if (mode === "Assessment") flow.push("assessment");
    else if (mode === "Technical Round") flow.push("coding");
    else if (mode === "Interview") flow.push("interview");
    else if (mode === "All") flow.push("assessment", "coding", "interview");

    if (flow.length === 0) {
      alert("Invalid mode ❌");
      return;
    }

    flow.push("result");

    // 🔥 PASS TYPE FORWARD
    navigate(`/mock/${flow[0]}`, {
      state: {
        flow,
        step: 0,
        config,
        type, // ✅ important fix
      },
    });
  };

  // ✅ BACK BUTTON
  const handleBack = () => {
    if (from) {
      navigate(from, { replace: true });
      return;
    }

    if (type === "role") navigate("/mock/role", { replace: true });
    else if (type === "resume") navigate("/mock/resume", { replace: true });
    else if (type === "report") navigate("/mock/report", { replace: true });
    else navigate("/mock/performance", { replace: true });
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-[#0b1220] text-white px-6 py-4 flex flex-col pb-24">

      {/* 🔙 HEADER */}
      <div className="flex items-center justify-center relative mb-3">
        <button
          onClick={handleBack}
          className="absolute left-0 top-1 z-50 -translate-x-1 cursor-pointer"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-lg font-semibold">Instructions</h1>
      </div>

      <p className="text-center text-gray-400 text-sm mb-4">
        Please review the instructions carefully before starting your Preparation
      </p>

      {/* 🔷 TOP BAR */}
      <div className="bg-[#1e293b] border border-white/10 rounded px-4 py-2 text-sm flex flex-wrap gap-6 mb-4">

        {type === "role" && <span>💼 Role: {role}</span>}
        {type === "resume" && <span>📄 Resume: {fileName}</span>}
        {type === "report" && <span>📊 Report: {fileName}</span>}

        <span>📊 Difficulty: {difficulty}</span>
        <span>⏱ Duration: {duration} Minutes</span>
        <span>💻 Coding Time: {codingTime} Minutes</span>
        <span>🧪 Preparation: {mode}</span>
      </div>

      {/* 🧩 MAIN GRID */}
      <div className="grid grid-cols-4 gap-4 flex-1">

        {/* 📘 LEFT PANEL */}
        <div className="bg-[#1e293b] border border-white/10 rounded p-4 flex flex-col justify-between">

          <div>
            <h3 className="font-semibold text-base mb-3">
              Preparation Instructions
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Ensure a stable internet connection</li>
              <li>• Sit in a quiet environment</li>
              <li>• Keep your camera at eye level</li>
              <li>• Do not switch tabs or applications</li>
              <li>• Timer will start automatically once you begin</li>
              <li>• Once started, the interview cannot be paused</li>
            </ul>

            <div className="mt-5">
              <h3 className="font-semibold mb-2 text-base">
                Camera & Microphone Access
              </h3>

              <p className="text-sm text-gray-400">
                Camera Status: {cameraGranted ? "Granted" : "Not Granted"}
              </p>
              <p className="text-sm text-gray-400">
                Microphone Status: {micGranted ? "Granted" : "Not Granted"}
              </p>
            </div>

            {cameraGranted && (
              <video
                ref={videoRef}
                autoPlay
                muted
                className="mt-3 w-full h-[120px] bg-black rounded"
              />
            )}
          </div>

          <button
            onClick={handlePermissions}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm"
          >
            Enable Camera & Microphone
          </button>
        </div>

        {/* ASSESSMENT */}
        {showAssessment && (
          <div className="bg-[#1e293b] border border-white/10 rounded overflow-hidden">
            <div className="bg-blue-500 text-center py-2 font-semibold text-sm">
              ASSESSMENT ROUND
            </div>
            <div className="p-4 text-sm text-gray-300">
              <div className="flex justify-center mb-3 text-3xl">➕</div>
              <ul className="space-y-2">
                <li>✔ MCQ based questions</li>
                <li>✔ 15 questions</li>
                <li>✔ 1 mark each</li>
              </ul>
            </div>
          </div>
        )}

        {/* CODING */}
        {showCoding && (
          <div className="bg-[#1e293b] border border-white/10 rounded overflow-hidden">
            <div className="bg-orange-500 text-center py-2 font-semibold text-sm">
              TECHNICAL / CODING ROUND
            </div>
            <div className="p-4 text-sm text-gray-300">
              <div className="flex justify-center mb-3 text-3xl">💻</div>
              <ul className="space-y-2">
                <li>✔ Write clean and readable code</li>
                <li>✔ Do not copy from external sources</li>
              </ul>
            </div>
          </div>
        )}

        {/* HR */}
        {showHR && (
          <div className="bg-[#1e293b] border border-white/10 rounded overflow-hidden">
            <div className="bg-green-500 text-center py-2 font-semibold text-sm">
              HR / INTERVIEW ROUND
            </div>
            <div className="p-4 text-sm text-gray-300">
              <div className="flex justify-center mb-3 text-3xl">👤</div>
              <ul className="space-y-2">
                <li>✔ Answer confidently</li>
                <li>✔ Maintain professionalism</li>
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* 🔽 BOTTOM */}
      <div className="flex items-center justify-between mt-6">

        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span>I agree to the Terms & Conditions and Privacy Policy</span>
        </div>

        <button
          onClick={handleStart}
          className={`px-6 py-2 rounded text-sm ${
            agreed && cameraGranted
              ? "bg-gray-300 text-black"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Start Interview →
        </button>
      </div>

    </div>
  );
};

export default Instructions;