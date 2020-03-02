import time
from flask import Flask, request, flash, redirect, jsonify
from werkzeug.utils import redirect

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    resp = {'time': time.time()}
    return resp


@app.route('/login/', methods=["GET", "POST"])
def login_page():
    error = ''
    attempted_username = 'asd'
    try:
        if request.method == "POST":

            attempted_username = request.form['username']
            print(attempted_username)

        return error

    except Exception as e:
        # flash(e)
        return error
