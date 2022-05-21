from flask import Flask

app = Flask(__name__)

# Texsum Route

@app.route("/texsum")
def texsum():
    return {"texsum": ["Reddy", "Abhishek", "Hotaa", "Somuu"]}

if __name__ == "__main__":
    app.run(debug=True)