# microservice.py

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    a = data.get('a')
    b = data.get('b')
    result = a + b
    return jsonify({'result': result})

@app.route('/subtract', methods=['POST'])
def subtract():
    data = request.get_json()
    a = data.get('a')
    b = data.get('b')
    result = a - b
    return jsonify({'result': result})

@app.route('/multiply', methods=['POST'])
def multiply():
    data = request.get_json()
    a = data.get('a')
    b = data.get('b')
    result = a * b
    return jsonify({'result': result})

@app.route('/divide', methods=['POST'])
def divide():
    data = request.get_json()
    a = data.get('a')
    b = data.get('b')
    if b == 0:
        return jsonify({'error': 'Division by zero'}), 400
    result = a / b
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
