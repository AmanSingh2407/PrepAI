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

  //  SECTION-WISE DATA (IMPORTANT)
  const sectionsData = [
    {
      title: "Software Roles",
      roles: [
        {
          name: "Frontend Developer",
          img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
        },
        {
          name: "Backend Developer",
          img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        },
        {
          name: "Fullstack Developer",
          img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
        },
        {
          name: "DevOps Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
        },
        {
          name: "MERN Developer",
          img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
        },
        {
          name: "Fullstack Developer",
          img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
        },
      ],
    },
    {
      title: "Non-Technical",
      roles: [
        {
          name: "HR Manager",
          img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },
        {
          name: "Sales Executive",
          img: "https://cdn-icons-png.flaticon.com/512/1995/1995524.png",
        },
        {
          name: "Marketing",
          img: "https://cdn-icons-png.flaticon.com/512/3176/3176363.png",
        },
        {
          name: "HR Manager",
          img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },
        {
          name: "Sales Executive",
          img: "https://cdn-icons-png.flaticon.com/512/1995/1995524.png",
        },
        {
          name: "Sales Executive",
          img: "https://cdn-icons-png.flaticon.com/512/1995/1995524.png",
        },
      ],
    },
    {
      title: "Mechanical Engineering",
      roles: [
        {
          name: "Design Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
        },
        {
          name: "Production Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
        },
        {
          name: "Design Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
        },
        {
          name: "Production Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
        },
        {
          name: "Production Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
        },
        {
          name: "Design Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
        },
      ],
    },
    {
      title: "Civil Engineering",
      roles: [
        {
          name: "Site Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1048/1048310.png",
        },
         {
          name: "Structural Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        },
        {
          name: "Site Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1048/1048310.png",
        },
        {
          name: "Structural Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        },
        {
          name: "Site Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1048/1048310.png",
        },
        {
          name: "Site Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/1048/1048310.png",
        },
      ],
    },
    {
      title: "AI & Data Science",
      roles: [
        {
          name: "Data Scientist",
          img: "https://cdn-icons-png.flaticon.com/512/4149/4149671.png",
        },
        {
          name: "ML Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/2779/2779775.png",
        },
        {
          name: "Data Scientist",
          img: "https://cdn-icons-png.flaticon.com/512/4149/4149671.png",
        },
        {
          name: "ML Engineer",
          img: "https://cdn-icons-png.flaticon.com/512/2779/2779775.png",
        },
        {
          name: "Data Scientist",
          img: "https://cdn-icons-png.flaticon.com/512/4149/4149671.png",
        },
        {
          name: "Data Scientist",
          img: "https://cdn-icons-png.flaticon.com/512/4149/4149671.png",
        },
      ],
    },
  ];

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

          {/* 🔥 Dynamic Sections */}
          {sectionsData.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              roles={section.roles}
            />
          ))}
        </div>

        {/* Floating Footer */}
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