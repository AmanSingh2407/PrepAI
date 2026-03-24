import { Home, Book, Bot, Bell, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ❌ Removed Profile from top
  const menu = [
    { icon: Home, path: "/" },
    { icon: Book, path: "/learning" },
    { icon: Bot, path: "/ai" },
    { icon: Bell, path: "/notifications" },
  ];

  return (
    <div className="w-16 bg-[#0f172a] border-r border-white/10 flex flex-col items-center py-6">

      {/* LOGO */}
      <div className="mb-10">
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold">
          AI
        </div>
      </div>

      {/* TOP ICONS */}
      <div className="flex flex-col items-center gap-10">

        {menu.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="relative cursor-pointer group"
            >
              {/* Active Indicator */}
              {isActive && (
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-500 rounded-full"></span>
              )}

              <Icon
                size={20}
                className={`transition ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }`}
              />
            </div>
          );
        })}

      </div>

      {/* 🔥 BOTTOM PROFILE (NOW CLICKABLE) */}
      <div className="mt-auto mb-4">
        <div
          onClick={() => navigate("/profile")}
          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition
            ${
              location.pathname === "/profile"
                ? "bg-blue-500 text-white"
                : "bg-gray-600 text-white hover:bg-gray-500"
            }
          `}
        >
          <User size={18} />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;