# import requests
# from flask import Flask, request, render_template
# import json

# def update_actual_values(user_id, input_actual_values):
#     app_id = 3
#     # set api_url and api_token
#     api_url = f'https://062l8wn0w126.kintone.com/k/v1/record.json?app={app_id}&id={user_id}'
#     api_token = 'uacLMXhr5VTtpTuo1oG6LTXACDaVhF6dIOz8nxuk'
#     headers = {
#         "X-Cybozu-API-Token": api_token,
#         "Content-Type": "application/json"  # Add this line
#     }
#     # to update actual values, 1. get prev values
#     [actual_values, goal_values, income, cat_values] = getuserinfo(user_id)
#     original_values = []
#     for value in actual_values:
#         original_values = [int(value['value']['savings_actual']['value']), int(value['value']['wants_actual']['value']), int(value['value']['needs_actual']['value']), int(value['value']['total_money']['value'])]
    
#     total_money = int(original_values[3])
#     daily_income = int(income)/30

#     savings_money = int(original_values[0]) * total_money / 100
#     wants_money = int(original_values[1]) * total_money / 100
#     needs_money = int(original_values[2]) * total_money / 100

#     # savings_money = daily_income - wants_money - needs_money

#     # print(f"total money: {total_money}")
#     # print(f"savings money: {savings_money}")
#     # print(f"wants money: {wants_money}")
#     # print(f"needs money: {needs_money}")

#     # increment by user added amount
#     savings_money += int(input_actual_values[0])
#     wants_money += int(input_actual_values[1])
#     needs_money += int(input_actual_values[2])
    
#     total_money = savings_money + wants_money + needs_money
#     # recalculate percentages
#     savings_money = round(savings_money / total_money * 100)
#     wants_money = round(wants_money / total_money * 100)
#     needs_money = round(needs_money / total_money * 100)
    
#     # print(f"post")
#     # print(f"total money: {total_money}")
#     # print(f"savings money: {savings_money}")
#     # print(f"wants money: {wants_money}")
#     # print(f"needs money: {needs_money}")
    
#     # actual_values are a percentage of a the income
#     myobj = {
#         'app': app_id,
#         'id': user_id,
#         'record': {
#             'actuals':{
#                 'value':[{
#                     'value':{
#                         'savings_actual':{
#                             'value': savings_money
#                         },
#                         'wants_actual':{
#                             'value': wants_money
#                         },
#                         'needs_actual':{
#                             'value': needs_money
#                         },
#                         'total_money':{
#                             'value': total_money
#                         }
#                     }
#                 }]
#             }
#         }
#     }

#    # posts the object to api
#     response = requests.put(api_url, headers=headers, data=json.dumps(myobj))
#     return [savings_money, wants_money, needs_money]

# app = Flask(__name__)
# @app.route('/update_actual', methods=["POST"])
# def update_actual():
#     print("hey")
#     if request.method == "POST":
#         added_money = request.form.get("money")
#         types = request.form.get("types")
#         if types == "savings":
#             savings_actual = int(added_money)
#             wants_actual = 0
#             needs_actual = 0
#         elif types == "wants":
#             savings_actual = 0
#             wants_actual = int(added_money)
#             needs_actual = 0
#         else:
#             savings_actual = 0
#             wants_actual = 0
#             needs_actual = int(added_money)
#         return update_actual_values(1, [savings_actual, wants_actual, needs_actual])  
#     return render_template('dashboard.html')

from flask import Flask, request, jsonify
from flask_cors import CORS  # Don't forget to import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/update_actual', methods=["POST"])
def update_actual():
    if request.method == "POST":
        data = request.get_json()  # Get data sent as JSON
        added_money = data['money']
        types = data['types']
        # Assuming update_actual_values function updates the data appropriately and returns something
        updated_values = update_actual_values(1, [int(added_money) if types == 'savings' else 0, 
                                                  int(added_money) if types == 'wants' else 0, 
                                                  int(added_money) if types == 'needs' else 0])
        return jsonify(updated_values)  # Send back the updated values as JSON
    return 'Only POST method is accepted', 400

if __name__ == '__main__':
    app.run(debug=True)
