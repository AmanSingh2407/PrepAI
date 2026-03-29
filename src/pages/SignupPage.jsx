import { User, Mail, Lock, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ FIX: preserve original background (HOME)
  const background = location.state?.background || location;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const userData = { name, email, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup Successful 🎉");

    // ✅ IMPORTANT: keep background when going to login
    navigate("/login", { state: { background } });
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
          Create Account
        </h2>
        <p className="text-gray-400 text-sm mb-5">
          Start your journey with us
        </p>

        {/* NAME */}
        <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-3 border border-white/10">
          <User size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent ml-2 outline-none text-white w-full"
          />
        </div>

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
        <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg mb-4 border border-white/10">
          <Lock size={16} className="text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent ml-2 outline-none text-white w-full"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSignup}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-medium mb-4"
        >
          Create Account
        </button>

        {/* SWITCH */}
        <p className="text-gray-400 text-sm text-center mt-2">
          Already have an account?{" "}
          <span
            onClick={() =>
              navigate("/login", { state: { background } }) // ✅ FIX
            }
            className="text-cyan-400 cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignupPage;