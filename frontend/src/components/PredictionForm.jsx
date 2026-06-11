import React, { useState } from "react";
import axios from "axios";

export default function PredictionForm() {
  const [salary, setSalary] = useState("");
  const [years, setYears] = useState("");
  const [overtime, setOvertime] = useState("Yes");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    if (!salary || !years) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        salary: parseFloat(salary),
        years_at_company: parseFloat(years),
        overtime: overtime,
      });
      
      setResult(response.data);
    } catch (err) {
      setError("Backend not running. Start with: python app.py");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      background: '#1e1e2e', 
      borderRadius: '16px', 
      padding: '32px', 
      maxWidth: '450px', 
      width: '100%',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '24px', fontSize: '28px', textAlign: 'center', color: '#60a5fa' }}>
        Employee Attrition Prediction
      </h2>
      
      <input 
        type="number" 
        placeholder="Monthly Salary" 
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '16px', 
          borderRadius: '8px', 
          border: '1px solid #333', 
          background: '#2a2a35', 
          color: 'white',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}
      />
      
      <input 
        type="number" 
        placeholder="Years at Company" 
        value={years}
        onChange={(e) => setYears(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '16px', 
          borderRadius: '8px', 
          border: '1px solid #333', 
          background: '#2a2a35', 
          color: 'white',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}
      />
      
      <select 
        value={overtime}
        onChange={(e) => setOvertime(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '12px', 
          marginBottom: '24px', 
          borderRadius: '8px', 
          border: '1px solid #333', 
          background: '#2a2a35', 
          color: 'white',
          fontSize: '14px',
          cursor: 'pointer',
          boxSizing: 'border-box'
        }}
      >
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      
      <button 
        onClick={handlePredict}
        disabled={loading}
        style={{ 
          width: '100%', 
          padding: '12px', 
          background: '#3b82f6', 
          border: 'none', 
          borderRadius: '8px', 
          color: 'white', 
          fontSize: '16px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '16px'
        }}
      >
        {loading ? "Predicting..." : "Predict Attrition"}
      </button>

      {error && (
        <div style={{ 
          padding: '12px', 
          background: '#7f1a1a', 
          border: '1px solid #ef4444', 
          borderRadius: '8px', 
          color: '#fca5a5',
          fontSize: '14px',
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          {error}
        </div>
      )}

      {result && (
        <div style={{ 
          padding: '20px', 
          background: '#0a0a0f', 
          borderRadius: '12px',
          border: '1px solid #3b82f6',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '12px',
            color: result.attrition_risk?.includes('High') ? '#ef4444' : '#4ade80'
          }}>
            {result.attrition_risk}
          </h3>
          <p style={{ fontSize: '18px', marginBottom: '16px', color: '#e0e0e0' }}>
            {result.prediction}
          </p>
          <div style={{ borderTop: '1px solid #333', paddingTop: '16px' }}>
            <p style={{ color: '#a0a0b0', fontSize: '12px' }}>Top Risk Factors:</p>
            {result.top_factors?.map((factor, i) => (
              <p key={i} style={{ color: '#c0c0d0', fontSize: '14px', marginTop: '4px' }}>
                • {factor}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}