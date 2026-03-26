import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Copyright from "./pages/Copyright";
import Cookies from "./pages/Cookies";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Learning from "./pages/Learning";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile"; 
import Analytics from "./pages/MyAnalytics";
import ChangePassword from "./pages/Password";
import LogoutPage from "./pages/Logout";



// 🔥 NEW IMPORTS
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import { LogOut } from "lucide-react";

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
      <Route path="/learning" element={<Learning />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/password" element={<ChangePassword />} />
      <Route path="/logout" element={<LogoutPage />} />
      
    </Routes>
  );
}

export default App;