import { useNavigate, useLocation } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import { useEffect } from "react";

const LogoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ CHECK if opened as modal
  const isModal = location.state?.background;

  // ✅ COMMON CLOSE FUNCTION (FIXED)
  const handleCancel = () => {
    if (isModal) {
      navigate(-1); // modal close
    } else {
      navigate("/"); // fallback if opened directly
    }
  };

  // ✅ ESC + SCROLL LOCK
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleCancel();
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* ✅ BLUR BACKGROUND */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={handleCancel}
      />

      {/* ✅ MODAL */}
      <div className="relative z-10 w-[380px] rounded-2xl bg-[#111827] border border-gray-700 p-6 shadow-2xl text-center">

        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        {/* NAME */}
        <h2 className="text-white font-semibold mb-3">
          AMAN SINGH
        </h2>

        {/* TITLE */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <LogOut size={18} className="text-gray-300" />
          <h3 className="text-lg font-semibold text-white">
            Log Out
          </h3>
        </div>

        {/* TEXT */}
        <p className="text-gray-400 text-sm mb-2">
          Are you sure you want to log out of your account?
        </p>
        <p className="text-gray-500 text-sm mb-6">
          You can log back in anytime
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default LogoutPage;