const MockInterview = () => {
  return (
    <div className="flex items-center justify-center h-full p-6">

      <div className="card-dark p-8 w-full max-w-md text-center">

        <h2 className="text-white text-lg mb-4">
          AI Mock Interview
        </h2>

        <select className="w-full p-2 mb-4 bg-[#1e293b] text-white rounded">
          <option>SDE</option>
          <option>Data Science</option>
        </select>

        <button className="btn-primary w-full">
          Start Interview
        </button>

      </div>

    </div>
  );
};

export default MockInterview;