import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CodingRound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SAFETY
  if (!location.state) {
    return <div className="text-white p-10">No Data Found ❌</div>;
  }

  const { flow, step, config } = location.state;

  const [language, setLanguage] = useState("C");
  const [code, setCode] = useState(`#include <stdio.h>

int main() {
    
    return 0;
}`);

  const problem = {
    title: "Count Elements Greater Than Previous Average",
    description:
      "Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.",
    input: "responseTimes = [100, 200, 150, 300]",
    output: "2",
    explanation: `Day 1: skip  
Day 2: 200 > 100 → count  
Day 3: 150 > avg(100,200)=150 → no  
Day 4: 300 > avg(100,200,150)=150 → count`,
  };

  // 👉 Run Code
  const handleRun = () => {
    alert("Code executed (dummy)");
  };

  // 👉 NEXT FLOW NAVIGATION (SAFE)
  const handleNext = () => {
    const nextStep = step + 1;

    // 🔥 SAFETY (prevent crash)
    if (nextStep >= flow.length) return;

    const nextPage = flow[nextStep];

    navigate(`/mock/${nextPage}`, {
      state: {
        flow,
        step: nextStep,
        config,
      },
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-220px)] bg-[#1c1c1c] text-white p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-3 bg-[#2a2a2a] p-3 rounded-lg">
        
        {/* LEFT TABS */}
        <div className="flex gap-4 text-sm">
          <span className="border-b-2 border-blue-500 pb-1 cursor-pointer">Problem</span>
          <span className="opacity-60 cursor-pointer">Submissions</span>
          <span className="opacity-60 cursor-pointer">Discussions</span>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#1c1c1c] border border-gray-600 px-2 py-1 rounded"
          >
            <option>C</option>
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
          </select>

          <button
            onClick={handleRun}
            className="bg-gray-600 px-4 py-1 rounded"
          >
            Run Code
          </button>

          {/* ✅ SAFE NAVIGATION */}
          <button
            onClick={handleNext}
            className="bg-blue-500 px-4 py-1 rounded"
          >
            Submit Code
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex gap-4 h-[85%]">

        {/* LEFT → PROBLEM */}
        <div className="w-[35%] min-h-[calc(100vh-220px)] bg-[#2a2a2a] p-4 rounded-lg overflow-y-auto">

          <h2 className="text-lg font-semibold mb-3">
            {problem.title}
          </h2>

          <p className="text-sm mb-4 text-gray-300">
            {problem.description}
          </p>

          <div className="mb-3">
            <h4 className="font-semibold mb-1">Input</h4>
            <div className="bg-[#1c1c1c] p-2 rounded text-sm">
              {problem.input}
            </div>
          </div>

          <div className="mb-3">
            <h4 className="font-semibold mb-1">Output</h4>
            <div className="bg-[#1c1c1c] p-2 rounded text-sm">
              {problem.output}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Explanation</h4>
            <div className="bg-[#1c1c1c] p-2 rounded text-sm whitespace-pre-line">
              {problem.explanation}
            </div>
          </div>
        </div>

        {/* RIGHT → EDITOR */}
        <div className="flex-1 bg-[#2a2a2a] rounded-lg flex flex-col">

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-[#0d1117] text-green-400 p-4 font-mono text-sm outline-none rounded-lg"
          />

        </div>
      </div>
    </div>
  );
};

export default CodingRound;