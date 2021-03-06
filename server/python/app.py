# import os
import pandas as pd

from flask import Flask, request, jsonify
from flask_cors import CORS

def predict(predict_value):
    """Simple linear Regression"""

    df = pd.read_csv('sample_data.csv')
    print(df.head(3))

    df_c = df - df.mean()
    print (df_c.head(3))

    x = df_c['x']
    y = df_c['y']

    xx = x * x
    xy = x * y

    a = xy.sum() / xx.sum()

    mean = df.mean()
    x_c = predict_value - mean['x']

    # Output predict value
    return a * x_c + mean['y']

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods=["GET", "POST"])
def index():
    return "Hello world"

@app.route("/post", methods=["GET", "POST"])
def post():
    json_data = request.get_json()
    resultOfPredict = predict(int(json_data["val"]))
    print(resultOfPredict)
    return jsonify(val = resultOfPredict)

if __name__ == "__main__":
    app.run()
    # app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))