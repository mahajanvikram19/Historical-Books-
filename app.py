from flask import Flask, render_template, request, redirect, url_for
import sqlite3, os
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'a_secret_key'  # Needed for secure cookies
DB = 'login.db'
def init_db():
    with sqlite3.connect(DB) as con:
        con.execute("""CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )""")
init_db()
@app.route("/", methods=["GET"])
def root():
    return render_template("login.html")
@app.route("/register", methods=["POST"])
def register():
    username = request.form.get("username", "").strip()
    email = request.form.get("email", "").strip().lower()
    password = request.form.get("password", "")
    password2 = request.form.get("password2", "")
    # Validation
    if len(username)<3 or len(username)>15:
        return render_template("login.html", msg="Username must be 3-15 characters.", ok=False)
    if '@' not in email or '.' not in email:
        return render_template("login.html", msg="Enter a valid email.", ok=False)
    if len(password)<6:
        return render_template("login.html", msg="Password must be at least 6 characters.", ok=False)
    if password != password2:
        return render_template("login.html", msg="Passwords do not match.", ok=False)
    # Store in DB
    hashed = generate_password_hash(password)
    try:
        with sqlite3.connect(DB) as con:
            con.execute("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", (username, email, hashed))
        return render_template("login.html", msg="Registration successful! Please log in.", ok=True)
    except sqlite3.IntegrityError:
        return render_template("login.html", msg="Email already registered.", ok=False)
@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email","").strip().lower()
    password = request.form.get("password","")
    with sqlite3.connect(DB) as con:
        cur = con.execute("SELECT password, username FROM users WHERE email=?", (email,))
        row = cur.fetchone()
    if not row:
        return render_template("login.html", msg="No such user.", ok=False)
    hashed = row[0]
    if check_password_hash(hashed, password):
        return render_template("index.html", msg=f"Welcome, {row[1]}!", ok=True)
    else:
        return render_template("login.html", msg="Incorrect password.", ok=False)
if __name__ == "__main__":
    app.run(debug=True)
