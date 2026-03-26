import { ChevronRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
const data = [
  { day: "Mon", score: 60 },
  { day: "Tue", score: 80 },
  { day: "Wed", score: 75 },
  { day: "Thu", score: 85 },
  { day: "Fri", score: 90 },
];

const Learning = () => {
  return (
    <div className="space-y-5">

      {/* 🔥 TOP CARD */}
      <div className="card-dark px-6 py-6 min-h-[220px] flex flex-col lg:flex-row justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold text-white">
            Welcome Back, Aman!
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Let’s conquer your interview today.
          </p>

          <div className="flex gap-3 mt-5">
            <button className="btn-primary text-sm px-4 py-2">
              Community Hub
            </button>

            <button className="btn-primary text-sm px-4 py-2 opacity-90">
              Start a Mock Test
            </button>
          </div>
        </div>

        <div className="flex gap-10 text-sm text-gray-300 mt-6 lg:mt-0 text-center">
          <div>
            <p className="text-white font-semibold">12</p>
            <p className="text-xs text-gray-400">Total Learning</p>
          </div>
          <div>
            <p className="text-white font-semibold">87%</p>
            <p className="text-xs text-gray-400">Study Time</p>
          </div>
          <div>
            <p className="text-white font-semibold">155h</p>
            <p className="text-xs text-gray-400">Total Study Time</p>
          </div>
          <div>
            <p className="text-white font-semibold">85/100</p>
            <p className="text-xs text-gray-400">Test Score</p>
          </div>
        </div>

      </div>

      {/* 📚 MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* LEFT */}
        <div className="lg:col-span-2 card-dark p-5">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold">My Learning</h2>
            <ChevronRight className="text-gray-400 cursor-pointer" />
          </div>

          <div className="h-[260px] overflow-y-auto pr-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {[
                { name: "Java", desc: "Java DSA Question", color: "bg-yellow-100", text: "text-red-500", progress: "60%" },
                { name: "JS", desc: "Javascript Practice", color: "bg-yellow-300", text: "text-black", progress: "40%" },
                { name: "DART", desc: "Dart Practice", color: "bg-green-200", text: "text-blue-700", progress: "70%" },
                { name: "Python", desc: "Python DSA", color: "bg-purple-200", text: "text-purple-700", progress: "50%" },
                { name: "C++", desc: "STL Practice", color: "bg-blue-200", text: "text-blue-700", progress: "65%" },
                { name: "React", desc: "Frontend Practice", color: "bg-cyan-200", text: "text-cyan-700", progress: "55%" },
                { name: "Node", desc: "Backend Practice", color: "bg-green-300", text: "text-green-900", progress: "45%" },
                { name: "AI", desc: "ML Basics", color: "bg-pink-200", text: "text-pink-700", progress: "35%" },
              ].map((item, index) => (

                <div key={index} className={`rounded-xl p-4 ${item.color}`}>
                  <p className={`font-bold text-lg ${item.text}`}>
                    {item.name}
                  </p>

                  <p className="text-xs mt-2 text-black">
                    {item.desc}
                  </p>

                  <div className="mt-3 h-[2px] bg-gray-300">
                    <div
                      className="h-[2px] bg-blue-500"
                      style={{ width: item.progress }}
                    ></div>
                  </div>
                </div>

              ))}

            </div>
          </div>

        </div>

        {/* RIGHT CALENDAR */}
        <div className="card-dark p-4 min-h-[300px]">

          <h3 className="text-white text-sm mb-4">
            February 12, 2026
          </h3>

          <div className="h-[220px] overflow-y-auto space-y-4 text-xs">

            {[
              ["10:00", "Revise DSA Concepts"],
              ["13:00", "Solve Important Question on Java"],
              ["15:45", "Practice mock test on Java"],
              ["18:00", "Learn System Design Basics"],
              ["20:00", "Review Interview Notes"],
              ["22:00", "Revision Session"],
            ].map(([time, text], i) => (
              <div key={i} className="flex gap-3">
                <span className="text-gray-400 w-12">{time}</span>
                <div className="bg-white/10 px-3 py-2 rounded-lg w-full">
                  {text}
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    {/* 🚀 PERFORMANCE SECTION */}
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
  );
};

export default Learning;