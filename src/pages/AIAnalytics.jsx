const Analytics = () => {
  return (
    <div className="p-6">

      <h2 className="text-white text-lg mb-6">
        Performance Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {["Confidence", "Accuracy", "Communication"].map((item, i) => (
          <div key={i} className="card-dark p-6 text-center">
            <h3 className="text-gray-400 text-sm">{item}</h3>
            <p className="text-white text-2xl font-bold mt-2">75%</p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Analytics;