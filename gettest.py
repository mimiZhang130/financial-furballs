from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/catfood', methods=['GET'])
def get_cat_food():
    app_id = 3
    record_id = 1  # It's better to rename `id` to `record_id` to avoid conflicts with the built-in `id` function
    api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json?app={app_id}&id={record_id}'
    api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
    headers = {"X-Cybozu-API-Token": api_token}

    response = requests.get(api_url, headers=headers)
    data = response.json()  # Parse JSON response

    # Extract the specific piece of data you're interested in
    cat_food_value = data["record"]["cat_values"]["value"][0]["value"]["food"]["value"]
    
    # Return this data as JSON
    return jsonify({"catFood": cat_food_value})

if __name__ == '__main__':
    app.run(debug=True)
