import { Home, Book, Bot, Bell } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-16 bg-[#0f172a] border-r border-white/10 flex flex-col items-center py-4">
      
      {/* Icons container shifted down */}
      <div className="flex flex-col items-center gap-6 mt-16">
        <Home className="text-gray-400 hover:text-blue-400 cursor-pointer" />
        <Book className="text-gray-400 hover:text-blue-400 cursor-pointer" />
        <Bot className="text-gray-400 hover:text-blue-400 cursor-pointer" />
        <Bell className="text-gray-400 hover:text-blue-400 cursor-pointer" />
      </div>

    </div>
  );
};

export default Sidebar;