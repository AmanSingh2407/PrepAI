import { Mail, Lock } from "lucide-react";

const LoginPage = ({ onClose, onSwitch }) => {
  return (
    <div className="card-dark p-8 w-[360px] relative animate-scaleIn shadow-2xl">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-white mb-2">
        Login Account
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        Login to continue your account
      </p>

      {/* Email */}
      <div className="flex items-center bg-[#1e293b] rounded-full px-4 py-2 mb-3 border border-white/10">
        <input
          type="email"
          placeholder="Email Address"
          className="bg-transparent outline-none flex-1 text-white text-sm"
        />
        <Mail size={16} className="text-gray-400" />
      </div>

      {/* Password */}
      <div className="flex items-center bg-[#1e293b] rounded-full px-4 py-2 mb-2 border border-white/10">
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent outline-none flex-1 text-white text-sm"
        />
        <Lock size={16} className="text-gray-400" />
      </div>

      {/* Forgot */}
      <p className="text-xs text-right text-gray-400 mb-4 cursor-pointer">
        Forget Password?
      </p>

      {/* Button */}
      <button className="w-full btn-primary py-2 mb-4 rounded-full">
        Login Account
      </button>

      {/* Divider */}
      <div className="flex items-center my-3">
        <hr className="flex-1 border-white/10" />
        <span className="px-2 text-xs text-gray-400">OR</span>
        <hr className="flex-1 border-white/10" />
      </div>

      {/* Social */}
      <button className="w-full bg-[#1e293b] py-2 rounded-full mb-2 text-sm hover:bg-[#334155] transition">
        Continue with Google
      </button>

      <button className="w-full bg-[#1e293b] py-2 rounded-full text-sm hover:bg-[#334155] transition">
        Continue with Apple
      </button>

      {/* Signup */}
      <p className="text-sm text-center mt-4 text-gray-400">
        Don’t have an account?{" "}
        <span
          onClick={onSwitch}
          className="text-blue-400 cursor-pointer hover:underline"
        >
          SignUp
        </span>
      </p>

    </div>
  );
};

export default LoginPage;