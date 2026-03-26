import { Home, Book, Bot, Bell, User } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", view: "home" },
  { icon: Book, label: "Learning", view: "learning" },
  { icon: Bot, label: "AI", view: "ai" },
  { icon: Bell, label: "Alerts", view: "alerts" },
];

const Sidebar = ({ onSelect, activeView }) => {
  return (
    <div className="w-16 bg-[#0f172a] border-r border-white/10 flex flex-col items-center py-4">

      {/* 🔝 MENU (spacing reduced) */}
      <div className="flex flex-col items-center gap-4 mt-14">
        {/* 👆 gap reduced from 6 → 4 */}

        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeView === item.view;

          return (
            <div
              key={index}
              onClick={() => onSelect(item.view)}
              className="flex flex-col items-center w-full group cursor-pointer relative"
            >

             <div className="relative flex flex-col items-center">

           {/* ACTIVE BAR */}
           {isActive && (
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-8 w-1.5 bg-blue-500 rounded-full"></span>
            )}

            {/* ICON */}
              <div className={`p-2 rounded-lg ${
               isActive ? "bg-blue-500/20 text-white" : "text-gray-400"
               }`}>
              <Icon size={20} />
            </div>

            </div>

              {/* LABEL */}
              <span
                className={`mt-1 text-[10px] transition ${
                  isActive
                    ? "text-blue-400 opacity-100"
                    : "text-gray-400 opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.label}
              </span>

            </div>
          );
        })}

      </div>

      {/* 👤 PROFILE */}
      <div className="mt-auto mb-4">
        <div
          onClick={() => onSelect("profile")}
          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition ${
            activeView === "profile"
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