import { Search, Mic } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 h-full bg-[#0f172a] border-b border-white/10">

      <h1 className="text-white font-semibold">AI Interviewer</h1>

      <div className="flex items-center bg-[#1e293b] px-4 py-1 rounded-full w-1/3">
        <Search size={16} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none px-2 w-full text-sm"
        />
        <Mic size={16} className="text-gray-400" />
      </div>

      <button className="text-gray-300">Login</button>
    </div>
  );
};

export default Navbar;