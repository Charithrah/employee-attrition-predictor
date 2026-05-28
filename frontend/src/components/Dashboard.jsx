function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        HR Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-slate-900 p-8 rounded-3xl">
          <p className="text-slate-400">
            Attrition Risk
          </p>

          <h2 className="text-5xl font-bold text-red-400 mt-4">
            18%
          </h2>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl">
          <p className="text-slate-400">
            Employees
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-4">
            5240
          </h2>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl">
          <p className="text-slate-400">
            AI Accuracy
          </p>

          <h2 className="text-5xl font-bold text-blue-400 mt-4">
            95%
          </h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;

