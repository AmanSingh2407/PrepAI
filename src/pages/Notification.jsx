import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const notifications = [
  {
    title: "Mock Test Completed",
    desc: "You scored 78/100 in Java DSA test.",
    time: "2 mins ago",
    type: "success",
  },
  {
    title: "New Interview Available",
    desc: "Try Android Developer mock interview.",
    time: "10 mins ago",
    type: "info",
  },
  {
    title: "Performance Improved",
    desc: "Your accuracy increased by 10%.",
    time: "1 hour ago",
    type: "success",
  },
  {
    title: "Reminder",
    desc: "Complete your pending mock test.",
    time: "3 hours ago",
    type: "warning",
  },
];

const NotificationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-4 flex flex-col">

      {/* 🔙 HEADER */}
      <div className="flex items-center px-4 py-3 border-b border-white/10 relative">

        <button
          onClick={() => navigate(-1)}
          className="absolute -left-4 top-3 cursor-pointer"
          style={{ background: "transparent", border: "none" }}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="flex-1 ">
          <h1 className="text-sm font-semibold">Notifications</h1>
          <p className="text-xs text-gray-400">
            Stay updated with your activity
          </p>
        </div>

      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">

        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-start hover:bg-white/10 transition"
          >

            <div>
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>

              <p className="text-[10px] text-gray-500 mt-2">
                {item.time}
              </p>
            </div>

            {/* STATUS BADGE */}
            <div
              className={`text-[10px] px-2 py-1 rounded-full
              ${
                item.type === "success"
                  ? "bg-green-500/20 text-green-400"
                  : item.type === "warning"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-blue-500/20 text-blue-400"
              }`}
            >
              New
            </div>

          </div>
        ))}

      </div>

      {/* 🔻 FOOTER SPACE (LIKE RESULT PAGE) */}
      <div className="h-10"></div>

    </div>
  );
};

export default NotificationPage;