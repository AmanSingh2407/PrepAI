import { Home, Book, Bot, Bell, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: Home, path: "/" },
    { icon: Book, path: "/learning" },
    { icon: Bot, path: "/ai" },
    { icon: Bell, path: "/notifications" },
  ];

  // ✅ Active route check (handles nested routes)
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // ✅ Prevent unnecessary navigation
  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className="w-16 h-screen bg-[#0f172a] border-r border-white/10 flex flex-col items-center py-6">

      {/* LOGO */}
      <div className="mb-10">
        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold text-white">
          AI
        </div>
      </div>

      {/* TOP MENU */}
      <div className="flex flex-col items-center gap-10">

        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => handleNavigate(item.path)}
              className="relative cursor-pointer group"
            >
              {/* Active Indicator */}
              {isActive(item.path) && (
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-500 rounded-full"></span>
              )}

              <Icon
                size={20}
                className={`transition ${
                  isActive(item.path)
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                }`}
              />
            </div>
          );
        })}

      </div>

      {/* 🔥 PROFILE ICON */}
      <div className="mt-auto mb-4">
        <div
          onClick={() =>
            location.pathname.startsWith("/profile")
              ? navigate("/")        // go back
              : navigate("/profile") // open profile
          }
          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition ${
            location.pathname.startsWith("/profile")
              ? "bg-blue-500 text-white"
              : "bg-gray-600 text-white hover:bg-gray-500"
          }`}
        >
          <User size={18} />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;