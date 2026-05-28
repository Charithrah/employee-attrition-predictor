from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Employee(BaseModel):
    salary: float
    years_at_company: float
    overtime: str

@app.post("/predict")
def predict(employee: Employee):
    risk = random.randint(65, 95)

    prediction = "Likely to Leave" if risk > 70 else "Low Risk"

    return {
        "attrition_risk": f"{risk}%",
        "prediction": prediction,
        "top_factors": [
            "Overtime",
            "Low Satisfaction",
            "Distance from Home"
        ]
    }