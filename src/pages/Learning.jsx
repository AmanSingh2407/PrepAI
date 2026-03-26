import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 60 },
  { day: "Tue", score: 75 },
  { day: "Wed", score: 70 },
  { day: "Thu", score: 80 },
  { day: "Fri", score: 90 },
];

const Learning = () => {
  return (
    <div className="h-screen flex bg-[#0b1220] overflow-hidden">
      
      

      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* MAIN */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* HERO */}
          <Hero />

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT - LEARNING (SCROLLABLE) */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-semibold text-lg">
                  My Learning
                </h2>
                <ChevronRight className="text-gray-400 cursor-pointer" />
              </div>

              <div className="overflow-y-auto max-h-[320px] pr-2">
                <div className="grid md:grid-cols-3 gap-6">

                  {/* Java */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="bg-yellow-100 rounded-lg p-6 flex justify-center mb-4">
                      <span className="text-red-500 font-bold text-2xl">Java</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Java DSA Question
                    </p>
                    <div className="h-2 bg-gray-700 rounded">
                      <div className="w-[60%] h-2 bg-blue-500 rounded"></div>
                    </div>
                  </div>

                  {/* JS */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="bg-yellow-300 rounded-lg p-6 flex justify-center mb-4">
                      <span className="text-black font-bold text-2xl">JS</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Javascript Practice Question
                    </p>
                    <div className="h-2 bg-gray-700 rounded">
                      <div className="w-[40%] h-2 bg-blue-500 rounded"></div>
                    </div>
                  </div>

                  {/* Dart */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="bg-green-200 rounded-lg p-6 flex justify-center mb-4">
                      <span className="text-blue-700 font-bold text-2xl">DART</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Dart Practice Question
                    </p>
                    <div className="h-2 bg-gray-700 rounded">
                      <div className="w-[70%] h-2 bg-blue-500 rounded"></div>
                    </div>
                  </div>

                  {/* Extra cards for scroll */}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="bg-gray-600 rounded-lg p-6 mb-4"></div>
                      <p className="text-sm text-gray-300">Extra Content</p>
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* RIGHT - CALENDAR (SCROLLABLE) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col">

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-sm">
                  February 12, 2026
                </h3>

                <div className="flex gap-2">
                  <ChevronLeft className="text-gray-400 cursor-pointer" />
                  <ChevronRight className="text-gray-400 cursor-pointer" />
                </div>
              </div>

              <div className="overflow-y-auto max-h-[320px] space-y-4 pr-2 text-sm">

                <div className="flex gap-3">
                  <span className="text-gray-400 w-12">13:30</span>
                  <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-xs">
                    Solve Important Question on Java
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-gray-400 w-12">16:45</span>
                  <div className="bg-blue-500/20 text-blue-400 px-3 py-2 rounded-lg text-xs">
                    Practice mock test on Java
                  </div>
                </div>

                {/* Extra events */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-gray-400 w-12">18:{i}0</span>
                    <div className="bg-purple-500/20 text-purple-400 px-3 py-2 rounded-lg text-xs">
                      Extra Event {i + 1}
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* 🔥 PERFORMANCE SECTION (FIGMA STYLE DARK) */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">

            {/* TOP */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center">

              <div>
                <p className="text-green-400 font-medium">
                  ✔ You completed the mock test on Java DSA.
                </p>

                <div className="flex gap-6 text-xs text-gray-400 mt-2">
                  <span>Attempt Date: Today</span>
                  <span>Duration: 19 mins</span>
                </div>

                <div className="flex gap-6 text-sm mt-3 text-gray-300">
                  <span>Overall Score 78</span>
                  <span>🏅 Rank: 4 of 25</span>
                  <span>🎯 Accuracy: 80%</span>
                </div>
              </div>

              <div className="w-20 h-20 rounded-full border-4 border-green-400 flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold">78</span>
                <span className="text-xs text-gray-400">Above Avg</span>
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

              {/* Performance */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white text-sm mb-3">Today's Performance</h3>

                <div className="space-y-2 text-sm text-gray-300">
                  <p>✔ Questions Attempted: 10</p>
                  <p>✔ Questions Correct: 8</p>
                  <p>✔ Avg Time: 1m 54 sec</p>
                </div>

                <button className="mt-4 bg-blue-500 px-3 py-1 rounded text-white text-xs">
                  Practice Again
                </button>
              </div>

              {/* Review */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white text-sm mb-3">Review Report</h3>

                <p className="text-red-400 text-sm">❌ Binary Search</p>
                <p className="text-red-400 text-sm">❌ Permutations</p>
              </div>

              {/* Chart */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white text-sm mb-3">Performance Overview</h3>

               <div className="flex-1">
  <ResponsiveContainer width="100%" height={120}>
    <LineChart data={data}>
      
      <XAxis 
        dataKey="day" 
        stroke="#9ca3af" 
        fontSize={10} 
      />

      <YAxis 
        stroke="#9ca3af" 
        fontSize={10} 
        domain={[0, 100]} 
      />

      <Tooltip 
        contentStyle={{ 
          backgroundColor: "#1e293b", 
          border: "none",
          borderRadius: "8px"
        }} 
      />

      <Line
        type="monotone"
        dataKey="score"
        stroke="#3b82f6"
        strokeWidth={2}
        dot={{ r: 3 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
              </div>

              {/* AI Coach */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white text-sm mb-3">AI Coach</h3>

                <ul className="text-gray-300 text-xs space-y-2">
                  <li>• Improve binary search</li>
                  <li>• Focus recursion</li>
                  <li>• Optimize solutions</li>
                </ul>

                <button className="mt-4 bg-blue-500 px-3 py-1 rounded text-white text-xs">
                  Ask AI
                </button>
              </div>

            </div>

            {/* BOTTOM */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

              {/* Suggestions */}
              <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white text-sm mb-3">
                  💡 Key Improvement Suggestions
                </h3>

                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Review binary search edge cases</li>
                  <li>• Optimize time complexity</li>
                  <li>• Focus on recursion</li>
                </ul>
              </div>

              {/* Weakest Topics */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-white text-sm mb-3">Weakest Topics</h3>

                <div className="space-y-3 text-sm">

                  {[
                    { name: "Dynamic Programming", width: "40%" },
                    { name: "Recursion", width: "75%" },
                    { name: "Graph", width: "60%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-gray-300">{item.name}</p>
                      <div className="h-2 bg-gray-700 rounded">
                        <div
                          className="h-2 bg-green-400 rounded"
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>

          </div>

        </div>

      

      </div>
    </div>
  );
};

export default Learning;