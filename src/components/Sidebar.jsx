import { Home, Book, Bot, Bell } from "lucide-react";

const menuItems = [
  { icon: <Home size={20} />, label: "Home", view: "home" },
  { icon: <Book size={20} />, label: "Learning", view: "learning" },
  { icon: <Bot size={20} />, label: "AI", view: "ai" },
  { icon: <Bell size={20} />, label: "Alerts", view: "alerts" },
];

const Sidebar = ({ onSelect }) => {
  return (
    <div className="w-16 bg-[#0f172a] border-r border-white/10 flex flex-col items-center py-4">

      <div className="flex flex-col items-center gap-4 mt-16">

        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelect(item.view)}
            className="flex flex-col items-center w-full group cursor-pointer"
          >

            {/* Icon */}
            <div className="p-2 rounded-lg text-gray-400 group-hover:text-blue-400 group-hover:bg-white/10 transition">
              {item.icon}
            </div>

            {/* Hover Label */}
            <span className="mt-1 text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition">
              {item.label}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Sidebar;