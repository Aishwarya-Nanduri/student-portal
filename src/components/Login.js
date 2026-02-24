import React, { useState } from "react";

function Login({ setIsLoggedIn, setStudentData }) {

  // Toggle between login and register
  const [isRegistering, setIsRegistering] = useState(false);

  // Register fields
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  // Common fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (data.success) {
        setStudentData(data.student);
        setIsLoggedIn(true);
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server.");
    }
  };


  // ---------------- REGISTER ----------------
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          roll,
          department,
          year,
          username,
          password
        })
      });

      const data = await response.json();

      alert(data.message);

      if (response.status === 201) {
        setIsRegistering(false);
      }

    } catch (error) {
      console.error("Register error:", error);
      alert("Unable to connect to server.");
    }
  };


  return (
    <div className="login-container">

      <div className="login-card">
        <h2>{isRegistering ? "Create Account" : "Student Login"}</h2>

        <form onSubmit={isRegistering ? handleRegister : handleLogin}>

          {isRegistering && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Roll Number"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </>
          )}

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {isRegistering ? "Create Account" : "Login"}
          </button>

        </form>

        <p>
          {isRegistering ? "Already have an account?" : "Don't have an account?"}
          <span
            className="toggle-link"
            onClick={() => setIsRegistering(!isRegistering)}
            style={{ marginLeft: "5px", cursor: "pointer", fontWeight: "bold" }}
          >
            {isRegistering ? "Login" : "Create Account"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;