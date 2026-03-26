import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar"; // ✅ NEW

const EditProfile = () => {
  const navigate = useNavigate();
  const [showFooter, setShowFooter] = useState(false);

  const handleSave = () => {
    navigate("/profile");
  };

  // SAME AS DASHBOARD
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

        {/* NAVBAR */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* MAIN */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6"
          onScroll={handleScroll}
        >

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">

            {/* ✅ REUSABLE LEFT PANEL */}
            <ProfileSidebar />

            {/* RIGHT SECTION */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl flex">

              {/* IMAGE SECTION */}
              <div className="w-[260px] border-r border-white/10 flex flex-col items-center py-10">

                <h2 className="text-white text-lg font-semibold mb-6">
                  Edit Profile
                </h2>

                <div className="relative">
                  <div className="w-32 h-32 bg-gray-600 rounded-full"></div>

                  <div className="absolute bottom-2 right-2 bg-blue-500 p-2 rounded-full text-white text-xs cursor-pointer">
                    📷
                  </div>
                </div>

              </div>

              {/* FORM (UNCHANGED) */}
              <div className="flex-1 p-6 overflow-y-auto max-h-[80vh] space-y-4">

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">First Name*</label>
                    <input className="input w-full" />
                  </div>

                  <div>
                    <label className="label">Last Name*</label>
                    <input className="input w-full" />
                  </div>
                </div>

                <div>
                  <label className="label">Username*</label>
                  <input className="input w-full" />
                </div>

                <div>
                  <label className="label">Email*</label>
                  <input className="input w-full" />
                </div>

                <div>
                  <label className="label">DOB*</label>
                  <input type="date" className="input w-full" />
                </div>

                <div>
                  <label className="label">Mobile*</label>
                  <input className="input w-full" />
                </div>

                {/* Gender */}
                <div>
                  <label className="label">Gender*</label>
                  <div className="flex gap-3">
                    {["Male", "Female", "Other"].map((g) => (
                      <button key={g} className="chip">{g}</button>
                    ))}
                  </div>
                </div>

                {/* User Type */}
                <div>
                  <label className="label">User Type*</label>
                  <div className="flex flex-wrap gap-2">
                    {["College Student", "Professional", "School Student", "Fresher"].map((u) => (
                      <button key={u} className="chip">{u}</button>
                    ))}
                  </div>
                </div>

                {/* Domain */}
                <div>
                  <label className="label">Domain*</label>
                  <div className="flex flex-wrap gap-2">
                    {["Management", "Engineering", "Art & Science", "Medical", "Law", "Other"].map((d) => (
                      <button key={d} className="chip">{d}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="label">Course*</label>
                  <select className="input w-full">
                    <option>B.Tech/B.E.</option>
                  </select>
                </div>

                <div>
                  <label className="label">Course Specialization*</label>
                  <select className="input w-full">
                    <option>Computer Science and Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="label">Course Duration*</label>
                  <div className="flex gap-4">
                    <input className="input w-24" placeholder="2022" />
                    <input className="input w-24" placeholder="2026" />
                  </div>
                </div>

                <div>
                  <label className="label">Organization/College*</label>
                  <select className="input w-full">
                    <option>Select College</option>
                  </select>
                </div>

                <div>
                  <label className="label">Year*</label>
                  <input className="input w-full" />
                </div>

                <div>
                  <label className="label">Address*</label>
                  <input className="input w-full" />
                </div>

                {/* SAVE */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white"
                  >
                    Save
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* FLOATING FOOTER */}
        {showFooter && (
          <div className="fixed bottom-0 left-16 right-0 z-40 animate-slideUp">
            <Footer />
          </div>
        )}

      </div>
    </div>
  );
};

export default EditProfile;