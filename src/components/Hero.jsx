const Hero = ({ type = "home" }) => {
  return (
    <div className="card-dark px-8 py-6 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-6">

      {/* LEFT */}
      <div className="flex-1 max-w-[520px]">

        {/* TITLE */}
        <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight">
          {type === "learning"
            ? "Welcome Back, Aman!"
            : "Welcome to AI Interviewer 🚀"}
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          {type === "learning"
            ? "Let’s conquer your interview today."
            : "Practice interviews, improve skills and get hired."}
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4 flex-wrap">

          {type === "learning" ? (
            <>
              <button className="btn-primary glow px-5 py-2 text-sm font-medium">
                Community Hub
              </button>

              <button className="btn-primary glow opacity-90 px-5 py-2 text-sm font-medium">
                Start a Mock Test
              </button>
            </>
          ) : (
            <>
              <button className="btn-primary glow px-5 py-2 text-sm font-medium">
                Start Interview
              </button>

              <button className="btn-primary glow opacity-90 px-5 py-2 text-sm font-medium">
                Explore
              </button>
            </>
          )}

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center lg:justify-end">

        {type === "learning" ? (
          <div className="grid grid-cols-4 gap-6 text-center">

            {[
              ["12", "Total Learning"],
              ["87%", "Study Time"],
              ["155h", "Total Study"],
              ["85/100", "Test Score"]
            ].map(([value, label], i) => (
              <div key={i}>
                <p className="text-xl font-semibold text-white">
                  {value}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {label}
                </p>
              </div>
            ))}

          </div>
        ) : (
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            className="w-56 lg:w-64 object-contain"
            alt="hero"
          />
        )}

      </div>

    </div>
  );
};

export default Hero;