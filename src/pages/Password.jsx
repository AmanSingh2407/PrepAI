import ProfileSidebar from "../components/ProfileSidebar";
import { Lock } from "lucide-react";

const ChangePassword = () => {

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* PROFILE SIDEBAR */}
        <div className="sticky top-0 h-[calc(100vh-112px)]">
          <ProfileSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3 flex justify-center items-start">

          {/* CARD */}
          <div className="bg-[#111827] border border-gray-700 rounded-xl shadow-lg w-full max-w-md p-6 text-center">

            {/* PROFILE ICON */}
            <div className="flex justify-center mb-4 relative">
              <div className="w-20 h-20 bg-gray-600 rounded-full relative">

                {/* LEFT LINE */}
                <div className="absolute top-1/2 left-[-120px] w-28 h-[1px] bg-gray-600"></div>

                {/* RIGHT LINE */}
                <div className="absolute top-1/2 right-[-120px] w-28 h-[1px] bg-gray-600"></div>

              </div>
            </div>

            {/* NAME */}
            <h2 className="text-white font-semibold mb-3">
              AMAN SINGH
            </h2>

            {/* TITLE */}
            <div className="flex justify-center items-center gap-2 mb-5">
              <Lock size={18} className="text-gray-300" />
              <h3 className="text-lg font-semibold text-white">
                Change Password
              </h3>
            </div>

            {/* FORM */}
            <div className="space-y-4 text-left">

              <div>
                <label className="text-sm text-gray-400">
                  Old Password
                </label>
                <input
                  type="password"
                  className="w-full bg-[#0b1220] border border-gray-600 text-white rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full bg-[#0b1220] border border-gray-600 text-white rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full bg-[#0b1220] border border-gray-600 text-white rounded px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-green-400"
                />
              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow">
                Confirm
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChangePassword;