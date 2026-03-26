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
import Analytics from "./Analytics";
import Learning from "./Learning";

const Dashboard = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [authMode, setAuthMode] = useState(null);
  const [activeView, setActiveView] = useState("home");
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
      { name: "DevOps Engineer", img: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
      { name: "MERN Developer", img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
      { name: "Fullstack Developer", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
      { name: "Java Developer", img: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    ],
  },
  {
    title: "Mechanical Engineering",
    roles: [
      { name: "Design Engineer", img: "https://cdn-icons-png.flaticon.com/512/609/609803.png" },
      { name: "Production Engineer", img: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png" },
      { name: "Maintenance Engineer", img: "https://cdn-icons-png.flaticon.com/512/1688/1688403.png" },
      { name: "Quality Engineer", img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" },
      { name: "Automobile Engineer", img: "https://cdn-icons-png.flaticon.com/512/743/743922.png" },
      { name: "Thermal Engineer", img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png" },
    ],
  },
  {
    title: "Civil Engineering",
    roles: [
      { name: "Site Engineer", img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png" },
      { name: "Structural Engineer", img: "https://cdn-icons-png.flaticon.com/512/3079/3079165.png" },
      { name: "Urban Planner", img: "https://cdn-icons-png.flaticon.com/512/684/684908.png" },
      { name: "Geotechnical Engineer", img: "https://cdn-icons-png.flaticon.com/512/4359/4359963.png" },
      { name: "Construction Manager", img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png" },
      { name: "Transportation Engineer", img: "https://cdn-icons-png.flaticon.com/512/854/854878.png" },
    ],
  },
  {
    title: "AI & Data Science",
    roles: [
      { name: "Machine Learning Engineer", img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
      { name: "Data Scientist", img: "https://cdn-icons-png.flaticon.com/512/4149/4149645.png" },
      { name: "AI Engineer", img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png" },
      { name: "Data Analyst", img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png" },
      { name: "Data Engineer", img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
      { name: "NLP Engineer", img: "https://cdn-icons-png.flaticon.com/512/4149/4149645.png" },
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

      {/* 🔥 MAIN APP */}
      <div className={`flex w-full h-full ${authMode ? "blur-md pointer-events-none" : ""}`}>

        {/* Sidebar */}
        <Sidebar 
           onSelect={(view) => setActiveView(view)} 
           activeView={activeView}
          />

        <div className="flex-1 flex flex-col">

          {/* Navbar */}
          <div className="h-16">
            <Navbar onLoginClick={() => setAuthMode("login")} />
          </div>

         {/* 🔥 CONTENT SWITCH */}
<div
  key={activeView}
  className="flex-1 overflow-y-auto p-6 space-y-6 animate-fadeIn"
  onScroll={handleScroll}
>

  {/* 🏠 HOME */}
  {activeView === "home" && (
    <>
      <Hero type="home" />

      {sectionsData.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          roles={section.roles}
        />
      ))}
    </>
  )}

  {/* 📚 LEARNING */}
  {activeView === "learning" && (
  <Learning />
)}

  {/* 🤖 AI */}
  {activeView === "ai" && (
    <AISection
      onSelect={(view, message) => {
        setActiveView(view);
        if (message) setInitialMessage(message);
      }}
    />
  )}

  {/* 💬 CHAT */}
  {activeView === "interview" && (
    <AIChat
      initialMessage={initialMessage}
      onBack={() => setActiveView("ai")}
    />
  )}

  {/* 🎤 MOCK */}
 {activeView === "mock" && (
  <MockInterview onBackToAI={() => setActiveView("ai")} />
)}

  {/* 📊 ANALYTICS */}
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

      {/* 🔐 LOGIN MODAL */}
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