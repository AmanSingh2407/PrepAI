import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [showFooter, setShowFooter] = useState(false);

  // Detect mouse near bottom
  const handleMouseMove = (e) => {
    if (window.innerHeight - e.clientY < 80) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  // Detect scroll end
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowFooter(true);
    }
  };

  return (
    <div
      className="h-screen flex bg-[#0b1220] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col relative">

        {/* Navbar */}
        <div className="h-16">
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto p-6 space-y-6"
          onScroll={handleScroll}
        >
          <Hero />

          <Section title="Software Roles" />
          <Section title="Non-Technical" />
          <Section title="Mechanical Engineering" />
          <Section title="Civil Engineering" />
          <Section title="Electronics And Communication Engineering" />
          <Section title="Electrical Engineering" />
          <Section title="AI & Data Science" />
          <Section title="Food-Technology" />
        </div>

        {/* FLOATING FOOTER (no space reserved) */}
        {showFooter && (
          <div className="fixed bottom-0 left-16 right-0 z-50 animate-slideUp">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;