import requests
from flask import Flask, request, render_template
import json

global actual_values, goal_values, income, cat_values
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
    # print(res)
    # print(actual_values)
    # print(goal_values)
    # print(income)
    # print(cat_values)

    return [actual_values, goal_values, income, cat_values]
   

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
        }
    }

   # posts the object to api
    response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
    print(response.json())

def update_actual_values(user_id, actual_values):
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
            'actuals':{
                'value':[{
                    'value':{
                        'savings_actual':{
                            'value': actual_values[0]
                        },
                        'wants_actual':{
                            'value': actual_values[1]
                        },
                        'needs_actual':{
                            'value': actual_values[2]
                        }
                    }
                }]
            }
        }
    }

   # posts the object to api
    response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
    print(response.text)
    return 1
    
# set up flask
app = Flask(__name__)
# set up route to home
@app.route('/')
def index():
   # create name variable
   # name = res['record']['Table']['value'][0]['value']['username']['value']
   name = "Bob"
   user_id = check_password("bob", "password")
   if(user_id != 0):
       update_income(user_id, 10000)
       getuserinfo(user_id)
   # render index.html with name variable
   return render_template('index.html', name=name)

@app.route('/dashboard', methods=["POST"])
def dashboard():
    if request.method == "POST":
       # getting input with name = user in HTML form
       user_name = request.form.get("user")
       # getting input with name = pw in HTML form 
       password = request.form.get("pw") 
       user_id = check_password(user_name, password)
       if user_id == 0:
           return "Invalid username or password"
       [actual_values, goal_values, income, cat_values] = getuserinfo(user_id)
    return render_template("dashboard.html", actual_values=actual_values, goal_values=goal_values, income=income, cat_values=cat_values)

@app.route('/update_actual', methods=["POST"])
def update_actual():
    print("hey")
    if request.method == "POST":
        savings_actual = request.form.get("s_actual")
        wants_actual = request.form.get("w_actual")
        needs_actual = request.form.get("n_actual")

        update_actual_values(1, [savings_actual, wants_actual, needs_actual])
        return render_template('dashboard.html')
    return render_template('dashboard.html')

# run app on port 5000
if __name__ == '__main__':
   app.run(port=5000,debug=True)

