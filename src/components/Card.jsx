const Card = ({ title }) => {
  return (
    <div className="card-dark p-4 text-center hover:scale-105 transition">

      <div className="h-20 w-20 mx-auto bg-[#1e293b] rounded-lg flex items-center justify-center mb-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
          className="h-12"
        />
      </div>

      <h3 className="text-sm text-purple-400 mb-2">
        {title}
      </h3>

      <button className="btn-primary text-sm">
        Get Started
      </button>
    </div>
  );
};

export default Card;