import requests
from flask import Flask, render_template

api_url = 'https://062l8wn0w126.kintone.com/k/v1/record.json?app=3&id=1'
api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'

headers = {
    "X-Cybozu-API-Token": api_token
}
myobj = {'username':{'type': 'SINGLE_LINE_TEXT', 'value': 'bob'}}
response = requests.post(api_url, headers=headers, json=myobj)
response = requests.get(api_url, headers=headers)
res = response.json()
print(res)

app = Flask(__name__)
@app.route('/')
def index():
    name = res['record']['Table']['value'][0]['value']['username']['value']
    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run(port=5000,debug=True)