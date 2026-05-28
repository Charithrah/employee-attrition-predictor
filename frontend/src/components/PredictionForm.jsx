import React from "react";
import { useState } from "react";
import axios from "axios";

export default function PredictionForm() {
  const [salary, setSalary] = useState("");
  const [years, setYears] = useState("");
  const [overtime, setOvertime] = useState("Yes");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      {
        salary,
        years_at_company: years,
        overtime,
      }
    );

    setResult(response.data);
  };

  return (
    <section className="py-20 px-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Employee Details</h2>

          <input
            type="number"
            placeholder="Monthly Salary"
            className="w-full p-3 mb-4 bg-black rounded"
            onChange={(e) => setSalary(e.target.value)}
          />

          <input
            type="number"
            placeholder="Years at Company"
            className="w-full p-3 mb-4 bg-black rounded"
            onChange={(e) => setYears(e.target.value)}
          />

          <select
            className="w-full p-3 mb-4 bg-black rounded"
            onChange={(e) => setOvertime(e.target.value)}
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <button
            onClick={handlePredict}
            className="bg-blue-600 px-6 py-3 rounded-xl w-full"
          >
            Predict Attrition
          </button>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl flex items-center justify-center">
          {result ? (
            <div className="text-center">
              <h3 className="text-5xl font-bold text-red-400">
                {result.attrition_risk}
              </h3>
              <p className="text-xl mt-4">{result.prediction}</p>
            </div>
          ) : (
            <p className="text-gray-400">
              Prediction result will appear here
            </p>
          )}
        </div>
      </div>
    </section>
  );
}