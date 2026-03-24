import { Search, Mic } from "lucide-react";

const Navbar = ({ onLoginClick }) => {
  return (
    <div className="flex items-center justify-between pl-2 pr-6 h-full bg-[#0f172a] border-b border-white/10 -ml-16 w-[calc(100%+4rem)]">

      <h1 className="text-white font-semibold text-lg">AI Interviewer</h1>

      <div className="flex items-center gap-6">

        <div className="flex items-center bg-[#1e293b] px-4 py-2 rounded-xl w-72 border border-white/10">
          <Search size={17} className="text-gray-400" />
          <input className="bg-transparent px-3 w-full text-white outline-none" />
          <Mic size={18} className="text-gray-400" />
        </div>

        <button
          onClick={onLoginClick}
          className="text-gray-300 hover:text-white"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Navbar;