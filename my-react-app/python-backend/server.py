from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/python', methods=['GET'])
def python_backend():
    return jsonify({"message": "Hello from Python backend!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
