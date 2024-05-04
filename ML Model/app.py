import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd
import xgboost as xgb
from flask_cors import CORS
# Create flask app
flask_app = Flask(__name__)
model = pickle.load(open("model.pkl", "rb"))
CORS(flask_app)

@flask_app.route("/")
def Home():
    return render_template("index.html")
@flask_app.route("/predict", methods=["POST"])
def predict():
    # Retrieve input data from JSON in POST request
    data = request.json

    # Extract input variables and product IDs from the list of inputs
    inputs = data["inputs"]

    # Initialize lists to store predictions and corresponding product IDs
    predictions = []
    product_ids = []

    # Loop through each input
    for input_data in inputs:
        # Extract product ID
        product_id = input_data["product_id"]

        # Extract input variables
        air_temp = float(input_data["Air_Temp"])
        process_temp = float(input_data["Process_Temp"])
        rot_speed = float(input_data["Rot_Speed"])
        torque = float(input_data["Torque"])
        tool_wear = float(input_data["Tool_Wear"])

        # Create a DataFrame from the input data
        new_data = pd.DataFrame({
            'Air_temperature_K': [air_temp],
            'Process_temperature_K': [process_temp],
            'Rotational_speed_rpm': [rot_speed],
            'Torque_Nm': [torque],
            'Tool_wear_min': [tool_wear]
        })

        # Convert the new input data into DMatrix format
        new_data_dmatrix = xgb.DMatrix(new_data)

        # Make prediction for this input
        prediction = model.predict(new_data_dmatrix)[0]
        prediction = float(prediction)
        # Append prediction and product ID to respective lists
        predictions.append(prediction)
        product_ids.append(product_id)

    # Return predictions and corresponding product IDs as JSON response
    response_data = {"predictions": predictions, "product_ids": product_ids}
    return jsonify(response_data)


if __name__ == "__main__":
    flask_app.run(debug=True)
