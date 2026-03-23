const Hero = () => {
  return (
    <div className="card-dark p-6 flex justify-between items-center">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome Back, Aman!
        </h1>

        <p className="text-gray-400 mt-1">
          Let’s conquer your interview today.
        </p>

        <div className="mt-5 flex gap-4">
          <button className="btn-primary glow">
            Community Hub
          </button>

          <button className="btn-primary glow">
            Start a Mock Test
          </button>
        </div>
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
        className="w-52"
      />
    </div>
  );
};

export default Hero;