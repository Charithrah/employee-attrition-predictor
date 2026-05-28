import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-8">

      <h1 className="text-6xl font-bold text-center leading-tight">
        Predict Employee Attrition Using AI
      </h1>

      <p className="text-slate-400 text-xl mt-6 text-center max-w-3xl">
        Enterprise-grade HR analytics platform powered by XGBoost.
      </p>

      <div className="flex gap-6 mt-10">

        <button
          onClick={() => navigate("/upload")}
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-semibold"
        >
          Upload Dataset
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="border border-slate-700 px-8 py-4 rounded-2xl hover:border-blue-400"
        >
          Open Dashboard
        </button>

      </div>

    </div>
  );
}

export default Home;

