import requests
from flask import Flask, render_template
import json
def check_password(input_username, input_password):
    # get username and password from file
    api_token = 'EVOtazCLFGxS9DjFFcFYQRIcY7bXB73jLj6T4EyI'
    api_url = 'https://062l8wn0w126.kintone.com/k/v1/record.json?app=5&id=6'

    headers = {
        "X-Cybozu-API-Token": api_token
    }

    response = requests.get(api_url, headers=headers)
    # converts object to json
    res = response.json()
    values = res['record']['login']['value']
    for value in values:
        username = value['value']['username']['value']
        print(username)
        if username == input_username:
            password = value['value']['password']['value']
            if password == input_password:
                return value['value']['user_id']['value']
            else:
                return 0
    return 0

# # set api_url and api_token
# api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json?app={app_id}&id={id}'
# api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
# headers = {
#     "X-Cybozu-API-Token": api_token
# }

# # test object for posting data
# myobj = {
#     "record": {
#         "Table": {
#             "value": [
#                 {
#                     "value": {
#                         "username": {
#                             "value": "Bob"
#                         }
#                     }
#                 }
#             ]
        
#         }
#     }
# }

# # posts the object to api 
# response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
# # grabs a object from api
# response = requests.get(api_url, headers=headers)
# # converts object to json
# res = response.json()
# print(res)

# set up flask
app = Flask(__name__)
# set up route to home
@app.route('/')
def index():
    # create name variable
    # name = res['record']['Table']['value'][0]['value']['username']['value']
    name = "Bob"
    print(check_password("bob", "password"))
    # render index.html with name variable
    return render_template('index.html', name=name)

# run app on port 5000
if __name__ == '__main__':
    app.run(port=5000,debug=True)