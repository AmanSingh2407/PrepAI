import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import AISection from "./AISection";
import AIChat from "./AIChat";
import MockInterview from "./MockInterview";
import Analytics from "./MyAnalytics";

const Dashboard = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [activeView, setActiveView] = useState("home");

  //  NEW STATE (IMPORTANT)
  const [initialMessage, setInitialMessage] = useState("");

  const handleMouseMove = (e) => {
    if (window.innerHeight - e.clientY < 80) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowFooter(true);
    }
  };

  const sectionsData = [
    {
      title: "Software Roles",
      roles: [
        { name: "Frontend Developer", img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
        { name: "Backend Developer", img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
        { name: "Fullstack Developer", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
        { name: "DevOps Engineer", img: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
        { name: "MERN Developer", img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
        { name: "Fullstack Developer", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
      ],
    },
  ];

  return (
    <div
      className="h-screen flex bg-[#0b1220] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >

      {/*  Background */}
      <div className="gradient-bg"></div>

      {/*  MAIN APP */}
      <div className={`flex w-full h-full ${authMode ? "blur-md pointer-events-none" : ""}`}>

        {/* Sidebar */}
        <Sidebar onSelect={(view) => setActiveView(view)} />

        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <div className="h-16">
            <Navbar onLoginClick={() => setAuthMode("login")} />
          </div>

          {/*  CONTENT SWITCH */}
          <div
            className="flex-1 overflow-y-auto p-6 space-y-6"
            onScroll={handleScroll}
          >

            {/*  HOME */}
            {activeView === "home" && (
              <>
                <Hero />
                {sectionsData.map((section, index) => (
                  <Section
                    key={index}
                    title={section.title}
                    roles={section.roles}
                  />
                ))}
              </>
            )}

            {/*  AI MAIN */}
            {activeView === "ai" && (
              <AISection
                onSelect={(view, message) => {
                  setActiveView(view);

                  //  SEND MESSAGE TO CHAT
                  if (message) {
                    setInitialMessage(message);
                  }
                }}
              />
            )}

            {/*  CHAT (UPDATED WITH BACK BUTTON) */}
          {activeView === "interview" && (
            <AIChat
              initialMessage={initialMessage}
               onBack={() => setActiveView("ai")} //  FIXED
            />
            )}

            {/*  MOCK */}
            {activeView === "mock" && <MockInterview />}

            {/*  ANALYTICS */}
            {activeView === "analytics" && <Analytics />}

          </div>

          {/* Footer */}
          {showFooter && (
            <div className="fixed bottom-0 left-16 right-0 z-40 animate-slideUp">
              <Footer />
            </div>
          )}
        </div>
      </div>

      {/*  LOGIN MODAL */}
      {authMode && (
        <div className="absolute inset-0 flex items-center justify-center z-[999]">

          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div className="relative z-[1000] animate-scaleIn">
            {authMode === "login" ? (
              <LoginPage
                onClose={() => setAuthMode(null)}
                onSwitch={() => setAuthMode("signup")}
              />
            ) : (
              <SignupPage
                onClose={() => setAuthMode(null)}
                onSwitch={() => setAuthMode("login")}
              />
            )}
          </div>

        </div>
      )}

    </div>
  );
};

export default Dashboard;