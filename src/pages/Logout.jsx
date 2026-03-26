import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";
import { LogOut } from "lucide-react";

const LogoutPage = () => {
  const [showFooter, setShowFooter] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    if (window.innerHeight - e.clientY < 80) setShowFooter(true);
    else setShowFooter(false);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowFooter(true);
    }
  };

  // ✅ CANCEL FUNCTION
  const handleCancel = () => {
    navigate(-1); // go back
    // OR: navigate("/dashboard");
  };

  // ✅ LOGOUT FUNCTION
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token"); // if using token
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div
      className="h-screen flex bg-[#0b1220] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* BACKGROUND */}
      <div className="w-full flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <div className="h-16">
            <Navbar />
          </div>

          <div
            className="flex-1 overflow-y-auto p-6"
            onScroll={handleScroll}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="sticky top-0 h-[calc(100vh-112px)]">
                <ProfileSidebar />
              </div>

              <div className="lg:col-span-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 BLUR MODAL */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-30">

        <div className="bg-[#111827] border border-gray-700 rounded-xl shadow-lg w-full max-w-md p-6 text-center">

          {/* ICON */}
          <div className="flex justify-center mb-4 relative">
            <div className="w-20 h-20 bg-gray-600 rounded-full relative">
              <div className="absolute top-1/2 left-[-120px] w-28 h-[1px] bg-gray-600"></div>
              <div className="absolute top-1/2 right-[-120px] w-28 h-[1px] bg-gray-600"></div>
            </div>
          </div>

          <h2 className="text-white font-semibold mb-3">
            AMAN SINGH
          </h2>

          <div className="flex justify-center items-center gap-2 mb-4">
            <LogOut size={18} className="text-gray-300" />
            <h3 className="text-lg font-semibold text-white">
              Log Out
            </h3>
          </div>

          <p className="text-gray-400 text-sm mb-2">
            Are you sure you want to log out of your account?
          </p>
          <p className="text-gray-500 text-sm mb-6">
            You can log back in anytime
          </p>

          {/* ✅ BUTTONS WITH LOGIC */}
          <div className="flex justify-center gap-4">

            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm shadow"
            >
              Cancel
            </button>

            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm shadow"
            >
              Logout
            </button>

          </div>

        </div>
      </div>

      {/* FLOATING FOOTER */}
      {showFooter && (
        <div className="fixed bottom-0 left-16 right-0 z-40">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LogoutPage;