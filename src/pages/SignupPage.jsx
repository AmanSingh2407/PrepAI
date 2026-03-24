import { User, Mail, Lock } from "lucide-react";

const SignupPage = ({ onClose, onSwitch }) => {
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
        Create Account
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        Start your journey with us
      </p>

      {/* Name */}
      <div className="flex items-center bg-[#1e293b] rounded-full px-4 py-2 mb-3 border border-white/10">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-transparent outline-none flex-1 text-white text-sm"
        />
        <User size={16} className="text-gray-400" />
      </div>

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
      <div className="flex items-center bg-[#1e293b] rounded-full px-4 py-2 mb-4 border border-white/10">
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent outline-none flex-1 text-white text-sm"
        />
        <Lock size={16} className="text-gray-400" />
      </div>

      {/* Button */}
      <button className="w-full btn-primary py-2 mb-4 rounded-full">
        Continue
      </button>

      {/* Login Switch */}
      <p className="text-sm text-center text-gray-400">
        Already have an account?{" "}
        <span
          onClick={onSwitch}
          className="text-blue-400 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>

    </div>
  );
};

export default SignupPage;