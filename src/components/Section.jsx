import Card from "./Card";
import { ChevronRight } from "lucide-react";

const Section = ({ title }) => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "MERN Stack Developer",
    "Fullstack Developer",
  ];

  return (
    <div className="card-dark p-5">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>

        <button className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {roles.map((role, i) => (
          <Card key={i} title={role} />
        ))}
      </div>
    </div>
  );
};

export default Section;