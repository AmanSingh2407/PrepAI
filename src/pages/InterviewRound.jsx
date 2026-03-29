import { useState, useEffect } from "react";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const InterviewRound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ SAFETY
  if (!location.state) {
    return <div className="text-white p-10">No Data Found ❌</div>;
  }

  const { flow, step, config } = location.state;

  const totalQuestions = 15;

  const [currentQ, setCurrentQ] = useState(1);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);

  const question = "Tell me about yourself.";

  // 👉 SAFE NEXT FLOW
  const handleNext = () => {
    const nextStep = step + 1;

    // 🔥 prevent crash
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

  // ⏱ TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNext(); // move to next safely
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ⏱ Format Time
  const formatTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // 👉 Next Question
  const handleNextQ = () => {
    if (currentQ < totalQuestions) {
      setCurrentQ((prev) => prev + 1);
    } else {
      handleNext();
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-220px)] bg-[#1c1c1c] text-white p-4">

      {/* HEADER */}
      <div className="flex justify-between items-center bg-[#2a2a2a] p-3 rounded-lg mb-3">
        <h2 className="text-lg font-semibold">Interview Round</h2>

        <div className="flex items-center gap-4">
          <span className="bg-black px-3 py-1 rounded">
            ⏱ {formatTime()}
          </span>

          <span className="bg-black px-3 py-1 rounded">
            Q {currentQ}/{totalQuestions}
          </span>

          {/* ✅ SAFE BUTTON */}
          <button
            onClick={handleNext}
            className="bg-red-500 px-4 py-1 rounded"
          >
            End Interview
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex gap-4 h-[85%]">

        {/* LEFT → QUESTION */}
        <div className="w-[40%] min-h-[calc(100vh-220px)] bg-[#2a2a2a] p-6 rounded-lg flex flex-col justify-between">

          <div>
            <h3 className="text-lg mb-4">
              Question {currentQ}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {question}
            </p>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-between items-center mt-6">

            <div className="flex gap-3">
              <button
                onClick={() => setMicOn((prev) => !prev)}
                className={`p-3 rounded-full ${
                  micOn ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {micOn ? <Mic size={18} /> : <MicOff size={18} />}
              </button>

              <button
                onClick={() => setCamOn((prev) => !prev)}
                className={`p-3 rounded-full ${
                  camOn ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {camOn ? <Video size={18} /> : <VideoOff size={18} />}
              </button>
            </div>

            <button
              onClick={handleNextQ}
              className="bg-blue-500 px-5 py-2 rounded-lg"
            >
              Next Question
            </button>
          </div>
        </div>

        {/* RIGHT → VIDEO AREA */}
        <div className="flex-1 bg-[#2a2a2a] rounded-lg flex flex-col items-center justify-center gap-4">

          <div className="w-[250px] h-[150px] bg-black rounded-lg flex items-center justify-center">
            <span className="text-gray-400">AI Interviewer</span>
          </div>

          <div className="w-[250px] h-[150px] bg-black rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Your Camera</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewRound;