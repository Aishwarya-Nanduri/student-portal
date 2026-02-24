# 🎓 Student Portal – Full Stack Web Application

A complete Full Stack Student Portal built using **React (Frontend)** and **Flask + SQLite (Backend)**.

This application allows students to:

- Create an account
- Log in securely
- View their personal details
- View marks specific to their account
- View attendance specific to their account

Each student has their own database record, ensuring personalized data access.

---

## 🚀 Features

✅ Student Registration  
✅ Secure Login Authentication  
✅ Individual Student Dashboard  
✅ Relational Database Design  
✅ Marks Management (Student-specific)  
✅ Attendance Tracking (Student-specific)  
✅ Clean UI with pastel theme  
✅ Full-stack architecture  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Python
- Flask
- Flask-CORS
- SQLite (Built-in database)

---

## 🗄️ Database Design

The application uses a relational database structure:

### 1️⃣ Students Table
- id (Primary Key)
- name
- roll
- department
- year
- username (Unique)
- password

### 2️⃣ Marks Table
- id
- student_id (Foreign Key)
- maths
- science
- english

### 3️⃣ Attendance Table
- id
- student_id (Foreign Key)
- total_classes
- attended_classes

Each student has unique marks and attendance records linked via foreign keys.

---

## 📁 Project Structure

```text
student-portal/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── students.db
│   └── __pycache__/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── StudentDetails.js
│   │   │   ├── Marks.js
│   │   │   └── Attendance.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   │
│   ├── package.json
│   └── node_modules/
│
├── .gitignore
└── README.md
```
