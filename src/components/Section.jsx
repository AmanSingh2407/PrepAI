import Card from "./Card";
import { ChevronRight } from "lucide-react";

const Section = ({ title, roles }) => {
  return (
    <div className="card-dark p-5 min-h-[260px]">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
  {title}
</h2>

        <button className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full hover:scale-105 transition">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {roles?.map((role, i) => (
          <Card key={i} title={role.name} img={role.img} />
        ))}
      </div>

    </div>
  );
};

export default Section;