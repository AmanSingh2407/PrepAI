import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const AssessmentRound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SAFETY CHECK
  if (!location.state) {
    return <div className="text-white p-10">No Data Found ❌</div>;
  }

  const { flow, step, config } = location.state;

  const totalQuestions = 15;

  const [currentQ, setCurrentQ] = useState(1);
  const [answers, setAnswers] = useState({});

  const question = {
    text: "What is the complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
  };

  // 👉 Select Answer
  const handleSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ]: option,
    }));
  };

  // 👉 NEXT ROUND (SAFE)
  const handleNext = () => {
    const nextStep = step + 1;

    // 🔥 SAFETY (avoid crash)
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

  // 👉 QUESTION NAVIGATION
  const goNext = () => {
    if (currentQ < totalQuestions) {
      setCurrentQ(currentQ + 1);
    } else {
      handleNext(); // move to next round
    }
  };

  const goPrev = () => {
    if (currentQ > 1) {
      setCurrentQ(currentQ - 1);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-220px)] bg-[#1c1c1c] text-white p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4 bg-[#2a2a2a] p-3 rounded-lg">
        <h2 className="text-lg font-semibold">Assessment Round</h2>

        <button
          onClick={handleNext}
          className="bg-blue-500 px-4 py-1 rounded-lg"
        >
          Submit
        </button>
      </div>

      <div className="flex gap-4 h-[85%]">

        {/* LEFT PANEL */}
        <div className="w-[250px] min-h-[calc(100vh-220px)] bg-[#2a2a2a] p-4 rounded-lg">

          <h3 className="mb-3 font-semibold">Question Navigator</h3>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {[...Array(totalQuestions)].map((_, i) => {
              const qNum = i + 1;
              const isAnswered = answers[qNum];

              return (
                <div
                  key={qNum}
                  onClick={() => setCurrentQ(qNum)}
                  className={`text-center py-2 rounded cursor-pointer
                    ${qNum === currentQ ? "bg-blue-500" : ""}
                    ${isAnswered ? "bg-green-500" : "bg-gray-600"}
                  `}
                >
                  {qNum}
                </div>
              );
            })}
          </div>

          {/* STATUS */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Attempted</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <span>Not Attempted</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-[#2a2a2a] p-6 rounded-lg flex flex-col justify-between">

          {/* QUESTION */}
          <div>
            <h3 className="text-lg mb-4">
              Question {currentQ}:
            </h3>

            <p className="mb-6">{question.text}</p>

            {/* OPTIONS */}
            <div className="space-y-3">
              {question.options.map((opt, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`q-${currentQ}`}
                    checked={answers[currentQ] === opt}
                    onChange={() => handleSelect(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* FOOTER BUTTONS */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={goPrev}
              className="bg-gray-600 px-4 py-2 rounded flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Previous
            </button>

            <button
              onClick={goNext}
              className="bg-blue-500 px-4 py-2 rounded flex items-center gap-2"
            >
              Next <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AssessmentRound;