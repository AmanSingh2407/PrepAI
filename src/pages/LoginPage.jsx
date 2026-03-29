import { Mail, Lock, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FIX: preserve original background
  const background = location.state?.background || location;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ESC KEY CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please signup first.");
      return;
    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login Successful ✅");
      navigate("/");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* ✅ BLUR BACKGROUND */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={() => navigate(-1)}
      />

      {/* ✅ MODAL */}
      <div className="relative z-10 w-[380px] rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <h2 className="text-white text-xl font-semibold mb-1">
          Login Account
        </h2>
        <p className="text-gray-400 text-sm mb-5">
          Login to continue your account
        </p>

        {/* EMAIL */}
        <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-3 border border-white/10">
          <Mail size={16} className="text-gray-400" />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent ml-2 outline-none text-white w-full"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-2 border border-white/10">
          <Lock size={16} className="text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent ml-2 outline-none text-white w-full"
          />
        </div>

        <div className="text-right text-xs text-gray-400 mb-4 hover:text-white cursor-pointer">
          Forget Password?
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-medium mb-4"
        >
          Login Account
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          OR
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <button className="w-full py-2 rounded-lg bg-white/10 text-white mb-2 hover:bg-white/20">
          Continue with Google
        </button>

        <button className="w-full py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">
          Continue with Apple
        </button>

        {/* ✅ FIXED SIGNUP NAVIGATION */}
        <p className="text-gray-400 text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() =>
              navigate("/signup", { state: { background } }) // ✅ FIX HERE
            }
            className="text-cyan-400 cursor-pointer"
          >
            SignUp
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;