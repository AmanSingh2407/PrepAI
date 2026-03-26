import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";

const Profile = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleMouseMove = (e) => {
    if (window.innerHeight - e.clientY < 80) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowFooter(true);
    }
  };

  return (
    <div
      className="h-screen flex bg-[#0b1220] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col relative">
        {/* Navbar */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* MAIN */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6"
          onScroll={handleScroll}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

            {/* ✅ STICKY LEFT PANEL */}
            <div className="sticky top-6 self-start h-full">
  <ProfileSidebar />
</div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-3 space-y-6">

              {/* PROFILE HEADER */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-white text-xl font-semibold">
                  A
                </div>

                <div>
                  <h2 className="text-white text-lg font-semibold">
                    Aman Singh
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Computer Science Student
                  </p>
                  <p className="text-gray-400 text-sm">
                    Bundelkhand University
                  </p>
                </div>
              </div>

              {/* PERSONAL INFO */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <p><span className="text-gray-400">Full Name:</span> Aman Singh</p>
                  <p><span className="text-gray-400">DOB:</span> 01/01/2003</p>
                  <p><span className="text-gray-400">Email:</span> aman@mail.com</p>
                  <p><span className="text-gray-400">Address:</span> Jhansi, Uttar Pradesh</p>
                  <p><span className="text-gray-400">Phone:</span> 2642626542</p>
                  <p><span className="text-gray-400">Department:</span> Computer Science</p>
                </div>
              </div>

              {/* ACADEMIC */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Academic Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <p><span className="text-gray-400">Course:</span> B.Tech CSE</p>
                  <p><span className="text-gray-400">Institute:</span> Bundelkhand University</p>
                  <p><span className="text-gray-400">Year:</span> Final Year</p>
                </div>
              </div>

              {/* ACTIVITY */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  Recent Activity
                </h3>

                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Updated profile information</li>
                  <li>• Explored community section</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        {showFooter && (
          <div className="fixed bottom-0 left-16 right-0 z-50 animate-slideUp">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
