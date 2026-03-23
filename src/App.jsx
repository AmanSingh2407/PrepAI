import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Copyright from "./pages/Copyright";
import Cookies from "./pages/Cookies";
import TermsOfService from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/copyright" element={<Copyright />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;