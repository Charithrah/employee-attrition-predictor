import pandas as pd
from xgboost import XGBClassifier
import pickle

df = pd.read_csv("employee_data.csv")

X = df.drop("Attrition", axis=1)
y = df["Attrition"]

model = XGBClassifier()
model.fit(X, y)

pickle.dump(model, open("model.pkl", "wb"))

print("Model trained successfully")