from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)   # VERY IMPORTANT (prevents Failed to fetch error)


# -----------------------------
# DATABASE INITIALIZATION
# -----------------------------

def init_db():
    conn = sqlite3.connect("students.db")
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            roll TEXT NOT NULL,
            department TEXT NOT NULL,
            year TEXT NOT NULL,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


init_db()


# -----------------------------
# REGISTER ROUTE
# -----------------------------

@app.route("/register", methods=["POST"])
def register():
    try:
        data = request.json

        name = data.get("name")
        roll = data.get("roll")
        department = data.get("department")
        year = data.get("year")
        username = data.get("username")
        password = data.get("password")

        conn = sqlite3.connect("students.db")
        cursor = conn.cursor()

        cursor.execute("""
            INSERT INTO students (name, roll, department, year, username, password)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (name, roll, department, year, username, password))

        conn.commit()
        conn.close()

        return jsonify({"message": "Account created successfully"}), 201

    except sqlite3.IntegrityError:
        return jsonify({"message": "Username already exists"}), 400

    except Exception as e:
        return jsonify({"message": str(e)}), 500


# -----------------------------
# LOGIN ROUTE
# -----------------------------

@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.json

        username = data.get("username")
        password = data.get("password")

        conn = sqlite3.connect("students.db")
        cursor = conn.cursor()

        cursor.execute("""
            SELECT name, roll, department, year
            FROM students
            WHERE username = ? AND password = ?
        """, (username, password))

        student = cursor.fetchone()
        conn.close()

        if student:
            return jsonify({
                "success": True,
                "student": {
                    "name": student[0],
                    "roll": student[1],
                    "department": student[2],
                    "year": student[3]
                }
            })
        else:
            return jsonify({"success": False, "message": "Invalid credentials"}), 401

    except Exception as e:
        return jsonify({"message": str(e)}), 500

@app.route("/")
def home():
    return "Student Portal Backend is Running"
# -----------------------------
# RUN SERVER
# -----------------------------

if __name__ == "__main__":
    app.run(debug=True)