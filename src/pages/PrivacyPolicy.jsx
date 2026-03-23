import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="h-screen flex bg-[#0b1220] overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* Body */}
        <div className="flex-1 p-4 bg-[#111827] flex flex-col">

          {/* Top Bar */}
          <div className="bg-white/10 text-gray-200 rounded-md px-4 py-2 mb-4 border border-white/10 backdrop-blur-sm">
            Privacy Policy
          </div>

          {/* Main Content Area (Dark Gradient) */}
          <div className="flex-1 rounded-md shadow flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#020617] border border-white/10">
            
            <img
              src="/robot.png"
              alt="robot"
              className="h-64 object-contain opacity-90 hover:scale-105 transition"
            />

          </div>

        </div>

        {/* Sticky Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default PrivacyPolicy;