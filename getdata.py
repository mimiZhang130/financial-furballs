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


def getuserinfo(user_id):
   app_id = 3
   # set api_url and api_token
   api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json?app={app_id}&id={user_id}'
   api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
   headers = {
       "X-Cybozu-API-Token": api_token
   }
   # grabs a object from api
   response = requests.get(api_url, headers=headers)
   # only get record data
   actual_values = response.json()['record']['actuals']['value']
   goal_values = response.json()['record']['goals']['value']
   income = response.json()['record']['Income']['value']
   cat_values = response.json()['record']['cat_values']['value']


   # converts object to json
   res = response.json()
   print(res)
   print(actual_values)
#    print(goal_values)
#    print(income)
#    print(cat_values)


def update_income(user_id, income):
    app_id = 3
    # set api_url and api_token
    api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json'
    api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
    headers = {
        "X-Cybozu-API-Token": api_token,
        "Content-Type": "application/json"  # Add this line
    }
    print(f"goalvalues: {user_id}")
   # # test object for posting data
    myobj = {
        'app': app_id,
        'id': user_id,
        'record': {
            'Income':{
                'value': income
            }
            # Other fields...
        }
    }

   # posts the object to api
    response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
    print(response.text)
# set up flask
app = Flask(__name__)
# set up route to home
@app.route('/')
def index():
   # create name variable
   # name = res['record']['Table']['value'][0]['value']['username']['value']
   name = "Bob"
   user_id = check_password("bob", "password")
   print(user_id)
   if(user_id != 0):
       update_income(user_id, 10000)
       getuserinfo(user_id)
   # render index.html with name variable
   return render_template('index.html', name=name)


# run app on port 5000
if __name__ == '__main__':
   app.run(port=5000,debug=True)

