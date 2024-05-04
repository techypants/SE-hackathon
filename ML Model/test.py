import pickle
import xgboost as xgb
import pandas as pd

model = pickle.load(open("model.pkl", "rb"))

new_data = pd.DataFrame({
    'Air_temperature_K': [298.8],
    'Process_temperature_K': [309.2],
    'Rotational_speed_rpm': [1425],
    'Torque_Nm': [54],
    'Tool_wear_min': [135]
})

print("Input Data:")
print(new_data)

# Convert the new input data into DMatrix format
new_data_dmatrix = xgb.DMatrix(new_data)

# Make predictions
prediction = model.predict(new_data_dmatrix)[0]

print("Prediction:", prediction)
