import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

// Future pages (we'll build next)
const Interview = () => <h1 className="p-10">Interview Page</h1>;
const Login = () => <h1 className="p-10">Login Page</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;