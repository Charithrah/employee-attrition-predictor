import React from "react";
export default function FeatureImportance() {
  const factors = [
    "Overtime",
    "Salary",
    "Job Satisfaction",
    "Promotion",
  ];

  return (
    <section className="p-10 bg-black text-white">
      <h2 className="text-3xl mb-6">Top Risk Factors</h2>

      {factors.map((item) => (
        <div key={item} className="mb-4">
          <p>{item}</p>
          <div className="w-full bg-gray-700 h-3 rounded">
            <div className="bg-blue-500 h-3 w-3/4 rounded"></div>
          </div>
        </div>
      ))}
    </section>
  );
}