import requests
from flask import Flask, render_template

# set api_url and api_token
api_url = 'https://062l8wn0w126.kintone.com/k/v1/record.json?app=3&id=1'
api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
headers = {
    "X-Cybozu-API-Token": api_token
}

# test object for posting data
myobj = {
    "app": 3,
    "id": 1,
    "record": {
        "Table": {
            "value": [
                {
                    "value": {
                        "username": {
                            "value": "Bob"
                        }
                    }
                }
            ]
        
        }
    }
}

# posts the object to api 
response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
# grabs a object from api
response = requests.get(api_url, headers=headers)
# converts object to json
res = response.json()
print(res)

# set up flask
app = Flask(__name__)
# set up route to home
@app.route('/')
def index():
    # create name variable
    name = res['record']['Table']['value'][0]['value']['username']['value']
    # render index.html with name variable
    return render_template('index.html', name=name)

# run app on port 5000
if __name__ == '__main__':
    app.run(port=5000,debug=True)