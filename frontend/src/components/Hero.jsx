import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 40px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Predict Employee Attrition Before It Happens
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#94a3b8",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        AI-powered HR analytics using XGBoost to identify resignation risk
        before employees leave.
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            padding: "14px 28px",
            marginRight: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Upload Dataset
        </button>

        <button
          style={{
            padding: "14px 28px",
            background: "#111827",
            color: "white",
            border: "1px solid #334155",
            borderRadius: "10px",
          }}
        >
          Try Live Demo
        </button>
      </div>
    </section>
  );
}