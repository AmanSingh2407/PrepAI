import { Search, Mic } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 h-full bg-[#0f172a] border-b border-white/10">

      {/* Left Title */}
      <h1 className="text-white font-semibold text-lg">
        AI Interviewer
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search Bar */}
        <div className="flex items-center bg-[#1e293b]/80 backdrop-blur-md px-4 py-2 rounded-xl w-64 md:w-80 border border-white/10 shadow-inner">

          <Search size={17} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-3 w-full text-sm text-gray-200 placeholder-gray-400"
          />

          <Mic size={18} className="text-gray-400 cursor-pointer hover:text-blue-400 transition" />
        </div>

        {/* Login Button */}
        <button className="text-gray-350 text-sm hover:text-white transition">
          Login
        </button>

      </div>
    </div>
  );
};

export default Navbar;