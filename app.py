from flask import Flask, jsonify
import json

app = Flask(__name__)

claude_info = {
    "sylvain" : "it's a boy!"
}


@app.route('/', methods=['GET'])
def index():
    return jsonify(claude_info)


if __name__ == '__main__':
    app.run(debug=True)
