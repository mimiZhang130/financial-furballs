import requests
from flask import Flask, request, render_template
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
    print(response.json())
    print(actual_values)
    print(goal_values)
    print(income)
    print(cat_values)

    return [actual_values, goal_values, income, cat_values]
   
def calculate_cat_values(user_id):
    app_id = 3
    # set api_url and api_token
    api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json'
    api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
    [actual_values, goal_values, income, cat_values] = getuserinfo(user_id)
    num_of_toys = int(cat_values[0]['value']['toys']['value'])
    num_of_cat_coins = int(cat_values[0]['value']['cat_coins']['value'])
    num_of_food = int(cat_values[0]['value']['food']['value'])
    diff_toys = int(actual_values[0]['value']['wants_actual']['value']) - int(goal_values[0]['value']['wants_goal']['value'])
    diff_cat_coins = int(actual_values[0]['value']['savings_actual']['value']) - int(goal_values[0]['value']['savings_goal']['value'])
    diff_food = int(actual_values[0]['value']['needs_actual']['value']) - int(goal_values[0]['value']['needs_goal']['value'])
    margin_of_error = 3
    
    if abs(diff_toys) > margin_of_error:
        num_of_toys = 3 + round(diff_toys/margin_of_error)
    else:
        num_of_toys = 3
    if abs(diff_cat_coins) > margin_of_error:
        num_of_cat_coins = 50 + round(diff_cat_coins/margin_of_error)
    else:
        num_of_cat_coins = 50
    if abs(diff_food) > margin_of_error:
        num_of_food = 9 + round(diff_food/margin_of_error)
    else:
        num_of_food = 9
    myobj = {
        'app': app_id,
        'id': user_id,
        'record': {
            'cat_values':{
                'value':[{
                    'value':{
                        'toys':{
                            'value': num_of_toys
                        },
                        'cat_coins':{
                            'value': num_of_cat_coins
                        },
                        'food':{
                            'value': num_of_food
                        }
                    }
                }]
            }
        }
    }
    headers = {
        "X-Cybozu-API-Token": api_token,
        "Content-Type": "application/json"  # Add this line
    }
    print(num_of_food)
    print(num_of_cat_coins)
    print(num_of_toys)
    response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
    print(response.json())

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

def update_actual_values(user_id, input_actual_values):
    app_id = 3
    # set api_url and api_token
    api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json?app={app_id}&id={user_id}'
    api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
    headers = {
        "X-Cybozu-API-Token": api_token,
        "Content-Type": "application/json"  # Add this line
    }
    # to update actual values, 1. get prev values
    [actual_values, goal_values, income, cat_values] = getuserinfo(user_id)
    original_values = []
    for value in actual_values:
        original_values = [int(value['value']['savings_actual']['value']), int(value['value']['wants_actual']['value']), int(value['value']['needs_actual']['value']), int(value['value']['total_money']['value'])]
    
    total_money = int(round(original_values[3]))
    daily_income = int(income)/30

    savings_money = int(original_values[0]) * total_money / 100
    wants_money = int(original_values[1]) * total_money / 100
    needs_money = int(original_values[2]) * total_money / 100

    # savings_money = daily_income - wants_money - needs_money

    print(f"total money: {total_money}")
    print(f"savings money: {savings_money}")
    print(f"wants money: {wants_money}")
    print(f"needs money: {needs_money}")

    # increment by user added amount
    savings_money += int(input_actual_values[0])
    wants_money += int(input_actual_values[1])
    needs_money += int(input_actual_values[2])
    
    total_money = round(savings_money + wants_money + needs_money)
    # recalculate percentages
    savings_money = round(savings_money / total_money * 100)
    wants_money = round(wants_money / total_money * 100)
    needs_money = round(needs_money / total_money * 100)
    
    print(f"post")
    print(f"total money: {total_money}")
    print(f"savings money: {savings_money}")
    print(f"wants money: {wants_money}")
    print(f"needs money: {needs_money}")
    
    # actual_values are a percentage of a the income
    myobj = {
        'app': app_id,
        'id': user_id,
        'record': {
            'actuals':{
                'value':[{
                    'value':{
                        'savings_actual':{
                            'value': savings_money
                        },
                        'wants_actual':{
                            'value': wants_money
                        },
                        'needs_actual':{
                            'value': needs_money
                        },
                        'total_money':{
                            'value': total_money
                        }
                    }
                }]
            }
        }
    }

   # posts the object to api
    response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
    calculate_cat_values(user_id)
    return [savings_money, wants_money, needs_money]
    
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
       calculate_cat_values(user_id)
    return render_template("dashboard.html", actual_values=actual_values, goal_values=goal_values, income=income, cat_values=cat_values)

@app.route('/update_actual', methods=["POST"])
def update_actual():
    print("hey")
    if request.method == "POST":
        added_money = request.form.get("money")
        types = request.form.get("types")
        if types == "savings":
            savings_actual = int(added_money)
            wants_actual = 0
            needs_actual = 0
        elif types == "wants":
            savings_actual = 0
            wants_actual = int(added_money)
            needs_actual = 0
        else:
            savings_actual = 0
            wants_actual = 0
            needs_actual = int(added_money)
        return update_actual_values(1, [savings_actual, wants_actual, needs_actual])  
    return render_template('dashboard.html')

# run app on port 5000
if __name__ == '__main__':
   app.run(port=5000,debug=True)

