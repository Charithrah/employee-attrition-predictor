import React from "react";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white">
      <h1 className="text-2xl font-bold">AttritionAI</h1>

      <div className="space-x-6">
        <a href="#home">Home</a>
        <a href="#predict">Predict</a>
        <a href="#dashboard">Dashboard</a>
      </div>
    </nav>
  );
}