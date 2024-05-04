import xgboost as xgb
from sklearn.model_selection import train_test_split
import pickle   
from sklearn.metrics import mean_squared_error
import pandas as pd
# Load the csv file
df = pd.read_csv("predictive_maintenance.csv")

# Assuming df is your DataFrame containing the data
features = df[['Air temperature [K]', 'Process temperature [K]', 'Rotational speed [rpm]', 'Torque [Nm]', 'Tool wear [min]']]
target = df['Target']

# Rename the features to remove prohibited characters
features.columns = ['Air_temperature_K', 'Process_temperature_K', 'Rotational_speed_rpm', 'Torque_Nm', 'Tool_wear_min']

# Split data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

# Convert the data into DMatrix format, which is required for XGBoost
dtrain = xgb.DMatrix(X_train, label=y_train)
dtest = xgb.DMatrix(X_test, label=y_test)

# Define parameters for XGBoost
params = {
    'objective': 'reg:squarederror',  # Use squared error for regression
    'eval_metric': 'rmse',  # Use root mean squared error for evaluation
    'max_depth': 6,  # Maximum depth of the tree
    'eta': 0.3,  # Learning rate
    'subsample': 0.8,  # Subsample ratio of the training instances
    'colsample_bytree': 0.8  # Subsample ratio of columns when constructing each tree
}

# Train the XGBoost model
num_rounds =200  # Number of boosting rounds
xgb_model = xgb.train(params, dtrain, num_rounds)

# Make predictions on the test set
y_pred = xgb_model.predict(dtest)

# Calculate the root mean squared error (RMSE)
rmse = mean_squared_error(y_test, y_pred, squared=False)
print("Root Mean Squared Error:", rmse)
pickle.dump(xgb_model, open("model.pkl", "wb"))
