import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";



const Analytics = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleMouseMove = (e) => {
    if (window.innerHeight - e.clientY < 80) setShowFooter(true);
    else setShowFooter(false);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowFooter(true);
    }
  };

  return (
    <div
      className="h-screen flex bg-[#0b1220] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* MAIN */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6"
          onScroll={handleScroll}
        >

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

      <div className="sticky top-0 self-start h-[calc(100vh-112px)] overflow-hidden">
  <ProfileSidebar />
</div>


            {/* RIGHT PANEL */}
            <div className="lg:col-span-3 space-y-6">

              <h2 className="text-white text-xl font-semibold">
                Analytics
              </h2>

              {/* TOP CARDS */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-md">
                  <p className="text-gray-400 text-sm">Total Interviews Taken</p>
                  <h3 className="text-white text-3xl font-bold mt-2">20</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Last interview 12 Feb 2026
                  </p>
                </div>

                <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-md">
                  <p className="text-gray-400 text-sm">Average Interview Score</p>
                  <h3 className="text-white text-3xl font-bold mt-2">20 / 100</h3>
                  <p className="text-green-400 text-sm mt-1">
                    ↑ 6% Improvement from last month
                  </p>
                </div>

                <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-md">
                  <p className="text-gray-400 text-sm">Strongest Skill Area</p>
                  <h3 className="text-white text-lg font-semibold mt-2">
                    Technical Knowledge - 85%
                  </h3>
                </div>
              </div>

              {/* SOFT SKILLS */}
              <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 shadow-md">
                <h3 className="text-white font-semibold mb-6">
                  Soft Skill Analytics
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Communication Skills",
                      value: 20,
                      details: ["Clarity", "Confidence", "Fluency", "Vocabulary"],
                      suggestion: "Improve structured answers using STAR method"
                    },
                    {
                      title: "Body Language & Confidence",
                      value: 80,
                      details: ["Eye Contact", "Posture", "Facial Expression"],
                      suggestion: "Practice mock interview with camera on"
                    },
                    {
                      title: "Problem-Solving Approach",
                      value: 50,
                      details: ["Logical Thinking", "Code Explanation", "Edge Case Handling"],
                      suggestion: "Structure thinking process"
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-[#0b1220] border border-gray-700 rounded-xl p-5">
                      <p className="text-gray-300 text-sm mb-2">{item.title}</p>
                      <h3 className="text-white text-2xl font-bold mb-3">
                        {item.value}%
                      </h3>

                      <div className="h-2 bg-gray-700 rounded mb-4">
                        <div
                          className="h-2 bg-green-400 rounded"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>

                      <div className="space-y-2 text-xs text-gray-400">
                        {item.details.map((d, idx) => (
                          <div key={idx} className="flex justify-between">
                            <span>{d}</span>
                            <span>80%</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 text-xs text-green-400">
                        ✔ {item.suggestion}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MIDDLE GRID */}
              <div className="grid lg:grid-cols-2 gap-6">

                {/* TECHNICAL */}
                <div className="card-dark p-6 border border-gray-700 rounded-xl">
                  <h3 className="text-white mb-4">Technical Skills Performance</h3>
                  {["Java", "DSA", "OOPS", "SQL", "Web Dev"].map((s, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{s}</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded">
                        <div className="h-2 bg-green-400 w-[80%] rounded" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* DOMAIN */}
                <div className="card-dark p-6 border border-gray-700 rounded-xl">
                  <h3 className="text-white mb-4">Domain-Based Performance</h3>
                  {["Frontend", "Backend", "Android", "AI/ML", "Full Stack"].map((s, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>{s}</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded">
                        <div className="h-2 bg-green-400 w-[80%] rounded" />
                      </div>
                    </div>
                  ))}
                </div>

            {/* HISTORY */}
<div className="card-dark p-6 border border-gray-700 rounded-xl flex flex-col justify-between h-full">
  <h3 className="text-white mb-4 flex items-center gap-2">
  📄 Interview History
</h3>

<div className="text-sm text-gray-300">
  {/* Header */}
  <div className="grid grid-cols-5 border-b border-gray-700 pb-2 mb-2 text-gray-400">
    <span>Date</span>
    <span>Role</span>
    <span>Score</span>
    <span>Level</span>
    <span>Feedback</span>
  </div>

  {/* Rows */}
  {[
    { score: 90, level: "Intermediate" },
    { score: 80, level: "Beginner" },
    { score: 56, level: "Advance" },
  ].map((item, i) => (
    <div
      key={i}
      className="grid grid-cols-5 items-center py-2 border-b border-gray-800 last:border-none"
    >
      <span>24 Feb 2026</span>
      <span>Java Developer</span>
      <span>{item.score}</span>
      <span>{item.level}</span>
      <span className="text-green-400 text-lg">✔</span>
    </div>
  ))}
</div>
</div>



              

  {/* 🔥 FULL WIDTH GRAPH */}
  <div className="lg:col-span-3">
    <div className="bg-[#111827] border border-gray-700 rounded-xl p-6">
      <h3 className="text-white mb-4">Monthly Score Trend</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={[
              { month: "Jan", score: 60 },
              { month: "Feb", score: 75 },
              { month: "Mar", score: 85 },
              { month: "Apr", score: 95 },
              { month: "May", score: 100 },
            ]}
          >
            <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />

            <Tooltip
              contentStyle={{ backgroundColor: "#111827", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#4ade80"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>

  {/* 🔥 BOTTOM LEFT (BARS) */}
 <div className="lg:col-span-2 bg-[#111827] border border-gray-700 rounded-xl p-6 h-60 overflow-y-auto">

  {[
    { month: "Jan", score: 60 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 82 },
    { month: "Apr", score: 88 },
    { month: "May", score: 92 },
    { month: "Jun", score: 78 },
    { month: "Jul", score: 85 },
    { month: "Aug", score: 90 },
  ].map((item, i) => (
    <div key={i} className="mb-3">
      <div className="flex justify-between text-sm text-gray-300">
        <span>{item.month}</span>
        <span>{item.score}%</span>
      </div>

      <div className="h-2 bg-gray-700 rounded">
        <div
          className="h-2 bg-green-400 rounded"
          style={{ width: `${item.score}%` }}
        />
      </div>
    </div>
  ))}

</div>

  {/* 🔥 BOTTOM RIGHT (AI CARDS) */}
  <div className="space-y-2">

    <div className="bg-[#111827] border border-gray-300 rounded-xl p-5 flex justify-between items-center">

  {/* LEFT */}
  <div>
    <h3 className="text-gray-400 font-semibold mb-2 border-b pb-1">
      Your AI Readiness
    </h3>

    <p className="text-gray-400 text-sm mb-3 max-w-xs">
      Track your progress with real-time confidence score and performance tracking
    </p>

    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
      View Detailed Report
    </button>
  </div>

  {/* RIGHT IMAGE */}
  <img
    src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
    alt="AI"
    className="w-24 h-24 object-contain"
  />
</div>

    <div className="bg-[#111827] border border-gray-700 rounded-xl p-6">
      <h3 className="text-white mb-2">AI Feedback</h3>
      <p className="text-gray-400 text-sm">
        You are improving consistently. Keep going 🚀
      </p>
    </div>

  </div>

</div>

            </div>
          </div>

        </div>

        {/* FOOTER */}
        {showFooter && (
          <div className="fixed bottom-0 left-16 right-0 z-40">
            <Footer />
          </div>
        )}

      </div>
    </div>
  );
};

export default Analytics;