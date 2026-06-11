from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend Running Successfully 🚀"

@app.route("/predict", methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        salary = data.get('salary', 0)
        years_at_company = data.get('years_at_company', 0)
        overtime = data.get('overtime', 'No')
        
        # Calculate risk score based on inputs
        risk_score = 0
        
        # Salary impact
        if salary < 30000:
            risk_score += 40
        elif salary < 50000:
            risk_score += 25
        else:
            risk_score += 15
        
        # Years at company impact
        if years_at_company < 1:
            risk_score += 30
        elif years_at_company > 5:
            risk_score += 20
        else:
            risk_score += 15
        
        # Overtime impact
        if overtime == "Yes":
            risk_score += 35
        
        # Ensure risk_score is within 0-100
        risk_score = min(100, risk_score)
        
        # Determine risk level and prediction
        if risk_score >= 70:
            attrition_risk = f"{risk_score}% - High Risk"
            prediction = "⚠️ Likely to Leave"
        elif risk_score >= 40:
            attrition_risk = f"{risk_score}% - Medium Risk"
            prediction = "⚠️ Moderate Risk"
        else:
            attrition_risk = f"{risk_score}% - Low Risk"
            prediction = "✅ Likely to Stay"
        
        return jsonify({
            "attrition_risk": attrition_risk,
            "prediction": prediction,
            "top_factors": [
                "Overtime" if overtime == "Yes" else "Work-Life Balance",
                "Salary Level",
                "Years at Company"
            ]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8000)
