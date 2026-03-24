import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Copyright from "./pages/Copyright";
import Cookies from "./pages/Cookies";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// 🔥 NEW IMPORTS
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Dashboard />} />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Footer Pages */}
      <Route path="/copyright" element={<Copyright />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;